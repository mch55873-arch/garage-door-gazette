import os
import json

print("=== CONVERTING GARAGE DOOR GAZETTE TO 1:1 MOLD REPLICA DESIGN ===")

# 1. Create src/sitemaps.ts
sitemaps_ts = '''import { services } from "../data/services";
import { articles } from "../data/articles";
import database from "../data/usa_database.json";

const DOMAIN = "garagedoorgazette.com";
export const SITEMAP_LIMIT = 2000;
const URLS_PER_CITY = services.length + 1;
const TODAY = "2026-07-30";

export type StateItem = {
  code: string;
  name: string;
  slug: string;
  cities: [string, string][];
};

function xml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char] || char);
}

function xmlResponse(body: string, method = "GET") {
  const bytes = new TextEncoder().encode(body);
  return new Response(method === "HEAD" ? null : bytes, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "content-length": String(bytes.byteLength),
      "cache-control": "public, max-age=86400, s-maxage=604800",
      "x-content-type-options": "nosniff",
      "access-control-allow-origin": "*",
    },
  });
}

export function sitemapIndex(states: StateItem[], method = "GET") {
  const entries = [`https://${DOMAIN}/sitemaps/core.xml`];
  for (const state of states) {
    const chunks = Math.ceil((state.cities.length * URLS_PER_CITY) / SITEMAP_LIMIT);
    for (let chunk = 1; chunk <= chunks; chunk++) {
      entries.push(`https://${DOMAIN}/sitemaps/${state.slug}-${chunk}.xml`);
    }
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((loc) => `  <sitemap>\\n    <loc>${xml(loc)}</loc>\\n    <lastmod>${TODAY}</lastmod>\\n  </sitemap>`).join("\\n")}
</sitemapindex>`;
  return xmlResponse(body, method);
}

export function coreSitemap(states: StateItem[], method = "GET") {
  const corePaths = [
    "/",
    "/about/",
    "/articles/",
    "/services/",
    "/areas-we-serve/",
    "/contact/",
    "/privacy-policy/",
    "/terms/",
    "/disclaimer/",
  ];
  const urls = [
    ...corePaths.map((path) => `https://${DOMAIN}${path}`),
    ...services.map((service) => `https://${DOMAIN}/services/${service.slug}/`),
    ...articles.map((article) => `https://${DOMAIN}/articles/${article.slug}/`),
    ...states.map((state) => `https://${state.slug}.${DOMAIN}/`),
  ];
  return sitemapUrlset(urls, method);
}

export function stateSitemap(state: StateItem, chunk: number, method = "GET") {
  if (!Number.isInteger(chunk) || chunk < 1) return null;
  const start = (chunk - 1) * SITEMAP_LIMIT;
  const total = state.cities.length * URLS_PER_CITY;
  if (start >= total) return null;
  const end = Math.min(total, start + SITEMAP_LIMIT);
  const urls: string[] = [];
  for (let index = start; index < end; index++) {
    const cityIndex = Math.floor(index / URLS_PER_CITY);
    const pageIndex = index % URLS_PER_CITY;
    const city = state.cities[cityIndex];
    if (!city) break;
    const host = `${city[0]}-${state.slug}.${DOMAIN}`;
    urls.push(pageIndex === 0 ? `https://${host}/` : `https://${host}/${services[pageIndex - 1].slug}/`);
  }
  return sitemapUrlset(urls, method);
}

function sitemapUrlset(urls: string[], method = "GET") {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>\\n    <loc>${xml(loc)}</loc>\\n    <lastmod>${TODAY}</lastmod>\\n    <changefreq>weekly</changefreq>\\n  </url>`).join("\\n")}
</urlset>`;
  return xmlResponse(body, method);
}
'''

with open('src/sitemaps.ts', 'w', encoding='utf-8') as f:
    f.write(sitemaps_ts)
print("[OK] Created src/sitemaps.ts for garage-door-gazette")

# 2. Write 1:1 replica locationTemplates.ts
templates_ts = '''import { articles } from "../data/articles";
import { services } from "../data/services";

export type StateItem = {
  code: string;
  name: string;
  slug: string;
  cities: [string, string][];
};

const DOMAIN = "garagedoorgazette.com";
const BRAND = "Garage Door Gazette";
const PHONE_DISPLAY = "+1 (773) 249-5939";
const PHONE_HREF = "tel:+17732495939";
const ADDRESS = "100 N LaSalle St, Chicago, IL 60602";

function esc(str: string): string {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#039;");
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap');
*{box-sizing:border-box}html{scroll-behavior:smooth;overflow-x:hidden}
body{margin:0;background:#0d1b2a;color:#f8fafc;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img,svg,video{max-width:100%;height:auto}
table{display:block;overflow-x:auto;max-width:100%}
a{color:inherit;text-decoration:none}
.wrap{width:min(1280px,calc(100% - 24px));margin:auto}

/* HEADER & TOP BAR */
.top-bar{background:#0b1320;color:#cbd5e1;font-size:13px;border-bottom:1px solid rgba(255,255,255,.08)}
.top-bar .wrap{display:flex;align-items:center;justify-space:space-between;padding:8px 0}
.top-left,.top-right{display:flex;align-items:center;gap:14px}
.pulse-dot{width:8px;height:8px;border-radius:50%;background:#10b981;display:inline-block;box-shadow:0 0 10px #10b981}
.sep{color:#475569}
.stars{color:#fbbf24;letter-spacing:2px;font-size:14px}

.navbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.98);backdrop-filter:blur(16px);border-bottom:1px solid #e2e8f0;box-shadow:0 8px 30px rgba(0,0,0,.08);color:#0f172a}
.navbar .wrap{display:flex;align-items:center;justify-space:space-between;padding:14px 0}
.brand{display:flex;align-items:center;gap:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:900;color:#0d1b2a;letter-spacing:-.03em}
.logo-icon{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,#d97706,#b45309);color:#fff;font-size:22px;box-shadow:0 8px 20px rgba(217,119,6,.3)}
.brand-sub{display:block;font-size:11px;letter-spacing:.02em;color:#64748b;font-family:'Inter',sans-serif;font-weight:500;margin-top:-2px}

.nav-links{display:flex;align-items:center;gap:14px;font-size:14px;font-weight:600;color:#334155}
.nav-links a{padding:6px 10px;border-radius:10px;transition:.2s;white-space:nowrap}
.nav-links a:hover{color:#d97706;background:#f8fafc}

.dropdown{position:relative;display:inline-block}
.dropdown:hover .dropdown-menu{display:block}
.dropdown-menu{display:none;position:absolute;top:100%;left:0;width:280px;background:#fff;border-radius:16px;box-shadow:0 20px 48px rgba(0,0,0,.15);border:1px solid #e2e8f0;padding:10px;z-index:100}
.dropdown-menu a{display:block;padding:10px 14px;font-size:14px;color:#334155;border-radius:10px;font-weight:600}
.dropdown-menu a:hover{background:#f1f5f9;color:#d97706}
.dropdown-menu a.highlight{color:#d97706;font-weight:800;border-top:1px solid #f1f5f9;margin-top:6px;padding-top:12px}

.btn-cta{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 24px;border-radius:14px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:16px;box-shadow:0 8px 24px rgba(249,115,22,.35);transition:.25s;border:none;cursor:pointer}
.btn-cta:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(249,115,22,.5);background:linear-gradient(135deg,#fb923c,#f97316)}
.btn-dark-navy{background:#0d1b2a;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;padding:14px 28px;border-radius:14px;display:inline-flex;align-items:center;gap:8px;font-size:16px;transition:.2s;box-shadow:0 8px 20px rgba(0,0,0,.2)}
.btn-dark-navy:hover{transform:translateY(-2px);background:#14263b}
.btn-glass-amber{background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4);color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;padding:14px 28px;border-radius:14px;display:inline-flex;align-items:center;gap:8px;font-size:16px;transition:.2s;backdrop-filter:blur(8px)}
.btn-glass-amber:hover{background:rgba(255,255,255,.3);transform:translateY(-2px)}

/* HERO & GENERAL SECTIONS */
.page-hero{position:relative;padding:76px 0 88px;background:linear-gradient(rgba(13,27,42,.88),rgba(13,27,42,.95)),url('https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;overflow:hidden}
.page-hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(38px,5vw,56px);font-weight:900;line-height:1.1;margin:16px 0 14px;color:#fff;max-width:820px;letter-spacing:-.03em}
.page-hero h1 span{color:#fbbf24}
.crumb-trail{font-size:14px;color:#fbbf24;font-weight:700;margin-bottom:14px}
.crumb-trail a{color:#94a3b8;transition:.2s}.crumb-trail a:hover{color:#fff}
.tag-badge{display:inline-block;padding:6px 14px;border-radius:999px;background:#fef3c7;color:#b45309;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px}

.sec-white{background:#fff;color:#0f172a;padding:84px 0}
.sec-dark{background:#0d1b2a;color:#fff;padding:84px 0}
.sec-slate{background:#14263b;color:#fff;padding:84px 0}
.sec-gray{background:#f8fafc;color:#0f172a;padding:84px 0}
.sec-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(30px,4vw,44px);font-weight:900;line-height:1.15;margin:0 0 14px;letter-spacing:-.03em}

/* STATS BAR */
.stats-bar{background:#0b1320;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);padding:32px 0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
.stat-item h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;font-weight:900;color:#fbbf24;margin:0}
.stat-item p{font-size:13px;font-weight:700;color:#94a3b8;margin:4px 0 0;text-transform:uppercase;letter-spacing:.05em}

/* GRIDS */
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.dir-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px}
.dir-card-white{display:flex;align-items:center;justify-space:space-between;padding:16px 20px;background:#fff;border:1px solid #e2e8f0;border-radius:14px;color:#0d1b2a;font-weight:700;font-size:14px;transition:.25s;box-shadow:0 4px 12px rgba(0,0,0,.02);text-decoration:none}
.dir-card-white:hover{transform:translateY(-3px);border-color:#d97706;color:#d97706;box-shadow:0 12px 28px rgba(217,119,6,.15)}
.dir-card-white:after{content:"→";color:#d97706;font-weight:900}

/* CARDS */
.service-hub-card{background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:26px;box-shadow:0 8px 24px rgba(0,0,0,.03);transition:.25s;display:flex;flex-direction:column;justify-space:space-between}
.service-hub-card:hover{transform:translateY(-5px);border-color:#d97706;box-shadow:0 16px 36px rgba(217,119,6,.12)}
.service-hub-icon{width:42px;height:42px;border-radius:12px;background:#fef3c7;color:#b45309;display:grid;place-items:center;font-size:20px;margin-bottom:16px}
.service-hub-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:19px;font-weight:800;color:#0d1b2a;margin:0 0 8px}
.service-hub-card p{color:#64748b;font-size:14px;line-height:1.6;margin:0 0 16px}
.service-hub-card a{color:#d97706;font-weight:800;font-size:14px}

.blog-card{background:#fff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.03);transition:.25s;display:flex;flex-direction:column;justify-space:space-between}
.blog-card:hover{transform:translateY(-5px);border-color:#d97706;box-shadow:0 16px 36px rgba(217,119,6,.12)}
.blog-card-img{width:100%;height:190px;object-fit:cover}
.blog-card-body{padding:22px;display:flex;flex-direction:column;flex-grow:1;justify-space:between}
.blog-date{font-size:12px;font-weight:700;color:#94a3b8;margin-bottom:8px}
.blog-card-body h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#0d1b2a;line-height:1.35;margin:0 0 10px}
.blog-card-body p{color:#64748b;font-size:13px;line-height:1.6;margin:0 0 16px}
.blog-card-body a{color:#d97706;font-weight:800;font-size:13px;display:inline-flex;align-items:center;gap:4px}

.service-main-grid{display:grid;grid-template-columns:1fr 380px;gap:44px;align-items:start}
.service-content-box{background:#fff;color:#0f172a;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.04);border:1px solid #e2e8f0}
.service-content-box h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:900;color:#0d1b2a;margin:0 0 16px;letter-spacing:-.02em}
.service-content-box p{color:#475569;font-size:15px;line-height:1.75;margin:0 0 16px}

.warning-cards-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0 32px}
.warning-card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;display:flex;align-items:center;gap:12px;font-weight:700;font-size:14px;color:#0d1b2a}
.warning-card span{color:#f97316;font-size:18px}

.checklist-2col{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0 32px;font-size:14px;font-weight:700;color:#1e293b}
.check-item-line{display:flex;align-items:center;gap:8px}
.check-item-line span{color:#d97706;font-weight:900}

.white-form-card{background:#fff;border-radius:20px;padding:28px;box-shadow:0 20px 50px rgba(0,0,0,.08);border:1px solid #e2e8f0;color:#0f172a}
.white-form-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:900;color:#0d1b2a;margin:0 0 4px}
.white-form-card p{font-size:12px;color:#64748b;margin:0 0 18px}

.faq-item-white{border:1px solid #e2e8f0;border-radius:14px;padding:18px 22px;margin-bottom:12px;background:#fff}
.faq-item-white summary{font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#0d1b2a;cursor:pointer;list-style:none;display:flex;align-items:center;justify-space:space-between}
.faq-item-white summary:after{content:"▼";font-size:12px;color:#d97706}
.faq-item-white p{color:#64748b;font-size:14px;line-height:1.65;margin:12px 0 0}

/* FOOTER */
.footer-cta-banner{background:linear-gradient(135deg,#d97706,#b45309);color:#fff;padding:52px 0}
.footer-cta-flex{display:flex;align-items:center;justify-space:space-between;gap:24px}
.footer-cta-flex h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:32px;font-weight:900;margin:0 0 6px;color:#fff}
.footer-cta-flex p{font-size:16px;margin:0;opacity:.95}
.footer-cta-btns{display:flex;align-items:center;gap:14px}

.footer-main{background:#0d1b2a;color:#94a3b8;padding:72px 0 32px;border-top:1px solid rgba(255,255,255,.08)}
.footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.2fr;gap:40px}
.footer-main h3{font-family:'Plus Jakarta Sans',sans-serif;color:#fff;margin-top:0;font-size:18px;font-weight:800}
.footer-main a{display:block;color:#94a3b8;margin:12px 0;transition:.2s;font-size:14px;font-weight:500}
.footer-main a:hover{color:#fbbf24}

.footer-bottom{background:#08101a;border-top:1px solid rgba(255,255,255,.08);padding:24px 0;font-size:13px;color:#64748b}
.footer-bottom .wrap{display:flex;align-items:center;justify-space:space-between}
.footer-bottom-links{display:flex;gap:20px}
.footer-bottom-links a{color:#94a3b8;transition:.2s}.footer-bottom-links a:hover{color:#fff}

.sticky-bar{position:fixed;bottom:20px;right:20px;z-index:90}
@media(max-width:960px){
  .nav-links{display:none}
  .page-hero .wrap, .service-main-grid, .contact-main-grid{grid-template-columns:1fr!important;gap:32px!important}
  .grid-3,.grid-4,.dir-grid,.stats-grid{grid-template-columns:repeat(2,1fr)}
  .footer-grid,.footer-cta-flex{grid-template-columns:1fr;flex-direction:column;align-items:start}
  .sec-white,.sec-gray,.sec-dark,.sec-slate{padding:54px 0}
  .page-hero{padding:52px 0 60px}
}
@media(max-width:640px){
  .top-bar .top-right{display:none}
  .top-bar .wrap{justify-content:center;text-align:center}
  .navbar .wrap{flex-wrap:wrap;gap:12px}
  .brand{font-size:17px}
  .logo-icon{width:38px;height:38px;font-size:18px}
  .dir-grid,.grid-3,.grid-4,.stats-grid,.warning-cards-grid,.checklist-2col{grid-template-columns:1fr!important}
  .service-content-box{padding:24px!important}
  .white-form-card{padding:20px!important}
  .footer-bottom .wrap{flex-direction:column;gap:12px;text-align:center}
  .footer-bottom-links{flex-wrap:wrap;justify-content:center;gap:12px}
  .sticky-bar{left:12px;right:12px;bottom:12px}
  .btn-cta{width:100%}
}
`;

function header(): string {
  return `<div class="top-bar">
    <div class="wrap">
      <div class="top-left">
        <span class="pulse-dot"></span> <b>24/7 Emergency Garage Repair</b>
        <span class="sep">|</span>
        <span>Mon–Sun 24 Hours Open</span>
      </div>
      <div class="top-right">
        <span class="stars">★★★★★</span> <b>4.9 (15,200+ reviews)</b>
        <span class="sep">|</span>
        <span>Licensed &amp; Insured · Master Technicians</span>
      </div>
    </div>
  </div>
  <header class="navbar">
    <div class="wrap">
      <a class="brand" href="https://${DOMAIN}/">
        <span class="logo-icon">🚗</span>
        <span>${BRAND}<small class="brand-sub">Springs · Openers · Cables · 24/7 Repair</small></span>
      </a>
      <nav class="nav-links">
        <a href="https://${DOMAIN}/">Home</a>
        <div class="dropdown">
          <a href="https://${DOMAIN}/services/">Services ▾</a>
          <div class="dropdown-menu">
            <a href="https://${DOMAIN}/services/garage-door-spring-repair/">Spring Repair</a>
            <a href="https://${DOMAIN}/services/garage-door-opener-repair-installation/">Opener Repair</a>
            <a href="https://${DOMAIN}/services/off-track-garage-door-repair/">Off-Track Repair</a>
            <a href="https://${DOMAIN}/services/garage-door-cable-roller-replacement/">Cable Replacement</a>
            <a href="https://${DOMAIN}/services/" class="highlight">View All ${services.length} Services →</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="https://${DOMAIN}/areas-we-serve/">Service Areas ▾</a>
          <div class="dropdown-menu">
            <a href="https://pennsylvania.${DOMAIN}/">Pennsylvania</a>
            <a href="https://texas.${DOMAIN}/">Texas</a>
            <a href="https://florida.${DOMAIN}/">Florida</a>
            <a href="https://california.${DOMAIN}/">California</a>
            <a href="https://${DOMAIN}/areas-we-serve/" class="highlight">All 50 States Directory →</a>
          </div>
        </div>
        <a href="https://${DOMAIN}/articles/">Guides</a>
        <a href="https://${DOMAIN}/about/">About</a>
        <a href="https://${DOMAIN}/contact/">Contact</a>
      </nav>
      <a class="btn-cta" href="${PHONE_HREF}">📞 ${PHONE_DISPLAY}</a>
    </div>
  </header>`;
}

function footer(): string {
  return `
  <section class="footer-cta-banner">
    <div class="wrap footer-cta-flex">
      <div>
        <h2>Broken Garage Door Spring or Off-Track Emergency?</h2>
        <p>Same-day garage technician dispatch &amp; certified repair across all 50 states.</p>
      </div>
      <div class="footer-cta-btns">
        <a href="${PHONE_HREF}" class="btn-dark-navy">📞 Call ${PHONE_DISPLAY}</a>
        <a href="https://${DOMAIN}/contact/" class="btn-glass-amber">Request Online Quote</a>
      </div>
    </div>
  </section>
  <footer class="footer-main">
    <div class="wrap footer-grid">
      <div>
        <div class="brand" style="color:#fff;margin-bottom:14px;">
          <span class="logo-icon">🚗</span>
          <span>${BRAND}</span>
        </div>
        <p style="font-size:14px;line-height:1.65;color:#94a3b8;">Nationwide certified garage door repair &amp; installation referral network. Licensed, insured, and independent technicians across all 50 US states.</p>
        <div class="stars">★★★★★ <span style="color:#fff;font-size:13px;">4.9/5 · 15,200+ Verified Reviews</span></div>
      </div>
      <div>
        <h3>Garage Door Services</h3>
        <a href="https://${DOMAIN}/services/garage-door-spring-repair/">Spring Replacement</a>
        <a href="https://${DOMAIN}/services/garage-door-opener-repair-installation/">Opener Repair &amp; Install</a>
        <a href="https://${DOMAIN}/services/off-track-garage-door-repair/">Off-Track Realignment</a>
        <a href="https://${DOMAIN}/services/garage-door-cable-roller-replacement/">Cable &amp; Roller Replace</a>
        <a href="https://${DOMAIN}/services/emergency-24-7-garage-door-repair/">24/7 Emergency Repair</a>
        <a href="https://${DOMAIN}/services/" style="color:#fbbf24;font-weight:700;">All ${services.length} Services →</a>
      </div>
      <div>
        <h3>Service Areas</h3>
        <a href="https://${DOMAIN}/areas-we-serve/">All 50 States &amp; DC</a>
        <a href="https://california.${DOMAIN}/">California Services</a>
        <a href="https://texas.${DOMAIN}/">Texas Services</a>
        <a href="https://florida.${DOMAIN}/">Florida Services</a>
        <a href="https://pennsylvania.${DOMAIN}/">Pennsylvania Services</a>
        <a href="https://${DOMAIN}/areas-we-serve/" style="color:#fbbf24;font-weight:700;">All 30,900+ Cities →</a>
      </div>
      <div>
        <h3>Get In Touch</h3>
        <a href="${PHONE_HREF}" style="color:#fff;font-weight:800;font-size:16px;">📞 ${PHONE_DISPLAY}</a>
        <p style="font-size:14px;color:#94a3b8;margin:10px 0 6px;">✉️ dispatch@${DOMAIN}</p>
        <p style="font-size:14px;color:#94a3b8;margin:0 0 6px;">📍 ${ADDRESS}</p>
        <p style="font-size:14px;color:#fbbf24;margin:0;font-weight:700;">🕒 Mon–Sun 24 Hours · 24/7 Emergency Response</p>
      </div>
    </div>
  </footer>
  <div class="footer-bottom">
    <div class="wrap">
      <p>© ${new Date().getFullYear()} ${BRAND}. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="https://${DOMAIN}/about/">About</a>
        <a href="https://${DOMAIN}/services/">Services</a>
        <a href="https://${DOMAIN}/areas-we-serve/">Areas</a>
        <a href="https://${DOMAIN}/articles/">Guides</a>
        <a href="https://${DOMAIN}/privacy-policy/">Privacy Policy</a>
        <a href="https://${DOMAIN}/terms/">Terms</a>
        <a href="https://${DOMAIN}/disclaimer/">Disclaimer</a>
        <a href="https://${DOMAIN}/contact/">Contact</a>
      </div>
    </div>
  </div>`;
}

function shell(title: string, description: string, canonical: string, body: string, schema?: object): string {
  const schemaScript = schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : "";
  return `<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index,follow">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <style>${CSS}</style>
  ${schemaScript}
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
  <div class="sticky-bar"><a class="btn-cta" href="${PHONE_HREF}">⚡ Call ${PHONE_DISPLAY}</a></div>
</body>
</html>`;
}

/* 1. NATIONAL SERVICE PAGE */
export function nationalServicePage(service: any) {
  const canonical = `https://${DOMAIN}/services/${service.slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        provider: { "@type": "Organization", name: BRAND, url: `https://${DOMAIN}/` },
        areaServed: { "@type": "Country", name: "United States" }
      }
    ]
  };

  const body = `<main>
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 380px;gap:44px;align-items:start;">
      <div>
        <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/services/">Services</a> / ${esc(service.title)}</div>
        <span class="tag-badge">SAME-DAY TECHNICIAN DISPATCH</span>
        <h1>${esc(service.title)} <span>Guide &amp; Referral Hub</span></h1>
        <p style="color:#cbd5e1;font-size:16px;line-height:1.7;">Fast, licensed, and certified garage door technician response across all 50 states. 24/7 emergency spring repair, opener replacement, and cable alignment.</p>
        <div style="display:flex;gap:14px;margin-top:24px;">
          <a class="btn-cta" href="${PHONE_HREF}">Submit &amp; Call ${PHONE_DISPLAY}</a>
          <a class="btn-glass-amber" href="https://${DOMAIN}/contact/">Request Free Quote</a>
        </div>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best price estimate for garage repair</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;">
              <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;" required>
                <option value="">Select Service Needed *</option>
                <option>${esc(service.title)}</option>
              </select>
            </div>
            <div style="margin-bottom:14px;">
              <textarea placeholder="Describe garage door issue or door size..." style="width:100%;height:80px;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;font-family:inherit;resize:none;"></textarea>
            </div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap service-main-grid">
      <div class="service-content-box">
        <span class="tag-badge">PROFESSIONAL REPAIR</span>
        <h2>Trusted ${esc(service.title)} Specialists</h2>
        <p>${esc(service.summary)} When dealing with heavy torsion springs, frayed steel cables, or unaligned track rollers, certified garage technicians prioritize safety and property protection.</p>

        <div class="warning-cards-grid">
          <div class="warning-card"><span>⚠️</span> High Tension Spring Injury Risk</div>
          <div class="warning-card"><span>⚠️</span> Door Off-Track Falling Danger</div>
          <div class="warning-card"><span>⚠️</span> Frayed Cable Snapping Hazard</div>
          <div class="warning-card"><span>⚠️</span> Opener Motor Burnout &amp; Gear Stripping</div>
        </div>

        <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#0d1b2a;margin:32px 0 14px;">Professional Repair Capabilities</h3>
        <div class="checklist-2col">
          <div class="check-item-line"><span>✔</span> High-Cycle Torsion &amp; Extension Spring Replacement</div>
          <div class="check-item-line"><span>✔</span> Heavy-Duty Steel Cable &amp; Roller Realignment</div>
          <div class="check-item-line"><span>✔</span> Smart Wi-Fi Opener Motor Installation</div>
          <div class="check-item-line"><span>✔</span> Track Alignment &amp; Bent Panel Straightening</div>
          <div class="check-item-line"><span>✔</span> Weatherstripping Bottom Seal Replacement</div>
          <div class="check-item-line"><span>✔</span> Complete Safety Reverse Sensor Testing</div>
        </div>

        <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#0d1b2a;margin:36px 0 16px;">Frequently Asked Questions</h3>
        <details class="faq-item-white">
          <summary>How quickly can a garage door technician arrive?</summary>
          <p>We dispatch local certified garage door technicians 24/7 across all 50 US states. Emergency response times average under 30 minutes.</p>
        </details>
        <details class="faq-item-white">
          <summary>Can I replace a broken garage door spring myself?</summary>
          <p>We strongly advise against DIY spring replacement. Garage door springs operate under intense tension and can cause severe injury if improperly handled.</p>
        </details>
        <details class="faq-item-white">
          <summary>Do you service all garage door brands?</summary>
          <p>Yes! Our network services LiftMaster, Chamberlain, Craftsman, Genie, Wayne Dalton, Clopay, and Amarr doors.</p>
        </details>
      </div>

      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best estimate for garage repair</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  </main>`;

  return shell(`${service.title} Guide &amp; Referral Hub | ${BRAND}`, service.summary, canonical, body, schema);
}

/* 2. LOCAL CITY SERVICE PAGE */
export function localServicePage(state: StateItem, city: [string, string], service: any, host: string) {
  const [, cityName] = city;
  const canonical = `https://${host}/${service.slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${service.title} in ${cityName}, ${state.name}`,
        description: service.summary,
        provider: { "@type": "Organization", name: BRAND, url: `https://${host}/` },
        areaServed: { "@type": "City", name: cityName }
      }
    ]
  };

  const body = `<main>
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 380px;gap:44px;align-items:start;">
      <div>
        <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${host}/">${esc(cityName)}</a> / ${esc(service.title)}</div>
        <span class="tag-badge">SAME-DAY LOCAL TECHNICIAN</span>
        <h1>${esc(service.title)} in <span>${esc(cityName)}, ${esc(state.name)}</span></h1>
        <p style="color:#cbd5e1;font-size:16px;line-height:1.7;">Certified 24/7 emergency garage door spring replacement, opener repair, and off-track service in ${esc(cityName)}.</p>
        <div style="display:flex;gap:14px;margin-top:24px;">
          <a class="btn-cta" href="${PHONE_HREF}">📞 Call ${PHONE_DISPLAY}</a>
          <a class="btn-glass-amber" href="https://${DOMAIN}/contact/">Request Quote</a>
        </div>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best estimate for ${esc(cityName)}</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap service-main-grid">
      <div class="service-content-box">
        <span class="tag-badge">LOCAL ${cityName.toUpperCase()} CARE</span>
        <h2>Trusted ${esc(service.title)} in ${esc(cityName)}</h2>
        <p>${esc(service.summary)} Providing prompt, certified garage door repair across ${esc(cityName)} and neighboring communities.</p>

        <div class="warning-cards-grid">
          <div class="warning-card"><span>⚠️</span> High Tension Spring Danger</div>
          <div class="warning-card"><span>⚠️</span> Heavy Metal Door Off-Track</div>
          <div class="warning-card"><span>⚠️</span> Broken Cables &amp; Worn Rollers</div>
          <div class="warning-card"><span>⚠️</span> Unresponsive Opener Motor</div>
        </div>

        <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#0d1b2a;margin:32px 0 14px;">Local Capabilities</h3>
        <div class="checklist-2col">
          <div class="check-item-line"><span>✔</span> Rapid 30-Minute Dispatch</div>
          <div class="check-item-line"><span>✔</span> High-Cycle Torsion Spring Replace</div>
          <div class="check-item-line"><span>✔</span> Smart Opener Repair &amp; Install</div>
          <div class="check-item-line"><span>✔</span> Off-Track Realignment</div>
          <div class="check-item-line"><span>✔</span> Multi-Point Safety Inspection</div>
          <div class="check-item-line"><span>✔</span> 100% Satisfaction Guarantee</div>
        </div>
      </div>

      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best estimate for ${esc(cityName)}</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  </main>`;

  return shell(`${service.title} in ${cityName}, ${state.name} | ${BRAND}`, `24/7 emergency ${service.title.toLowerCase()} in ${cityName}, ${state.name}.`, canonical, body, schema);
}

/* 3. ARTICLES HUB PAGE */
export function articlesHubPage() {
  const canonical = `https://${DOMAIN}/articles/`;
  const articleCardsHtml = (articles as any[]).map((art) => `
    <div class="blog-card">
      <img src="https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="${esc(art.title)}" class="blog-card-img">
      <div class="blog-card-body">
        <div>
          <div class="blog-date">July 2026 · By Master Garage Specialist</div>
          <h3>${esc(art.title)}</h3>
          <p>${esc(art.summary || art.directAnswer)}</p>
        </div>
        <a href="https://${DOMAIN}/articles/${art.slug}/">Read Master Guide →</a>
      </div>
    </div>
  `).join("");

  const body = `<main>
  <section class="page-hero">
    <div class="wrap">
      <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / Guides</div>
      <span class="tag-badge">GARAGE DOOR REPAIR GUIDES</span>
      <h1>Garage Door Repair &amp; Maintenance <span>Master Guides</span></h1>
      <p style="color:#cbd5e1;font-size:16px;">Comprehensive technical guides, spring replacement procedures, opener troubleshooting manuals, and safety inspection checklists.</p>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap">
      <div class="grid-3">${articleCardsHtml}</div>
    </div>
  </section>
  </main>`;

  return shell(`Garage Door Repair Master Guides | ${BRAND}`, "Browse master technical guides on garage door spring repair, opener replacement, and safety inspection.", canonical, body);
}

/* 4. INDIVIDUAL ARTICLE PAGE */
export function articlePage(article: any) {
  const canonical = `https://${DOMAIN}/articles/${article.slug}/`;

  const warningList = (article.warningSigns || []).map((item: string) => `<li style="padding:10px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;font-size:15px;color:#1e293b;">⚠️ ${esc(item)}</li>`).join("");
  const causesList = (article.commonCauses || []).map((item: string) => `<li style="padding:10px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;font-size:15px;color:#1e293b;">🔧 ${esc(item)}</li>`).join("");
  const checksList = (article.professionalChecks || []).map((item: string) => `<li style="padding:10px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;font-size:15px;color:#1e293b;">✔ ${esc(item)}</li>`).join("");
  const preventionList = (article.prevention || []).map((item: string) => `<li style="padding:10px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;font-size:15px;color:#1e293b;">🛡️ ${esc(item)}</li>`).join("");

  const relatedServicesHtml = (article.serviceSlugs || []).map((sSlug: string) => {
    const s = services.find((serv: any) => serv.slug === sSlug);
    if (!s) return "";
    return `<a class="card" href="https://${DOMAIN}/services/${s.slug}/" style="display:block;padding:16px;background:#fff;border:1px solid #cbd5e1;border-radius:12px;text-decoration:none;margin-bottom:10px;">
      <h4 style="margin:0 0 6px;color:#0f172a;font-size:16px;">🔧 ${esc(s.title)}</h4>
      <p style="margin:0;color:#64748b;font-size:13px;">${esc(s.summary)}</p>
    </a>`;
  }).join("");

  const body = `<main>
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 380px;gap:44px;align-items:start;">
      <div>
        <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/articles/">Guides</a> / ${esc(article.category || "Guide")}</div>
        <span class="tag-badge">${esc((article.category || "Maintenance Guide").toUpperCase())}</span>
        <h1>${esc(article.title)}</h1>
        <p style="color:#cbd5e1;font-size:15px;margin-bottom:16px;">Published: July 2026 · Author: Master Garage Door Specialist</p>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best estimate for garage repair</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-white" style="padding:70px 0;">
    <div class="wrap" style="max-width:920px;">
      ${article.directAnswer ? `
      <div style="background:#fef3c7;border-left:5px solid #d97706;padding:26px;border-radius:14px;margin-bottom:40px;box-shadow:0 6px 20px rgba(217,119,6,.08);">
        <h3 style="margin:0 0 10px;color:#92400e;font-size:20px;font-weight:800;">💡 Direct Answer &amp; Quick Summary</h3>
        <p style="margin:0;color:#78350f;font-size:16px;line-height:1.7;">${esc(article.directAnswer)}</p>
      </div>` : ""}

      <div style="margin-bottom:36px;">
        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:16px;">Technical Overview</h2>
        <p style="font-size:16px;line-height:1.8;color:#334155;">${esc(article.summary)}</p>
      </div>

      ${warningList ? `
      <div style="margin-bottom:36px;">
        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:16px;">⚠️ Key Warning Signs</h2>
        <ul style="list-style:none;padding:0;">${warningList}</ul>
      </div>` : ""}

      ${causesList ? `
      <div style="margin-bottom:36px;">
        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:16px;">🔧 Common Causes</h2>
        <ul style="list-style:none;padding:0;">${causesList}</ul>
      </div>` : ""}

      ${checksList ? `
      <div style="margin-bottom:36px;">
        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:16px;">✔ Professional Inspection &amp; Repair Checklist</h2>
        <ul style="list-style:none;padding:0;">${checksList}</ul>
      </div>` : ""}

      ${preventionList ? `
      <div style="margin-bottom:36px;">
        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:16px;">🛡️ Prevention &amp; Maintenance Tips</h2>
        <ul style="list-style:none;padding:0;">${preventionList}</ul>
      </div>` : ""}

      ${relatedServicesHtml ? `
      <div style="margin-top:48px;padding-top:32px;border-top:1px solid #e2e8f0;">
        <h3 style="font-size:22px;font-weight:800;color:#0f172a;margin-bottom:16px;">🔗 Related Garage Door Services</h3>
        <div>${relatedServicesHtml}</div>
      </div>` : ""}
    </div>
  </section>
  </main>`;

  return shell(`${article.title} | ${BRAND}`, article.summary || article.directAnswer, canonical, body);
}

/* 5. SERVICES HUB PAGE */
export function servicesHubPage() {
  const canonical = `https://${DOMAIN}/services/`;
  const allServiceCardsHtml = services.map((s) => `<div class="service-hub-card"><div><div class="service-hub-icon">🚗</div><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p></div><a href="https://${DOMAIN}/services/${s.slug}/">Review service →</a></div>`).join("");
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Complete Garage Door <span>Repair Services Directory</span></h1></div></section><section class="sec-gray" style="padding:70px 0;"><div class="wrap"><div class="grid-3">${allServiceCardsHtml}</div></div></section></main>`;
  return shell(`Garage Door Repair Services Directory | ${BRAND}`, "Browse all garage door repair services.", canonical, body);
}

/* 6. AREAS WE SERVE PAGE */
export function areasWeServePage(states: StateItem[]) {
  const canonical = `https://${DOMAIN}/areas-we-serve/`;
  const stateCardsHtml = states.map((s) => `<a class="dir-card-white" href="https://${s.slug}.${DOMAIN}/"><span>📍 ${esc(s.name)} (${(s.cities || []).length || 60} cities)</span></a>`).join("");
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Garage Door Technicians by <span>State &amp; City</span></h1></div></section><section class="sec-gray" style="padding:70px 0;"><div class="wrap"><div class="dir-grid">${stateCardsHtml}</div></div></section></main>`;
  return shell(`Service Areas | All 50 US States | ${BRAND}`, "Explore 24/7 garage door technicians across all 50 US states.", canonical, body);
}

/* 7. STATE PAGE */
export function statePage(state: StateItem) {
  const stateSlug = state.slug || state.code.toLowerCase();
  const canonical = `https://${stateSlug}.${DOMAIN}/`;
  const cities = state.cities || [];
  const cityDirectoryHtml = cities.map(([cSlug, cName]) => `<a class="dir-card-white" href="https://${cSlug}-${stateSlug}.${DOMAIN}/"><span>📍 ${esc(cName)}</span></a>`).join("");
  const stateServicesCards = services.map(s => `<div class="service-hub-card"><div><div class="service-hub-icon">🚗</div><h3>${esc(s.title)} in ${esc(state.name)}</h3><p>${esc(s.summary)}</p></div><a href="https://${DOMAIN}/services/${s.slug}/">Review service →</a></div>`).join("");
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Garage Door Repair across <span>${esc(state.name)} (${cities.length} Cities)</span></h1></div></section><section class="sec-gray" style="padding:70px 0;"><div class="wrap"><div style="text-align:center;margin-bottom:32px;"><span class="tag-badge">ALL ${cities.length} CITIES DIRECTORY</span><h2 class="sec-title" style="color:#0d1b2a;">Select Your City in ${esc(state.name)}</h2></div><div class="dir-grid">${cityDirectoryHtml}</div></div></section><section class="sec-white" style="padding:70px 0;"><div class="wrap"><div class="grid-3">${stateServicesCards}</div></div></section></main>`;
  return shell(`Garage Door Repair across ${state.name} (${cities.length} Cities) | ${BRAND}`, `24/7 garage door repair across all ${cities.length} cities in ${state.name}.`, canonical, body);
}

/* 8. CITY PAGE */
export function cityPage(state: StateItem, city: [string, string], host: string) {
  const [, cityName] = city;
  const stateSlug = state.slug || state.code.toLowerCase();
  const canonical = `https://${host}/`;
  const nearbyCities = (state.cities || []).filter(([cSlug]) => cSlug !== city[0]).slice(0, 8);
  const nearbyCardsHtml = nearbyCities.map(([cSlug, cName]) => `<a class="dir-card-white" href="https://${cSlug}-${stateSlug}.${DOMAIN}/"><span>📍 ${esc(cName)}</span></a>`).join("");
  const allServicesDirectoryHtml = services.map(s => `<div class="service-hub-card"><div><div class="service-hub-icon">🚗</div><h3>${esc(s.title)} in ${esc(cityName)}</h3><p>${esc(s.summary)}</p></div><a href="https://${host}/${s.slug}/">Review service →</a></div>`).join("");
  const body = `<main><section class="page-hero"><div class="wrap"><h1>24/7 Garage Door Repair in <span>${esc(cityName)}, ${esc(state.name)}</span></h1></div></section><section class="sec-gray" style="padding:60px 0;"><div class="wrap"><div class="dir-grid">${nearbyCardsHtml}</div></div></section><section class="sec-white" style="padding:70px 0;"><div class="wrap"><div class="grid-3">${allServicesDirectoryHtml}</div></div></section></main>`;
  return shell(`24/7 Garage Door Repair in ${cityName}, ${state.name} | ${BRAND}`, `24/7 local garage technicians in ${cityName}, ${state.name}.`, canonical, body);
}

/* 9. HOMEPAGE */
export function homePage(states: StateItem[]) {
  const canonical = `https://${DOMAIN}/`;
  const statePills = states.map(s => `<a class="dir-card-white" href="https://${s.slug}.${DOMAIN}/"><span>📍 ${esc(s.name)}</span></a>`).join("");
  const topServicesCards = services.slice(0, 6).map(s => `<div class="service-hub-card"><div><div class="service-hub-icon">🚗</div><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p></div><a href="https://${DOMAIN}/services/${s.slug}/">Read More →</a></div>`).join("");

  const blogCardsHtml = (articles as any[]).slice(0, 3).map((art) => `
    <div class="blog-card">
      <img src="https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="${esc(art.title)}" class="blog-card-img">
      <div class="blog-card-body">
        <div>
          <div class="blog-date">July 2026 · By Master Garage Specialist</div>
          <h3>${esc(art.title)}</h3>
          <p>${esc(art.summary || art.directAnswer)}</p>
        </div>
        <a href="https://${DOMAIN}/articles/${art.slug}/">Read Master Guide →</a>
      </div>
    </div>
  `).join("");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://${DOMAIN}/#organization`,
        name: BRAND,
        url: canonical,
        telephone: PHONE_DISPLAY,
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 N LaSalle St",
          addressLocality: "Chicago",
          addressRegion: "IL",
          postalCode: "60602",
          addressCountry: "US"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "15200",
          bestRating: "5"
        },
        areaServed: { "@type": "Country", name: "United States" },
        priceRange: "$$"
      },
      {
        "@type": "WebSite",
        name: BRAND,
        url: canonical
      }
    ]
  };

  const body = `<main>
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 380px;gap:44px;align-items:start;">
      <div>
        <span class="tag-badge" style="background:rgba(251,191,36,.18);color:#fbbf24;">24/7 NATIONWIDE EMERGENCY DISPATCH</span>
        <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(38px,5vw,56px);font-weight:900;color:#fff;line-height:1.1;margin:16px 0 14px;">
          Emergency Garage Door Repair <span style="color:#fbbf24;">Pennsylvania &amp; USA</span>
        </h1>
        <p style="font-size:16px;line-height:1.7;color:#cbd5e1;margin-bottom:24px;">Certified technicians providing 24/7 emergency spring replacement, opener repair, cable alignment, and off-track service across all 50 US states.</p>
        <div style="display:flex;gap:14px;"><a class="btn-cta" href="${PHONE_HREF}">📞 Call ${PHONE_DISPLAY}</a><a class="btn-glass-amber" href="https://${DOMAIN}/contact/">Request Free Quote</a></div>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get best estimate for 24/7 garage repair</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Get Estimate Now →</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS COUNTER BAR -->
  <section class="stats-bar">
    <div class="wrap stats-grid">
      <div class="stat-item"><h3>50 States</h3><p>Nationwide Coverage</p></div>
      <div class="stat-item"><h3>30,900+</h3><p>Cities Served</p></div>
      <div class="stat-item"><h3>30 Mins</h3><p>Emergency Dispatch</p></div>
      <div class="stat-item"><h3>4.9 ★</h3><p>15,200+ Verified Reviews</p></div>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap">
      <div style="text-align:center;margin-bottom:44px;">
        <span class="tag-badge">OUR SERVICES</span>
        <h2 class="sec-title" style="color:#0d1b2a;">Certified Garage Door Services</h2>
      </div>
      <div class="grid-3">${topServicesCards}</div>
      <div style="text-align:center;margin-top:36px;"><a href="https://${DOMAIN}/services/" class="btn-cta">View All Services →</a></div>
    </div>
  </section>

  <!-- FROM OUR BLOG / ARTICLES SECTION -->
  <section class="sec-white" style="padding:70px 0;">
    <div class="wrap">
      <div style="text-align:center;margin-bottom:44px;">
        <span class="tag-badge">FROM OUR BLOG</span>
        <h2 class="sec-title" style="color:#0d1b2a;">Garage Door Repair Guides &amp; Tips</h2>
        <p style="color:#64748b;font-size:15px;max-width:680px;margin:10px auto 0;">Expert repair advice, technical guides, and insights from ${BRAND} specialists.</p>
      </div>
      <div class="grid-3">${blogCardsHtml}</div>
      <div style="text-align:center;margin-top:40px;">
        <a href="https://${DOMAIN}/articles/" class="btn-dark-navy" style="font-size:16px;padding:16px 32px;">Explore All Technical Master Guides →</a>
      </div>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap">
      <div style="text-align:center;margin-bottom:44px;">
        <span class="tag-badge">SERVICE AREAS</span>
        <h2 class="sec-title" style="color:#0d1b2a;">Explore All 50 US States</h2>
      </div>
      <div class="dir-grid">${statePills}</div>
    </div>
  </section>
  </main>`;

  return shell(`${BRAND} | 24/7 Emergency Garage Door Repair`, `Pennsylvania &amp; USA nationwide 24/7 emergency garage door repair across all 50 US states.`, canonical, body, schema);
}

export function aboutUsPage() {
  const canonical = `https://${DOMAIN}/about/`;
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Your Neighbors in the <span>Garage Door Repair</span> Business</h1></div></section></main>`;
  return shell(`About Us | ${BRAND}`, `Learn about ${BRAND}.`, canonical, body);
}

export function contactUsPage() {
  const canonical = `https://${DOMAIN}/contact/`;
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Get In Touch for <span>Fast Service</span></h1></div></section></main>`;
  return shell(`Contact Us | ${BRAND}`, "Contact us.", canonical, body);
}

export function privacyPolicyPage() {
  const canonical = `https://${DOMAIN}/privacy-policy/`;
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Privacy Policy</h1></div></section></main>`;
  return shell(`Privacy Policy | ${BRAND}`, "Privacy Policy.", canonical, body);
}

export function termsOfServicePage() {
  const canonical = `https://${DOMAIN}/terms/`;
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Terms of Service</h1></div></section></main>`;
  return shell(`Terms of Service | ${BRAND}`, "Terms of Service.", canonical, body);
}

export function disclaimerPage() {
  const canonical = `https://${DOMAIN}/disclaimer/`;
  const body = `<main><section class="page-hero"><div class="wrap"><h1>Service Disclaimer</h1></div></section></main>`;
  return shell(`Service Disclaimer | ${BRAND}`, "Service Disclaimer.", canonical, body);
}

export function notFoundPage(message: string) {
  return `<!doctype html><html><head><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 | ${BRAND}</title><style>${CSS}</style></head><body>${header()}<main class="sec-dark"><div class="wrap"><h1>404</h1><p>${esc(message)}</p><a class="btn-cta" href="https://${DOMAIN}/">Back to Home</a></div></main>${footer()}</body></html>`;
}
'''

with open('src/locationTemplates.ts', 'w', encoding='utf-8') as f:
    f.write(templates_ts)
print("[OK] Updated src/locationTemplates.ts to 1:1 mold replica")

# 3. Create standalone wrangler.jsonc
wrangler_jsonc = '''{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "garage-door-gazette",
  "main": "src/worker.ts",
  "compatibility_date": "2026-07-24",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "directory": "./out",
    "binding": "ASSETS",
    "html_handling": "force-trailing-slash",
    "not_found_handling": "404-page",
    "run_worker_first": true
  },
  "routes": [
    { "pattern": "garagedoorgazette.com/*", "zone_name": "garagedoorgazette.com" },
    { "pattern": "www.garagedoorgazette.com/*", "zone_name": "garagedoorgazette.com" },
    { "pattern": "*.garagedoorgazette.com/*", "zone_name": "garagedoorgazette.com" }
  ]
}
'''

with open('wrangler.jsonc', 'w', encoding='utf-8') as f:
    f.write(wrangler_jsonc)
print("[OK] Created standalone wrangler.jsonc")

os.makedirs('out', exist_ok=True)
with open('out/_dummy.txt', 'w', encoding='utf-8') as f:
    f.write('garage-door-gazette dummy asset')
print("[OK] Created out/_dummy.txt")

print("=== CONVERSION SCRIPT COMPLETE ===")
