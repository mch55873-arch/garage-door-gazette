import locationDatabase from "../data/usa_locations.json";
import { services } from "../data/services";
import { articles } from "../data/articles";

type Env = { ASSETS: { fetch(input: Request | string): Promise<Response> } };
type Ctx = { waitUntil(promise: Promise<unknown>): void };
type StateRow = { code: string; name: string; slug: string; cities: [string, string][] };
type LocationDatabase = { states: StateRow[] };

const DOMAIN = "garagedoorgazette.com";
const DB = locationDatabase as LocationDatabase;
const STATE_BY_SLUG = new Map(DB.states.map((state) => [state.slug, state]));
const STATE_SLUGS = DB.states.map((state) => state.slug).sort((a, b) => b.length - a.length);
const CORE_PATHS = ["/", "/services/", "/locations/", "/articles/", "/about/", "/contact/", "/privacy-policy/", "/terms/", "/disclaimer/", "/cookie-policy/", "/editorial-policy/", "/provider-disclosure/", "/accessibility/"];
const URLS_PER_CITY = services.length + 1;
const SITEMAP_LIMIT = 40000;

const CSS = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#172033;background:#fff}a{color:inherit;text-decoration:none}.wrap{width:min(1180px,calc(100% - 32px));margin:auto}.top{background:#101826;color:#dce7f3;font-size:12px}.top .wrap,.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px}.top .wrap{padding:9px 0}.nav{background:#fff;border-bottom:1px solid #dfe6ee;box-shadow:0 8px 28px rgba(16,24,38,.08)}.nav .wrap{padding:14px 0}.brand{display:flex;align-items:center;gap:11px;font-size:20px;font-weight:900;color:#101826}.logo{width:43px;height:43px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#1476c8,#0d4f8b);color:#fff}.brand small{display:block;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6c7a8b}.links{display:flex;gap:22px;font-size:14px;font-weight:800}.links a:hover{color:#1476c8}.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 20px;border-radius:10px;background:#f47a1f;color:#fff;font-weight:900;box-shadow:0 10px 24px rgba(244,122,31,.22)}.btn.dark{background:#101826}.btn.ghost{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.3);box-shadow:none}.hero{position:relative;isolation:isolate;color:#fff;background:radial-gradient(circle at 86% 10%,rgba(56,160,232,.25),transparent 32%),linear-gradient(135deg,#101826 0%,#173653 60%,#0d578e 100%);padding:78px 0}.hero h1{font-size:clamp(42px,6vw,68px);line-height:1.02;letter-spacing:-.04em;margin:17px 0}.hero h1 em{font-style:normal;color:#78c8f5}.hero p{max-width:760px;color:#d5e2ee;font-size:18px;line-height:1.72}.crumb{font-size:13px;color:#bfd0df}.crumb a{color:#8bd3ff}.pill{display:inline-flex;margin-top:22px;padding:8px 12px;border-radius:999px;background:rgba(69,173,238,.14);border:1px solid rgba(139,211,255,.25);color:#a6dcff;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.1em}.buttons{display:flex;flex-wrap:wrap;gap:12px;margin-top:25px}.stats{border-bottom:1px solid #dfe6ee}.stats .wrap{display:grid;grid-template-columns:repeat(4,1fr)}.stat{text-align:center;padding:25px 12px;border-left:1px solid #dfe6ee}.stat:first-child{border-left:0}.stat strong{display:block;font-size:30px;color:#101826}.stat span{font-size:11px;color:#748295;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.section{padding:72px 0}.soft{background:#f3f6f9}.head{display:flex;justify-content:space-between;align-items:end;gap:25px;margin-bottom:30px}.eyebrow{color:#1476c8;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.13em}.section h2{font-size:clamp(32px,4vw,46px);line-height:1.1;letter-spacing:-.03em;margin:8px 0}.muted{color:#667486;line-height:1.75}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{display:block;background:#fff;border:1px solid #dfe6ee;border-radius:16px;padding:23px;box-shadow:0 7px 24px rgba(16,24,38,.05);transition:.2s}.card:hover{transform:translateY(-3px);border-color:#78c8f5;box-shadow:0 16px 38px rgba(16,24,38,.1)}.card b{display:inline-grid;place-items:center;width:43px;height:43px;border-radius:12px;background:#eaf4fb;color:#1476c8}.card h3{font-size:19px;color:#101826;margin:16px 0 8px}.card p{color:#667486;font-size:14px;line-height:1.65;margin:0}.more{display:inline-block;margin-top:16px;color:#1476c8;font-weight:900;font-size:14px}.directory{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.directory a{padding:12px 13px;border:1px solid #dfe6ee;border-radius:10px;background:#fff;color:#344054;font-size:13px;font-weight:800}.directory a:hover{color:#1476c8;border-color:#78c8f5}.content{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:36px}.article{font-size:16px;line-height:1.8}.article h2{font-size:29px;color:#101826;margin-top:38px}.article li,.article p{color:#667486}.side{position:sticky;top:24px;align-self:start;background:linear-gradient(145deg,#101826,#174c74);color:#fff;border-radius:18px;padding:25px}.side p{color:#d5e2ee;line-height:1.65}.notice{background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:18px;color:#9a3412;line-height:1.65}.footer{background:#101826;color:#aebdca;padding:48px 0 22px}.footer .wrap{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:34px}.footer h3{color:#fff}.footer a{display:block;margin:9px 0}.legal{grid-column:1/-1;border-top:1px solid rgba(255,255,255,.1);padding-top:20px;font-size:12px}.sticky{position:fixed;right:18px;bottom:18px;z-index:80}@media(max-width:900px){.links{display:none}.grid{grid-template-columns:repeat(2,1fr)}.directory{grid-template-columns:repeat(3,1fr)}.content{grid-template-columns:1fr}.side{position:static}.footer .wrap{grid-template-columns:1fr 1fr}}@media(max-width:600px){.top span:last-child{display:none}.hero{padding:58px 0}.grid,.directory,.footer .wrap{grid-template-columns:1fr}.stats .wrap{grid-template-columns:1fr 1fr}.stat:nth-child(3){border-left:0;border-top:1px solid #dfe6ee}.stat:nth-child(4){border-top:1px solid #dfe6ee}.head{display:block}.btn{width:100%}.sticky{left:12px;right:12px;bottom:12px}}
`;

function esc(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);
}

function xml(value: string) {
  return esc(value);
}

function header() {
  return `<div class="top"><div class="wrap"><span>Nationwide garage door information and provider directory</span><span>Coverage, credentials and pricing vary by independent provider</span></div></div><header class="nav"><div class="wrap"><a class="brand" href="https://${DOMAIN}/"><span class="logo">GD</span><span>Garage Door Gazette<small>Repairs · Installations · Local Guides</small></span></a><nav class="links"><a href="https://${DOMAIN}/services/">Services</a><a href="https://${DOMAIN}/locations/">Locations</a><a href="https://${DOMAIN}/articles/">Guides</a><a href="https://${DOMAIN}/about/">About</a></nav><a class="btn" href="https://${DOMAIN}/contact/">Check Availability</a></div></header>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap"><div><h3>Garage Door Gazette</h3><p>Research garage door problems, compare service options and browse independent-provider routes across the United States.</p></div><div><h3>Explore</h3><a href="https://${DOMAIN}/services/">All ${services.length} Services</a><a href="https://${DOMAIN}/locations/">States & Cities</a><a href="https://${DOMAIN}/articles/">Garage Door Guides</a></div><div><h3>Disclosure</h3><a href="https://${DOMAIN}/provider-disclosure/">Provider Disclosure</a><a href="https://${DOMAIN}/privacy-policy/">Privacy Policy</a><a href="https://${DOMAIN}/terms/">Terms</a></div><div class="legal">© ${new Date().getUTCFullYear()} Garage Door Gazette. This website is an information and referral platform. Providers are independent businesses. Verify current coverage, legal identity, credentials, insurance, scope, pricing and warranties before hiring.</div></div></footer>`;
}

function shell(title: string, description: string, canonical: string, body: string, schema: unknown) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Garage Door Gazette</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow"><style>${CSS}</style><script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script></head><body>${header()}${body}${footer()}<a class="btn sticky" href="https://${DOMAIN}/contact/">Check Local Availability</a></body></html>`;
}

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

function serviceCards(host: string, local: boolean) {
  return services.map((service, index) => `<a class="card" href="${local ? `https://${host}/${service.slug}/` : `https://${DOMAIN}/services/${service.slug}/`}"><b>${String(index + 1).padStart(2, "0")}</b><h3>${esc(service.title)}</h3><p>${esc(service.summary)}</p><span class="more">Review service →</span></a>`).join("");
}

function statePage(state: StateRow, host: string) {
  const cityLinks = state.cities.map(([slug, name]) => `<a href="https://${slug}-${state.slug}.${DOMAIN}/">${esc(name)}</a>`).join("");
  const canonical = `https://${host}/`;
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: `Garage Door Services in ${state.name}`, url: canonical, about: { "@type": "State", name: state.name }, isPartOf: { "@type": "WebSite", name: "Garage Door Gazette", url: `https://${DOMAIN}/` } };
  const body = `<main><section class="hero"><div class="wrap"><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/locations/">Locations</a> / ${esc(state.name)}</div><span class="pill">${state.code.toUpperCase()} garage door directory</span><h1>Garage door services across <em>${esc(state.name)}</em></h1><p>Browse all ${services.length} garage door repair, opener, spring, cable, track, panel, maintenance, installation and commercial service topics, then choose a city to review location-specific information.</p><div class="buttons"><a class="btn" href="#cities">Browse ${state.cities.length.toLocaleString()} Cities</a><a class="btn ghost" href="#services">View All Services</a></div></div></section><section class="stats"><div class="wrap"><div class="stat"><strong>${services.length}</strong><span>Service topics</span></div><div class="stat"><strong>${state.cities.length.toLocaleString()}</strong><span>Cities & communities</span></div><div class="stat"><strong>${state.code.toUpperCase()}</strong><span>State directory</span></div><div class="stat"><strong>Local</strong><span>Provider checks</span></div></div></section><section class="section soft" id="cities"><div class="wrap"><div class="head"><div><span class="eyebrow">City directory</span><h2>Garage door service locations in ${esc(state.name)}</h2><p class="muted">Choose a city or community. Availability and service terms must be confirmed directly with the independent provider.</p></div></div><div class="directory">${cityLinks}</div></div></section><section class="section" id="services"><div class="wrap"><div class="head"><div><span class="eyebrow">Complete service directory</span><h2>All ${services.length} garage door services</h2></div><a class="btn dark" href="https://${DOMAIN}/services/">National Service Hub</a></div><div class="grid">${serviceCards(host, false)}</div></div></section><section class="section soft"><div class="wrap"><div class="notice"><strong>Provider disclosure:</strong> A state or city page is geographic navigation, not a claim that one company owns an office, employs technicians or holds every required credential in every listed community.</div></div></section></main>`;
  return shell(`Garage Door Repair Services in ${state.name}`, `Browse ${services.length} garage door services and ${state.cities.length} city routes in ${state.name}.`, canonical, body, schema);
}

function cityPage(state: StateRow, city: [string, string], host: string) {
  const [citySlug, cityName] = city;
  const canonical = `https://${host}/`;
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: `Garage Door Services in ${cityName}, ${state.name}`, url: canonical, about: { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: state.name } }, isPartOf: { "@type": "WebSite", name: "Garage Door Gazette", url: `https://${DOMAIN}/` } };
  const body = `<main><section class="hero"><div class="wrap"><div class="crumb"><a href="https://${state.slug}.${DOMAIN}/">${esc(state.name)}</a> / ${esc(cityName)}</div><span class="pill">Local garage door service guide</span><h1>Garage door repair in <em>${esc(cityName)}, ${esc(state.name)}</em></h1><p>Review all ${services.length} garage door service topics for ${esc(cityName)}. Describe the door condition, property ZIP code, urgency and visible damage, then confirm provider coverage, credentials, written scope, total price and warranty terms.</p><div class="buttons"><a class="btn" href="https://${DOMAIN}/contact/">Check Local Availability</a><a class="btn ghost" href="#services">Browse Services</a></div></div></section><section class="stats"><div class="wrap"><div class="stat"><strong>${services.length}</strong><span>Local service topics</span></div><div class="stat"><strong>${state.code.toUpperCase()}</strong><span>${esc(state.name)}</span></div><div class="stat"><strong>City</strong><span>${esc(cityName)}</span></div><div class="stat"><strong>Direct</strong><span>Scope verification</span></div></div></section><section class="section soft" id="services"><div class="wrap"><div class="head"><div><span class="eyebrow">Garage door services</span><h2>Services available to review in ${esc(cityName)}</h2><p class="muted">Select the exact problem or project for detailed warning signs, service scope and hiring questions.</p></div></div><div class="grid">${serviceCards(host, true)}</div></div></section><section class="section"><div class="wrap content"><article class="article"><h2>What to describe when requesting service</h2><ul><li>Whether the door is open, closed, stuck, crooked, noisy, off track or unsecured.</li><li>Visible spring, cable, roller, track, hinge, panel, seal, sensor or opener damage.</li><li>Door material, size, approximate age, opener brand and model when known.</li><li>Property ZIP code and any immediate access, safety, security or weather concern.</li></ul><h2>Confirm the provider before authorizing work</h2><p>Ask for the legal business identity, applicable credentials, insurance, diagnosis, parts, labor, service-call charges, taxes, permits, disposal, total price, exclusions, expected completion time and written warranty. Do not rely only on a headline price.</p><h2>Garage door safety</h2><p>Do not force a heavy, unsupported, off-track or uneven door. Springs, cables, drums and bottom brackets can store dangerous force. Keep people, pets and vehicles away until the system is stabilized and evaluated.</p></article><aside class="side"><h2>Check ${esc(cityName)} coverage</h2><p>Provider availability, response time, service scope, credentials, pricing and warranties vary.</p><a class="btn" href="https://${DOMAIN}/contact/">Request Information</a></aside></div></section></main>`;
  return shell(`Garage Door Repair in ${cityName}, ${state.name}`, `Browse ${services.length} garage door repair and installation service topics for ${cityName}, ${state.name}.`, canonical, body, schema);
}

function localServicePage(state: StateRow, city: [string, string], service: (typeof services)[number], host: string) {
  const [, cityName] = city;
  const canonical = `https://${host}/${service.slug}/`;
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 5);
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Service", name: `${service.title} in ${cityName}, ${state.name}`, serviceType: service.category, description: service.summary, url: canonical, areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: state.name } }, provider: { "@type": "Organization", name: "Garage Door Gazette", url: `https://${DOMAIN}/` } }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: state.name, item: `https://${state.slug}.${DOMAIN}/` }, { "@type": "ListItem", position: 2, name: cityName, item: `https://${host}/` }, { "@type": "ListItem", position: 3, name: service.title, item: canonical }] }] };
  const body = `<main><section class="hero"><div class="wrap"><div class="crumb"><a href="https://${state.slug}.${DOMAIN}/">${esc(state.name)}</a> / <a href="https://${host}/">${esc(cityName)}</a> / ${esc(service.title)}</div><span class="pill">Independent provider availability varies</span><h1>${esc(service.title)} in <em>${esc(cityName)}, ${esc(state.name)}</em></h1><p>${esc(service.summary)} Use this page to understand likely inspection steps, safety concerns and the information to confirm before authorizing work.</p><div class="buttons"><a class="btn" href="https://${DOMAIN}/contact/">Check Local Availability</a><a class="btn ghost" href="https://${host}/">All ${services.length} City Services</a></div></div></section><section class="section"><div class="wrap content"><article class="article"><h2>Start with an accurate diagnosis</h2><p>A professional recommendation should connect the proposed work to visible findings. The provider should inspect the complete door system rather than replacing a component solely from a phone description.</p><h2>Common warning signs</h2><ul><li>The door is heavy, uneven, stuck, jerking, scraping or making a new sound.</li><li>The opener strains, hums, reverses, stops or operates inconsistently.</li><li>Springs, cables, rollers, tracks, hinges, panels, seals or controls show visible damage.</li><li>The opening cannot be secured or the door creates an immediate access or safety concern.</li></ul><h2>What a service visit should evaluate</h2><ul><li>Door balance, travel, alignment and structural condition.</li><li>Springs, cables, drums, bearings, brackets, rollers, tracks and hinges.</li><li>Opener rail, trolley, drive system, controls, sensors and safety reversal.</li><li>Correct part specifications, installation requirements and manufacturer guidance.</li></ul><h2>Questions to ask before approving work</h2><p>Request a written diagnosis and itemized scope covering parts, labor, service-call fees, taxes, permits, disposal, exclusions, total price, payment timing and warranty terms. Confirm the provider's legal identity, applicable credentials and insurance.</p><h2>Safety note</h2><p>Do not touch or loosen loaded springs, cables, drums or bottom brackets. Do not stand beneath an unstable door or continue operating a system that is off track, unsupported or moving unevenly.</p></article><aside class="side"><h2>${esc(service.title)}</h2><p>${esc(cityName)}, ${esc(state.name)}</p><a class="btn" href="https://${DOMAIN}/contact/">Request Service Information</a><h3>Related services</h3>${related.map((item) => `<a class="more" style="color:#9bd6ff;display:block" href="https://${host}/${item.slug}/">${esc(item.title)} →</a>`).join("")}</aside></div></section><section class="section soft"><div class="wrap"><div class="notice"><strong>Important:</strong> Garage Door Gazette is an information and referral platform, not the local contractor performing the work. Confirm the actual provider and all service terms directly.</div></div></section></main>`;
  return shell(`${service.title} in ${cityName}, ${state.name}`, `${service.summary} Review local service information for ${cityName}, ${state.name}.`, canonical, body, schema);
}

function response(html: string, status = 200, extra: Record<string, string> = {}) {
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800", ...extra } });
}

function notFound(message: string) {
  return response(`<!doctype html><html><head><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 | Garage Door Gazette</title><style>${CSS}</style></head><body>${header()}<main class="section"><div class="wrap"><h1>404</h1><p>${esc(message)}</p></div></main>${footer()}</body></html>`, 404, { "x-robots-tag": "noindex" });
}

function sitemapIndex() {
  const entries = [`https://${DOMAIN}/sitemaps/core.xml`];
  for (const state of DB.states) {
    const chunks = Math.ceil((state.cities.length * URLS_PER_CITY) / SITEMAP_LIMIT);
    for (let chunk = 1; chunk <= chunks; chunk++) entries.push(`https://${DOMAIN}/sitemaps/${state.slug}-${chunk}.xml`);
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((loc) => `<sitemap><loc>${xml(loc)}</loc></sitemap>`).join("")}</sitemapindex>`;
  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, s-maxage=86400" } });
}

function coreSitemap() {
  const urls = [
    ...CORE_PATHS.map((path) => `https://${DOMAIN}${path}`),
    ...services.map((service) => `https://${DOMAIN}/services/${service.slug}/`),
    ...articles.map((article) => `https://${DOMAIN}/articles/${article.slug}/`),
    ...DB.states.map((state) => `https://${state.slug}.${DOMAIN}/`),
  ];
  return sitemapUrlset(urls);
}

function stateSitemap(state: StateRow, chunk: number) {
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
  return sitemapUrlset(urls);
}

function sitemapUrlset(urls: string[]) {
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((loc) => `<url><loc>${xml(loc)}</loc></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, s-maxage=86400" } });
}

async function cached(request: Request, ctx: Ctx, render: () => Response) {
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

    if (hostname === `www.${DOMAIN}`) {
      url.hostname = DOMAIN;
      return Response.redirect(url.toString(), 308);
    }

    if (hostname === DOMAIN || hostname.endsWith(".workers.dev")) {
      if (path === "/sitemap.xml") return sitemapIndex();
      if (path === "/sitemaps/core.xml") return coreSitemap();
      const sitemapMatch = path.match(/^\/sitemaps\/(.+)-(\d+)\.xml$/);
      if (sitemapMatch) {
        const state = STATE_BY_SLUG.get(sitemapMatch[1]);
        const sitemap = state ? stateSitemap(state, Number(sitemapMatch[2])) : null;
        return sitemap || new Response("Not Found", { status: 404 });
      }

      const parts = path.split("/").filter(Boolean);
      if (parts[0] === "locations" && parts[1] && STATE_BY_SLUG.has(parts[1])) {
        const state = STATE_BY_SLUG.get(parts[1])!;
        const citySlug = parts[2];
        if (citySlug && state.cities.some(([slug]) => slug === citySlug)) {
          url.hostname = `${citySlug}-${state.slug}.${DOMAIN}`;
          url.pathname = parts[3] ? `/${parts.slice(3).join("/")}/` : "/";
        } else {
          url.hostname = `${state.slug}.${DOMAIN}`;
          url.pathname = "/";
        }
        return Response.redirect(url.toString(), 308);
      }
      if (parts[0] && STATE_BY_SLUG.has(parts[0])) {
        const state = STATE_BY_SLUG.get(parts[0])!;
        const citySlug = parts[1];
        url.hostname = citySlug && state.cities.some(([slug]) => slug === citySlug) ? `${citySlug}-${state.slug}.${DOMAIN}` : `${state.slug}.${DOMAIN}`;
        url.pathname = parts[2] ? `/${parts.slice(2).join("/")}/` : "/";
        return Response.redirect(url.toString(), 308);
      }
      return env.ASSETS.fetch(request);
    }

    if (!hostname.endsWith(`.${DOMAIN}`)) return notFound("This hostname is not configured.");
    if (path.startsWith("/_next/") || path.startsWith("/images/") || /\.[a-z0-9]{2,8}$/i.test(path)) {
      url.hostname = DOMAIN;
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }
    if (["/robots.txt", "/sitemap.xml"].includes(path)) return Response.redirect(`https://${DOMAIN}${path}`, 308);
    if (["/services", "/services/", "/locations", "/locations/", "/articles", "/articles/", "/about", "/about/", "/contact", "/contact/"].some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) return Response.redirect(`https://${DOMAIN}${path}`, 308);

    const subdomain = hostname.slice(0, -(DOMAIN.length + 1));
    const location = parseSubdomain(subdomain);
    if (!location) return notFound("This city or state route could not be found.");

    if (!location.city) {
      if (path !== "/") return Response.redirect(`https://${hostname}/`, 308);
      return cached(request, ctx, () => response(statePage(location.state, hostname)));
    }

    if (path !== "/" && !path.endsWith("/")) {
      url.pathname = `${path}/`;
      return Response.redirect(url.toString(), 308);
    }
    const parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return cached(request, ctx, () => response(cityPage(location.state, location.city!, hostname)));
    if (parts.length > 1) return notFound("This local route could not be found.");
    const service = services.find((item) => item.slug === parts[0]);
    if (!service) return notFound("This garage door service could not be found.");
    return cached(request, ctx, () => response(localServicePage(location.state, location.city!, service, hostname)));
  },
};
