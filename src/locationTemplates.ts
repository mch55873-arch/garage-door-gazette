import { articles } from "../data/articles";
import { services } from "../data/services";

export type StateRow = { code: string; name: string; slug: string; cities: [string, string][] };
const DOMAIN = "garagedoorgazette.com";
const PHONE = "+1 (773) 249-5939";

const IMAGES = {
  hero: "https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600",
  state: "https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600",
  city: "https://images.pexels.com/photos/28384143/pexels-photo-28384143.jpeg?auto=compress&cs=tinysrgb&w=1600",
  service: "https://images.pexels.com/photos/34711989/pexels-photo-34711989.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const CSS = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:#172033;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}.wrap{width:min(1180px,calc(100% - 32px));margin:auto}.top{background:#0d1624;color:#dbe7f5;font-size:12px}.top .wrap,.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px}.top .wrap{padding:9px 0}.top b{color:#c79f55}.nav{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid #dfe6ee;box-shadow:0 10px 32px rgba(16,24,38,.08)}.nav .wrap{padding:14px 0}.brand{display:flex;align-items:center;gap:11px;font-size:20px;font-weight:950;color:#101826;letter-spacing:-.02em}.logo{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#c79f55,#b45309);color:#fff;box-shadow:0 10px 24px rgba(199,159,85,.3)}.brand small{display:block;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#6c7a8b}.links{display:flex;gap:22px;font-size:14px;font-weight:850}.links a:hover{color:#c79f55}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:14px 21px;border-radius:10px;background:#c79f55;color:#fff;font-weight:900;box-shadow:0 10px 24px rgba(199,159,85,.3);transition:.2s;border:none;cursor:pointer}.btn:hover{transform:translateY(-2px);background:#b45309}.btn.dark{background:#101826}.btn.ghost{background:transparent;border:1px solid rgba(255,255,255,.38);box-shadow:none}.hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#0d1624 0%,#15283c 58%,#2b2210 100%);color:#fff;padding:78px 0}.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}.hero h1{font-size:clamp(40px,5.5vw,64px);line-height:1.05;letter-spacing:-.04em;margin:18px 0}.hero h1 em{font-style:normal;color:#c79f55}.hero p{font-size:17px;line-height:1.75;color:#d6e2ee;max-width:760px}.form-card{background:#fff;color:#0f172a;border-radius:22px;padding:28px;box-shadow:0 24px 60px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.2)}.form-card h2{font-size:22px;font-weight:900;margin:0 0 6px;color:#101826}.form-card p{font-size:13px;color:#64748b;margin:0 0 20px}.form-group{margin-bottom:14px}.form-group input,.form-group select,.form-group textarea{width:100%;padding:13px 16px;border-radius:10px;border:1px solid #cbd5e1;font-size:14px;outline:none;background:#f8fafc}.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#c79f55;background:#fff;box-shadow:0 0 0 3px rgba(199,159,85,.2)}.rating-badge{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);font-size:13px;font-weight:800;color:#fff;margin-top:16px}.stars{color:#f59e0b;letter-spacing:2px}.crumb{font-size:13px;color:#b7cad9}.crumb a{color:#c79f55}.eyebrow{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(199,159,85,.18);border:1px solid rgba(199,159,85,.35);color:#fcd34d;font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.buttons{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}.stats{border-bottom:1px solid #dfe6ee;background:#fff}.stats .wrap{display:grid;grid-template-columns:repeat(4,1fr)}.stat{text-align:center;padding:27px 15px;border-left:1px solid #dfe6ee}.stat:first-child{border-left:0}.stat strong{display:block;font-size:31px;color:#101826}.stat span{display:block;margin-top:5px;color:#778495;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.1em}.section{padding:78px 0}.soft{background:#f3f6f9}.blue{background:#fffbeb}.dark-section{background:#101826;color:#fff}.head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:32px}.eyeline{display:inline-block;color:#c79f55;font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.section h2{font-size:clamp(34px,4vw,50px);line-height:1.08;margin:8px 0 0;letter-spacing:-.038em}.muted{max-width:760px;color:#667486;line-height:1.75}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.card{display:block;background:#fff;border:1px solid #dfe6ee;border-radius:18px;padding:25px;box-shadow:0 8px 26px rgba(16,24,38,.06);transition:.2s}.card:hover{transform:translateY(-4px);border-color:#c79f55;box-shadow:0 18px 40px rgba(199,159,85,.18)}.card b{display:grid;place-items:center;width:46px;height:46px;border-radius:13px;background:#fef3c7;color:#b45309;font-size:14px}.card h3{font-size:20px;margin:17px 0 9px;color:#101826;letter-spacing:-.02em}.card p{color:#667486;line-height:1.68;margin:0;font-size:14px}.more{display:inline-block;margin-top:17px;color:#c79f55;font-weight:900;font-size:14px}.directory{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.directory a{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:17px 18px;border:1px solid #dfe6ee;border-radius:13px;background:#fff;color:#344054;font-size:14px;font-weight:850;box-shadow:0 6px 18px rgba(16,24,38,.04);transition:.18s}.directory a:after{content:"→";color:#c79f55}.directory a:hover{transform:translateY(-2px);color:#c79f55;border-color:#c79f55}.zip-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.zip-card{background:#fff;border:1px solid #dfe6ee;border-radius:14px;padding:18px;text-align:center;box-shadow:0 6px 18px rgba(16,24,38,.04);transition:.18s}.zip-card:hover{transform:translateY(-3px);border-color:#c79f55;box-shadow:0 12px 30px rgba(199,159,85,.2)}.zip-card span{display:block;font-size:20px;margin-bottom:6px}.zip-card strong{display:block;font-size:16px;color:#101826}.zip-card small{display:block;font-size:12px;color:#667486;margin-top:4px;font-weight:700}.checklist{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:20px}.check-item{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:700;color:#1e293b}.check-item span{color:#c79f55;font-size:16px}.content{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:40px}.article{font-size:17px;line-height:1.82}.article h2{font-size:30px;color:#101826;margin-top:40px;letter-spacing:-.025em}.article h3{font-size:21px;color:#101826}.article p,.article li{color:#5e6d7e}.article li{margin:8px 0}.side{position:sticky;top:105px;align-self:start;background:linear-gradient(145deg,#101826,#231d10);color:#fff;border-radius:19px;padding:27px;box-shadow:0 18px 45px rgba(16,24,38,.2)}.side p{color:#d5e2ee;line-height:1.65}.side .more{display:block;color:#fcd34d}.notice{background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:19px;color:#9a3412;line-height:1.65}.process{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:34px}.step{background:#fff;border:1px solid #dfe6ee;border-radius:16px;padding:23px}.step b{font-size:35px;color:#dce7ef}.step h3{font-size:20px;color:#101826}.step p{color:#667486;line-height:1.65}.faq{display:grid;gap:12px;margin-top:28px}.faq details{background:#fff;border:1px solid #dfe6ee;border-radius:13px;padding:18px 20px}.faq summary{cursor:pointer;font-weight:900;color:#101826}.faq p{color:#667486;line-height:1.7}.footer{background:#101826;color:#aebdca;padding:54px 0 22px}.footer .wrap{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:36px}.footer h3{color:#fff}.footer a{display:block;margin:10px 0}.legal{grid-column:1/-1;border-top:1px solid rgba(255,255,255,.1);padding-top:20px;font-size:12px}.sticky{position:fixed;right:18px;bottom:18px;z-index:80}@media(max-width:920px){.links{display:none}.hero-grid,.content{grid-template-columns:1fr}.hero-photo img{height:420px}.grid,.zip-grid,.checklist{grid-template-columns:repeat(2,1fr)}.directory{grid-template-columns:repeat(2,1fr)}.process{grid-template-columns:repeat(2,1fr)}.side{position:static}.footer .wrap{grid-template-columns:1fr 1fr}}@media(max-width:620px){.top span:last-child{display:none}.hero{padding:58px 0}.hero h1{font-size:38px}.hero-photo img{height:360px}.grid,.directory,.process,.zip-grid,.checklist,.footer .wrap{grid-template-columns:1fr}.stats .wrap{grid-template-columns:1fr 1fr}.stat:nth-child(3){border-left:0;border-top:1px solid #dfe6ee}.stat:nth-child(4){border-top:1px solid #dfe6ee}.head{display:block}.btn{width:100%}.sticky{left:12px;right:12px;bottom:12px}}
`;

function esc(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);
}

function header() {
  return `<div class="top"><div class="wrap"><span>● &nbsp; Nationwide garage door repair & location directory</span><span><b>Independent provider network</b> &nbsp; | &nbsp; Call ${PHONE}</span></div></div><header class="nav"><div class="wrap"><a class="brand" href="https://${DOMAIN}/"><span class="logo">GD</span><span>Garage Door Gazette<small>Repairs · Openers · Local Guides</small></span></a><nav class="links"><a href="https://${DOMAIN}/services/">Services</a><a href="https://${DOMAIN}/areas-we-serve/">Areas We Serve</a><a href="https://${DOMAIN}/articles/">Guides</a><a href="https://${DOMAIN}/about/">About</a><a href="https://${DOMAIN}/contact/">Contact</a></nav><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a></div></header>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap"><div><h3>Garage Door Gazette</h3><p>Research garage door problems, compare service options and browse independent-provider routes across the United States.</p><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a></div><div><h3>Explore</h3><a href="https://${DOMAIN}/services/">All ${services.length} Services</a><a href="https://${DOMAIN}/areas-we-serve/">States & Cities</a><a href="https://${DOMAIN}/articles/">Garage Door Guides</a><a href="https://${DOMAIN}/about/">About</a></div><div><h3>Disclosure</h3><a href="https://${DOMAIN}/provider-disclosure/">Provider Disclosure</a><a href="https://${DOMAIN}/privacy-policy/">Privacy Policy</a><a href="https://${DOMAIN}/terms/">Terms</a><a href="https://${DOMAIN}/accessibility/">Accessibility</a></div><div class="legal">© ${new Date().getUTCFullYear()} Garage Door Gazette. Providers are independent businesses. Verify licensing, insurance, scope, pricing and warranties before hiring.</div></div></footer>`;
}

function leadFormHtml(locationTitle: string) {
  return `<div class="form-card"><h2>Request a Quote</h2><p>Get best price estimate for garage door repair in ${esc(locationTitle)}</p><form action="tel:${PHONE}" method="GET"><div class="form-group"><input type="text" placeholder="Your Full Name *" required></div><div class="form-group"><input type="tel" placeholder="Phone Number *" required></div><div class="form-group"><select required><option value="">Select Service Needed *</option><option>Garage Door Spring Repair</option><option>Garage Door Opener Repair/Install</option><option>Off-Track / Stuck Garage Door</option><option>Cable & Roller Replacement</option><option>Emergency 24/7 Garage Repair</option><option>New Garage Door Installation</option></select></div><div class="form-group"><textarea rows="2" placeholder="Describe garage door issue or door size..."></textarea></div><button type="submit" class="btn" style="width:100%">Submit &amp; Call ${PHONE}</button></form></div>`;
}

function trustChecklistHtml() {
  return `<div class="checklist"><div class="check-item"><span>✔</span> Upfront &amp; Competitive Pricing</div><div class="check-item"><span>✔</span> Highly Professional Licensed Experts</div><div class="check-item"><span>✔</span> Knowledge of All Local Streets &amp; ZIPs</div><div class="check-item"><span>✔</span> Quick 24/7 Emergency Response</div><div class="check-item"><span>✔</span> Same-Day Broken Spring Repair</div><div class="check-item"><span>✔</span> 100% Customer Delight Commitment</div></div>`;
}

function shell(title: string, description: string, canonical: string, body: string, schema: unknown) {
  return `<!doctype html><html lang="en-US"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Garage Door Gazette</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><style>${CSS}</style><script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script></head><body>${header()}${body}${footer()}<a class="btn sticky" href="tel:${PHONE}">Call ${PHONE}</a></body></html>`;
}

function serviceCards(host: string, local: boolean) {
  return services.map((service, index) => `<a class="card" href="${local ? `https://${host}/${service.slug}/` : `https://${DOMAIN}/services/${service.slug}/`}"><b>${String(index + 1).padStart(2, "0")}</b><h3>${esc(service.title)}</h3><p>${esc(service.summary)}</p><span class="more">Review service →</span></a>`).join("");
}

export function homePage(states: StateRow[]) {
  const canonical = `https://${DOMAIN}/`;
  const stateLinks = states.map((s) => `<a href="https://${s.slug}.${DOMAIN}/"><span>${esc(s.name)}</span></a>`).join("");
  const offerCatalog = {
    "@type": "OfferCatalog",
    name: "Nationwide Garage Door Repair & Installation Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `https://${DOMAIN}/services/${s.slug}/`
      }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `https://${DOMAIN}/#organization`,
        name: "Garage Door Gazette",
        url: canonical,
        telephone: PHONE,
        logo: `https://${DOMAIN}/favicon.ico`,
        hasOfferCatalog: offerCatalog
      },
      {
        "@type": "WebSite",
        name: "Garage Door Gazette",
        url: canonical
      }
    ]
  };

  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><span class="eyebrow">Nationwide garage door directory</span><h1>24/7 Garage Door Repair <em>In Your City</em></h1><p>Research garage door issues, explore ${services.length} specialized service topics and connect with independent service providers across all 50 states.</p><div class="rating-badge"><span class="stars">★★★★★</span><span>Rated 4.9/5 by 18,000+ Homeowners</span></div>${trustChecklistHtml()}<div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a><a class="btn ghost" href="#services">View ${services.length} Services</a></div></div><div>${leadFormHtml("Your City")}</div></div></section><section class="stats"><div class="wrap"><div class="stat"><strong>51</strong><span>States & DC</span></div><div class="stat"><strong>${services.length}</strong><span>Service topics</span></div><div class="stat"><strong>City</strong><span>Local Subdomains</span></div><div class="stat"><strong>Direct</strong><span>24/7 Availability</span></div></div></section><section class="section soft" id="states"><div class="wrap"><div class="head"><div><span class="eyeline">Areas We Serve</span><h2>Garage door service directory by state</h2><p class="muted">Select your state to explore local cities and communities.</p></div></div><div class="directory">${stateLinks}</div></div></section><section class="section" id="services"><div class="wrap"><div class="head"><div><span class="eyeline">Services Directory</span><h2>All ${services.length} garage door services</h2><p class="muted">Review repair, opener, spring, cable, track, panel, weatherproofing, installation, maintenance and commercial topics.</p></div></div><div class="grid">${serviceCards(DOMAIN, false)}</div></div></section></main>`;
  return shell("Garage Door Repair & Service Directory", `Nationwide garage door repair and installation service directory across all 50 US states.`, canonical, body, schema);
}

export function servicesHubPage() {
  const canonical = `https://${DOMAIN}/services/`;
  const offerCatalog = {
    "@type": "OfferCatalog",
    name: "Nationwide Garage Door Repair & Installation Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `https://${DOMAIN}/services/${s.slug}/`
      }
    }))
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "All Garage Door Repair & Installation Services",
        url: canonical,
        hasOfferCatalog: offerCatalog
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / Services</div><span class="eyebrow">National Service Hub</span><h1>Garage door repair &amp; installation <em>services</em></h1><p>Browse our complete catalog of ${services.length} garage door repair, opener installation, spring replacement, cable fix, track alignment, and panel replacement topics.</p><div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a></div></div><div>${leadFormHtml("United States")}</div></div></section><section class="section"><div class="wrap"><div class="head"><div><span class="eyeline">Complete Directory</span><h2>All ${services.length} Service Topics</h2></div></div><div class="grid">${serviceCards(DOMAIN, false)}</div></div></section></main>`;
  return shell("All Garage Door Repair Services Directory", `Browse all ${services.length} garage door repair and installation services across the United States.`, canonical, body, schema);
}

export function nationalServicePage(service: (typeof services)[number]) {
  const canonical = `https://${DOMAIN}/services/${service.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: canonical,
        provider: { "@type": "Organization", name: "Garage Door Gazette", url: `https://${DOMAIN}/` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `https://${DOMAIN}/services/` },
          { "@type": "ListItem", position: 3, name: service.title, item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/services/">Services</a> / ${esc(service.title)}</div><span class="eyebrow">Garage Door Repair</span><h1>${esc(service.title)} <em>Guide & Service Directory</em></h1><p>${esc(service.summary)} Review diagnosis tips, inspection considerations, and local provider options.</p><div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a><a class="btn ghost" href="https://${DOMAIN}/areas-we-serve/">Find Local Technician</a></div></div><div>${leadFormHtml(service.title)}</div></div></section><section class="section content"><div class="wrap article"><span class="eyeline">Service Overview</span><h2>About ${esc(service.title)}</h2><p>${esc(service.summary)} Always start with an accurate assessment before ordering replacement parts or starting DIY repairs.</p></div></section></main>`;
  return shell(`${service.title} - Garage Door Gazette`, service.summary, canonical, body, schema);
}

export function areasWeServePage(states: StateRow[]) {
  const canonical = `https://${DOMAIN}/areas-we-serve/`;
  const stateLinks = states.map((s) => `<a href="https://${s.slug}.${DOMAIN}/"><span>${esc(s.name)} (${s.cities.length} cities)</span></a>`).join("");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Areas We Serve - State & City Garage Door Directories",
        url: canonical
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / Areas We Serve</div><span class="eyebrow">Location Directory</span><h1>Garage door repair by <em>State & City</em></h1><p>Select your state below to explore city subdomains and local independent garage door service technicians.</p><div class="buttons"><a class="btn" href="#states">Browse States</a></div></div><div>${leadFormHtml("United States")}</div></div></section><section class="section soft" id="states"><div class="wrap"><div class="directory">${stateLinks}</div></div></section></main>`;
  return shell("Areas We Serve - State & City Garage Door Directory", "Browse garage door repair service locations across all 50 US states and thousands of local cities.", canonical, body, schema);
}

export function articlesHubPage() {
  const canonical = `https://${DOMAIN}/articles/`;
  const articleCards = articles.map((article) => `<a class="card" href="https://${DOMAIN}/articles/${article.slug}/"><h3>${esc(article.title)}</h3><p>${esc(article.summary || article.directAnswer)}</p><span class="more">Read guide →</span></a>`).join("");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Garage Door Guides & Maintenance Articles",
        url: canonical
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Articles", item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / Articles</div><span class="eyebrow">Expert Advice</span><h1>Garage door repair <em>guides &amp; tips</em></h1><p>Learn how to troubleshoot common garage door issues, maintain opener systems, inspect springs, and prevent costly emergency repairs.</p><div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a></div></div><div>${leadFormHtml("Garage Door Advice")}</div></div></section><section class="section"><div class="wrap"><div class="grid">${articleCards}</div></div></section></main>`;
  return shell("Garage Door Repair Guides & Troubleshooting Articles", "Browse expert garage door repair guides, troubleshooting advice, spring maintenance, and opener safety tips.", canonical, body, schema);
}

export function articlePage(article: (typeof articles)[number]) {
  const canonical = `https://${DOMAIN}/articles/${article.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.summary || article.directAnswer,
        url: canonical,
        publisher: { "@type": "Organization", name: "Garage Door Gazette", url: `https://${DOMAIN}/` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Articles", item: `https://${DOMAIN}/articles/` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/articles/">Articles</a> / ${esc(article.title)}</div><span class="eyebrow">Maintenance Guide</span><h1>${esc(article.title)}</h1><p>${esc(article.excerpt)}</p><div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a></div></div><div>${leadFormHtml(article.title)}</div></div></section><section class="section content"><div class="wrap article"><span class="eyeline">Expert Guide</span><h2>Overview</h2><p>${esc(article.excerpt)}</p></div></section></main>`;
  return shell(`${article.title} - Garage Door Gazette`, article.excerpt, canonical, body, schema);
}

export function infoPage(title: string, content: string, path: string) {
  const canonical = `https://${DOMAIN}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        url: canonical
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: title, item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / ${esc(title)}</div><span class="eyebrow">Information</span><h1>${esc(title)}</h1></div><div>${leadFormHtml(title)}</div></div></section><section class="section content"><div class="wrap article">${content}</div></section></main>`;
  return shell(`${title} | Garage Door Gazette`, `${title} page on Garage Door Gazette.`, canonical, body, schema);
}

export function statePage(state: StateRow, host: string) {
  const cityLinks = state.cities.map(([slug, name]) => `<a href="https://${slug}-${state.slug}.${DOMAIN}/"><span>${esc(name)}</span></a>`).join("");
  const canonical = `https://${host}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `Garage Door Repair Services in ${state.name}`,
        url: canonical,
        about: { "@type": "State", name: state.name },
        isPartOf: { "@type": "WebSite", name: "Garage Door Gazette", url: `https://${DOMAIN}/` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Areas We Serve", item: `https://${DOMAIN}/areas-we-serve/` },
          { "@type": "ListItem", position: 2, name: state.name, item: canonical }
        ]
      }
    ]
  };
  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/">Home</a> / <a href="https://${DOMAIN}/areas-we-serve/">Areas We Serve</a> / ${esc(state.name)}</div><span class="eyebrow">${state.code.toUpperCase()} garage door directory</span><h1>Garage door repair across <em>${esc(state.name)}</em></h1><p>Choose a city or community, review the complete ${services.length}-service directory and prepare for a consultation with an independent garage technician in ${esc(state.name)}.</p><div class="rating-badge"><span class="stars">★★★★★</span><span>Top-Rated ${state.name} Garage Network</span></div>${trustChecklistHtml()}<div class="buttons"><a class="btn" href="#cities">Browse ${state.cities.length.toLocaleString()} Cities</a><a class="btn ghost" href="#services">View All Services</a></div></div><div>${leadFormHtml(state.name)}</div></div></section><section class="stats"><div class="wrap"><div class="stat"><strong>${services.length}</strong><span>Service topics</span></div><div class="stat"><strong>${state.cities.length.toLocaleString()}</strong><span>Cities & communities</span></div><div class="stat"><strong>${state.code.toUpperCase()}</strong><span>State directory</span></div><div class="stat"><strong>Direct</strong><span>Provider verification</span></div></div></section><section class="section soft" id="cities"><div class="wrap"><div class="head"><div><span class="eyeline">Areas we serve</span><h2>Garage door service locations in ${esc(state.name)}</h2><p class="muted">Select a city to open its local service hub.</p></div></div><div class="directory">${cityLinks}</div></div></section><section class="section" id="services"><div class="wrap"><div class="head"><div><span class="eyeline">Complete service directory</span><h2>All ${services.length} garage door services</h2><p class="muted">Review repair, opener, spring, cable, track, panel, weatherproofing, installation, maintenance and commercial topics.</p></div><a class="btn dark" href="https://${DOMAIN}/services/">National Service Hub</a></div><div class="grid">${serviceCards(host, false)}</div></div></section></main>`;
  return shell(`Garage Door Repair Services in ${state.name}`, `Browse ${services.length} garage door repair services and ${state.cities.length} city routes in ${state.name}.`, canonical, body, schema);
}

export function cityPage(state: StateRow, city: [string, string], host: string) {
  const [, cityName] = city;
  const canonical = `https://${host}/`;

  const offerCatalog = {
    "@type": "OfferCatalog",
    name: `Garage Door Repair Services in ${cityName}, ${state.name}`,
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${s.title} in ${cityName}`,
        description: s.summary,
        url: `https://${host}/${s.slug}/`
      }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${canonical}#business`,
        name: `Garage Door Repair ${cityName} LLC`,
        url: canonical,
        telephone: PHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressRegion: state.code.toUpperCase(),
          addressCountry: "US"
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59"
          }
        ],
        hasOfferCatalog: offerCatalog
      },
      {
        "@type": "Product",
        name: `Garage Door Repair in ${cityName}, ${state.name}`,
        description: `24/7 Emergency garage door repair, spring replacement, opener installation in ${cityName}, ${state.name}.`,
        url: canonical,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "186"
        }
      },
      {
        "@type": "HowTo",
        name: `How to book Garage Door Repair in ${cityName}?`,
        description: `Follow these steps to schedule garage door repair in ${cityName}, ${state.name}:`,
        step: [
          { "@type": "HowToStep", name: "Step 1: Initiate Request", text: `Call ${PHONE} or submit the quote form.` },
          { "@type": "HowToStep", name: "Step 2: Provide Details", text: `Describe symptoms (broken spring, off-track, opener noise).` },
          { "@type": "HowToStep", name: "Step 3: Connect Technician", text: `Our network matches you with a trained local ${cityName} technician.` },
          { "@type": "HowToStep", name: "Step 4: On-Site Assessment", text: "Technician inspects door, cables, springs, and tracks." },
          { "@type": "HowToStep", name: "Step 5: Quality Repair & Invoice", text: "Complete repair with warranty and itemized invoice." }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What are your hours of operation in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Our ${cityName} network operates 24/7 for emergency garage door repairs.` }
          },
          {
            "@type": "Question",
            name: `How much does garage door repair cost in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Costs depend on repair scope (springs, cables, openers). We provide upfront estimates before starting work.` }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: state.name, item: `https://${state.slug}.${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: cityName, item: canonical }
        ]
      }
    ]
  };

  const neighborhoodZips = [
    [`Downtown ${cityName}`, `Central ${cityName}`],
    [`North ${cityName}`, `Upper ${cityName}`],
    [`South ${cityName}`, `Metro ${cityName}`],
    [`East ${cityName}`, `Heights ${cityName}`],
    [`West ${cityName}`, `Plaza ${cityName}`],
    [`Suburban ${cityName}`, `Westside ${cityName}`],
    [`Highland ${cityName}`, `Parkway ${cityName}`],
    [`Valley ${cityName}`, `County ${cityName}`]
  ];

  const zipCardsHtml = neighborhoodZips.map(([area, sub]) => `<div class="zip-card"><span>📍</span><strong>${esc(area)}</strong><small>${esc(sub)} Area</small></div>`).join("");

  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${DOMAIN}/areas-we-serve/">Areas We Serve</a> / <a href="https://${state.slug}.${DOMAIN}/">${esc(state.name)}</a> / ${esc(cityName)}</div><span class="eyebrow">Local garage door guide</span><h1>24/7 Garage Door Repair in <em>${esc(cityName)}, ${esc(state.name)}</em></h1><p>Explore the complete ${services.length}-service directory for ${esc(cityName)}. Review warning signs, repair procedures, and connect with top local garage door technicians.</p><div class="rating-badge"><span class="stars">★★★★★</span><span>Rated 4.9/5 ⭐ Golden Rich Snippet Active</span></div>${trustChecklistHtml()}<div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a><a class="btn ghost" href="#services">Browse All Services</a></div></div><div>${leadFormHtml(cityName)}</div></div></section><section class="stats"><div class="wrap"><div class="stat"><strong>${services.length}</strong><span>Service topics</span></div><div class="stat"><strong>${state.code.toUpperCase()}</strong><span>${esc(state.name)}</span></div><div class="stat"><strong>City</strong><span>${esc(cityName)}</span></div><div class="stat"><strong>4.9 ★</strong><span>186+ Client Reviews</span></div></div></section><section class="section soft" id="neighborhoods"><div class="wrap"><div class="head"><div><span class="eyeline">Hyper-Local Coverage</span><h2>Serving ${esc(cityName)} &amp; Surrounding Neighborhoods</h2><p class="muted">Comprehensive 24/7 garage door repair coverage across all ${esc(cityName)} zones and nearby communities.</p></div></div><div class="zip-grid">${zipCardsHtml}</div></div></section><section class="section" id="services"><div class="wrap"><div class="head"><div><span class="eyeline">Garage door services</span><h2>Services to review in ${esc(cityName)}</h2><p class="muted">Select a service topic for detailed inspection guidance and repair options.</p></div></div><div class="grid">${serviceCards(host, true)}</div></div></section></main>`;
  return shell(`Garage Door Repair in ${cityName}, ${state.name}`, `Browse ${services.length} garage door repair and service topics for ${cityName}, ${state.name}.`, canonical, body, schema);
}

export function localServicePage(state: StateRow, city: [string, string], service: (typeof services)[number], host: string) {
  const [, cityName] = city;
  const canonical = `https://${host}/${service.slug}/`;
  const offerCatalog = {
    "@type": "OfferCatalog",
    name: `Garage Door Repair Services in ${cityName}, ${state.name}`,
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${s.title} in ${cityName}`,
        description: s.summary,
        url: `https://${host}/${s.slug}/`
      }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://${host}/#business`,
        name: `Garage Door Repair ${cityName} LLC`,
        url: `https://${host}/`,
        telephone: PHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressRegion: state.code.toUpperCase(),
          addressCountry: "US"
        },
        priceRange: "$$",
        hasOfferCatalog: offerCatalog
      },
      {
        "@type": "Product",
        name: `${service.title} in ${cityName}, ${state.name}`,
        description: `${service.summary} Available in ${cityName}, ${state.name}.`,
        url: canonical,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "164"
        }
      },
      {
        "@type": "Service",
        name: `${service.title} in ${cityName}, ${state.name}`,
        description: service.summary,
        url: canonical,
        areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: state.name } }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: state.name, item: `https://${state.slug}.${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: cityName, item: `https://${host}/` },
          { "@type": "ListItem", position: 3, name: service.title, item: canonical }
        ]
      }
    ]
  };

  const body = `<main><section class="hero"><div class="wrap hero-grid"><div><div class="crumb"><a href="https://${state.slug}.${DOMAIN}/">${esc(state.name)}</a> / <a href="https://${host}/">${esc(cityName)}</a> / ${esc(service.title)}</div><span class="eyebrow">Garage Service</span><h1>${esc(service.title)} in <em>${esc(cityName)}, ${esc(state.name)}</em></h1><p>${esc(service.summary)} Review diagnosis tips, inspection considerations, and local repair options.</p><div class="rating-badge"><span class="stars">★★★★★</span><span>4.9/5 ⭐ Rating for ${esc(service.title)}</span></div>${trustChecklistHtml()}<div class="buttons"><a class="btn" href="tel:${PHONE}">Call ${PHONE}</a><a class="btn ghost" href="https://${host}/">All ${services.length} City Services</a></div></div><div>${leadFormHtml(`${service.title} ${cityName}`)}</div></div></section><section class="section soft"><div class="wrap"><div class="head"><div><span class="eyeline">What to expect</span><h2>An inspection-first repair process</h2></div></div><div class="process"><div class="step"><b>01</b><h3>Initiate Request</h3><p>Call or submit quote form with door details.</p></div><div class="step"><b>02</b><h3>Provide Details</h3><p>Share specific symptoms (broken spring, off-track, noise).</p></div><div class="step"><b>03</b><h3>On-Site Inspection</h3><p>Technician inspects springs, cables, tracks, and opener.</p></div><div class="step"><b>04</b><h3>Quality Repair</h3><p>Complete repair with itemized invoice and warranty.</p></div></div></div></section></main>`;
  return shell(`${service.title} in ${cityName}, ${state.name}`, `${service.summary} Review local garage door service info for ${cityName}, ${state.name}.`, canonical, body, schema);
}

export function notFoundPage(message: string) {
  return `<!doctype html><html><head><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>404 | Garage Door Gazette</title><style>${CSS}</style></head><body>${header()}<main class="section"><div class="wrap"><span class="eyeline">Page not found</span><h1>404</h1><p>${esc(message)}</p><a class="btn dark" href="https://${DOMAIN}/areas-we-serve/">Browse Service Areas</a></div></main>${footer()}</body></html>`;
}
