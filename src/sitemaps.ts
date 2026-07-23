import { articles } from "../data/articles";
import { services } from "../data/services";
import type { StateRow } from "./locationTemplates";

const DOMAIN = "garagedoorgazette.com";
export const SITEMAP_LIMIT = 2000;
const URLS_PER_CITY = services.length + 1;
const CORE_PATHS = [
  "/",
  "/services/",
  "/areas-we-serve/",
  "/articles/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
  "/disclaimer/",
  "/cookie-policy/",
  "/editorial-policy/",
  "/provider-disclosure/",
  "/accessibility/",
];

function xml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char] || char);
}

function xmlResponse(body: string, method = "GET") {
  const bytes = new TextEncoder().encode(body);
  return new Response(method === "HEAD" ? null : bytes, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "content-length": String(bytes.byteLength),
      "cache-control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800",
      "x-content-type-options": "nosniff",
      "access-control-allow-origin": "*",
    },
  });
}

export function sitemapIndex(states: StateRow[], method = "GET") {
  const entries = [`https://${DOMAIN}/sitemaps/core.xml`];
  for (const state of states) {
    const chunks = Math.ceil((state.cities.length * URLS_PER_CITY) / SITEMAP_LIMIT);
    for (let chunk = 1; chunk <= chunks; chunk++) {
      entries.push(`https://${DOMAIN}/sitemaps/${state.slug}-${chunk}.xml`);
    }
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((loc) => `  <sitemap><loc>${xml(loc)}</loc></sitemap>`).join("\n")}\n</sitemapindex>`;
  return xmlResponse(body, method);
}

export function coreSitemap(states: StateRow[], method = "GET") {
  const urls = [
    ...CORE_PATHS.map((path) => `https://${DOMAIN}${path}`),
    ...services.map((service) => `https://${DOMAIN}/services/${service.slug}/`),
    ...articles.map((article) => `https://${DOMAIN}/articles/${article.slug}/`),
    ...states.map((state) => `https://${state.slug}.${DOMAIN}/`),
  ];
  return sitemapUrlset(urls, method);
}

export function stateSitemap(state: StateRow, chunk: number, method = "GET") {
  if (!Number.isInteger(chunk) || chunk < 1) return null;
  const start = (chunk - 1) * SITEMAP_LIMIT;
  const total = state.cities.length * URLS_PER_CITY;
  if (start >= total) return null;
  const end = Math.min(total, start + SITEMAP_LIMIT);
  const urls: string[] = [];
  for (let index = start; index < end; index++) {
    const cityIndex = Math.floor(index / URLS_PER_CITY);
    const pageIndex = index % URLS_PER_CITY;
    const [citySlug] = state.cities[cityIndex];
    const host = `${citySlug}-${state.slug}.${DOMAIN}`;
    urls.push(pageIndex === 0 ? `https://${host}/` : `https://${host}/${services[pageIndex - 1].slug}/`);
  }
  return sitemapUrlset(urls, method);
}

function sitemapUrlset(urls: string[], method = "GET") {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((loc) => `  <url><loc>${xml(loc)}</loc></url>`).join("\n")}\n</urlset>`;
  return xmlResponse(body, method);
}

export function sitemapStats(states: StateRow[]) {
  const cities = states.reduce((sum, state) => sum + state.cities.length, 0);
  const core = CORE_PATHS.length + services.length + articles.length + states.length;
  const total = core + cities * URLS_PER_CITY;
  const files = 1 + states.reduce((sum, state) => sum + Math.ceil((state.cities.length * URLS_PER_CITY) / SITEMAP_LIMIT), 0);
  return { cities, core, total, files, services: services.length };
}
