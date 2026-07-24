import locationDatabase from "../data/usa_locations.json";
import { services } from "../data/services";
import { cityPage, localServicePage, notFoundPage, statePage, type StateRow } from "./locationTemplates";
import { coreSitemap, sitemapIndex, stateSitemap } from "./sitemaps";

type Env = { ASSETS: { fetch(input: Request | string): Promise<Response> } };
type Ctx = { waitUntil(promise: Promise<unknown>): void };
type LocationDatabase = { states: StateRow[] };

const DOMAIN = "garagedoorgazette.com";
const DB = locationDatabase as LocationDatabase;
const STATE_BY_SLUG = new Map(DB.states.map((state) => [state.slug, state]));
const STATE_SLUGS = DB.states.map((state) => state.slug).sort((a, b) => b.length - a.length);

function parseSubdomain(subdomain: string) {
  const directState = STATE_BY_SLUG.get(subdomain);
  if (directState) return { state: directState };
  const stateSlug = STATE_SLUGS.find((slug) => subdomain.endsWith(`-${slug}`));
  if (!stateSlug) return null;
  const state = STATE_BY_SLUG.get(stateSlug)!;
  const citySlug = subdomain.slice(0, -(stateSlug.length + 1));
  const city = state.cities.find(([slug]) => slug === citySlug);
  return city ? { state, city } : null;
}

function htmlResponse(html: string, method = "GET", status = 200, extra: Record<string, string> = {}) {
  const bytes = new TextEncoder().encode(html);
  return new Response(method === "HEAD" ? null : bytes, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "content-length": String(bytes.byteLength),
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "x-content-type-options": "nosniff",
      ...extra,
    },
  });
}

function notFound(message: string, method = "GET") {
  return htmlResponse(notFoundPage(message), method, 404, { "x-robots-tag": "noindex" });
}

function redirect(url: string, status = 308) {
  return Response.redirect(url, status);
}

async function cached(request: Request, ctx: Ctx, render: () => Response) {
  if (request.method === "HEAD") return render();
  const cache = (caches as CacheStorage & { default: Cache }).default;
  const hit = await cache.match(request);
  if (hit) return hit;
  const result = render();
  if (result.ok) ctx.waitUntil(cache.put(request, result.clone()));
  return result;
}

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    if (!["GET", "HEAD"].includes(request.method)) return new Response("Method Not Allowed", { status: 405 });

    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();
    const path = url.pathname;
    const method = request.method;

    if (hostname === `www.${DOMAIN}`) {
      url.hostname = DOMAIN;
      return redirect(url.toString());
    }

    if (hostname === DOMAIN || hostname.endsWith(".workers.dev")) {
      if (path === "/robots.txt") {
        const body = `User-agent: *\nAllow: /\nSitemap: https://${DOMAIN}/sitemap.xml\n`;
        return new Response(method === "HEAD" ? null : body, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, s-maxage=86400",
            "content-length": String(new TextEncoder().encode(body).byteLength),
          },
        });
      }
      if (path === "/sitemap.xml") return cached(request, ctx, () => sitemapIndex(DB.states, method));
      if (path === "/sitemaps/core.xml") return cached(request, ctx, () => coreSitemap(DB.states, method));

      const sitemapMatch = path.match(/^\/sitemaps\/(.+)-(\d+)\.xml$/);
      if (sitemapMatch) {
        const state = STATE_BY_SLUG.get(sitemapMatch[1]);
        if (!state) return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
        const res = stateSitemap(state, Number(sitemapMatch[2]), method);
        if (!res) return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
        return cached(request, ctx, () => res);
      }

      if (path === "/locations" || path === "/locations/") {
        return redirect(`https://${DOMAIN}/areas-we-serve/`);
      }

      const parts = path.split("/").filter(Boolean);
      const locationPrefix = parts[0] === "locations" || parts[0] === "areas-we-serve";
      if (locationPrefix && parts[1] && STATE_BY_SLUG.has(parts[1])) {
        const state = STATE_BY_SLUG.get(parts[1])!;
        const citySlug = parts[2];
        if (citySlug && state.cities.some(([slug]) => slug === citySlug)) {
          url.hostname = `${citySlug}-${state.slug}.${DOMAIN}`;
          url.pathname = parts[3] ? `/${parts.slice(3).join("/")}/` : "/";
        } else {
          url.hostname = `${state.slug}.${DOMAIN}`;
          url.pathname = "/";
        }
        return redirect(url.toString());
      }

      if (parts[0] && STATE_BY_SLUG.has(parts[0])) {
        const state = STATE_BY_SLUG.get(parts[0])!;
        const citySlug = parts[1];
        url.hostname = citySlug && state.cities.some(([slug]) => slug === citySlug)
          ? `${citySlug}-${state.slug}.${DOMAIN}`
          : `${state.slug}.${DOMAIN}`;
        url.pathname = parts[2] ? `/${parts.slice(2).join("/")}/` : "/";
        return redirect(url.toString());
      }

      return env.ASSETS.fetch(request);
    }

    if (!hostname.endsWith(`.${DOMAIN}`)) return notFound("This hostname is not configured.", method);

    if (path.startsWith("/_next/") || path.startsWith("/images/") || /\.[a-z0-9]{2,8}$/i.test(path)) {
      url.hostname = DOMAIN;
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    if (path === "/robots.txt" || path === "/sitemap.xml" || path.startsWith("/sitemaps/")) {
      return redirect(`https://${DOMAIN}${path}`);
    }

    const apexRoutes = ["/services", "/areas-we-serve", "/locations", "/articles", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer", "/cookie-policy", "/editorial-policy", "/provider-disclosure", "/accessibility"];
    if (apexRoutes.some((prefix) => path === prefix || path === `${prefix}/` || path.startsWith(`${prefix}/`))) {
      return redirect(`https://${DOMAIN}${path}`);
    }

    const subdomain = hostname.slice(0, -(DOMAIN.length + 1));
    const location = parseSubdomain(subdomain);
    if (!location) return notFound("This city or state route could not be found.", method);

    if (!location.city) {
      if (path !== "/") return redirect(`https://${hostname}/`);
      return cached(request, ctx, () => htmlResponse(statePage(location.state, hostname), method));
    }

    if (path !== "/" && !path.endsWith("/")) {
      url.pathname = `${path}/`;
      return redirect(url.toString());
    }

    const routeParts = path.split("/").filter(Boolean);
    if (routeParts.length === 0) {
      return cached(request, ctx, () => htmlResponse(cityPage(location.state, location.city!, hostname), method));
    }
    if (routeParts.length > 1) return notFound("This local route could not be found.", method);

    const service = services.find((item) => item.slug === routeParts[0]);
    if (!service) return notFound("This garage door service could not be found.", method);

    return cached(request, ctx, () => htmlResponse(localServicePage(location.state, location.city!, service, hostname), method));
  },
};
