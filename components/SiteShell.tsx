import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Nationwide garage door service directory</span>
          <span>Independent provider routes · Verify coverage and pricing before hiring</span>
        </div>
      </div>
      <header className="header">
        <div className="container navwrap">
          <a className="brand" href="/" aria-label={`${siteConfig.name} home`}>
            <span className="brandmark" aria-hidden="true">▤</span>
            <span>
              Garage Door <span style={{ color: "#1476c8" }}>Gazette</span>
              <small>Repairs · Installations · Local Guides</small>
            </span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/services/">Services</a>
            <a href="/areas-we-serve/">Areas We Serve</a>
            <a href="/articles/">Guides</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
          </nav>
          <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </div>
      </header>
      <div className="mobile" style={{ borderBottom: "1px solid #dfe6ee", background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, padding: "10px 0" }}>
          <a href="/services/" style={{ textAlign: "center", fontWeight: 900, fontSize: 13 }}>Services</a>
          <a href="/areas-we-serve/" style={{ textAlign: "center", fontWeight: 900, fontSize: 13 }}>Areas</a>
          <a href="/articles/" style={{ textAlign: "center", fontWeight: 900, fontSize: 13 }}>Guides</a>
          <a href="/contact/" style={{ textAlign: "center", fontWeight: 900, fontSize: 13 }}>Contact</a>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="/" style={{ color: "white" }}>
            <span className="brandmark">▤</span>
            <span>Garage Door Gazette</span>
          </a>
          <p style={{ lineHeight: 1.75, maxWidth: 390 }}>
            Research garage door problems, compare service options, browse locations, and check availability with independent local providers.
          </p>
          <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/about/">About</a>
          <a href="/services/">All {services.length} Services</a>
          <a href="/areas-we-serve/">States & Locations</a>
          <a href="/articles/">Garage Door Guides</a>
          <a href="/contact/">Check Availability</a>
        </div>
        <div>
          <h3>Popular Services</h3>
          {services.slice(0, 6).map((service) => (
            <a key={service.slug} href={`/services/${service.slug}/`}>{service.title}</a>
          ))}
        </div>
        <div>
          <h3>Legal & Disclosure</h3>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms/">Terms & Conditions</a>
          <a href="/disclaimer/">Disclaimer</a>
          <a href="/cookie-policy/">Cookie Policy</a>
          <a href="/provider-disclosure/">Provider Disclosure</a>
          <a href="/editorial-policy/">Editorial Policy</a>
          <a href="/accessibility/">Accessibility</a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {siteConfig.name}. Providers are independent businesses. Verify licensing, insurance, service scope, pricing, warranties, and coverage before hiring.
      </div>
    </footer>
  );
}
