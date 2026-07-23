import type { Metadata } from "next";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig, siteImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Garage Door Service Areas Across the USA",
  description: "Browse garage door repair, installation, opener, spring, cable, track, panel, maintenance and commercial service information by state and city.",
  alternates: { canonical: "/areas-we-serve/" },
};

const steps = [
  ["Choose a state", "Open a statewide service directory and browse its listed cities and communities."],
  ["Select a city", "Use the city-specific hub to review all garage door service categories for that location."],
  ["Review the issue", "Read warning signs, inspection guidance, repair considerations and safety information."],
  ["Verify the provider", "Confirm coverage, identity, credentials, written scope, total price and warranty directly."],
];

export default function AreasWeServePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Garage Door Service Areas Across the United States",
    url: `${siteConfig.url}/areas-we-serve/`,
    about: { "@type": "Country", name: "United States" },
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="areas-hero" style={{ ["--areas-image" as string]: `url(${siteImages.areas})` }}>
        <div className="container">
          <div className="breadcrumbs"><a href="/">Home</a> / Areas We Serve</div>
          <span className="eyebrow">Nationwide garage door directory</span>
          <h1>Garage door service areas across the United States</h1>
          <p>Choose a state to browse city-specific garage door repair, opener, spring, cable, track, panel, installation, maintenance and commercial-service guides.</p>
          <div className="hero-actions">
            <a className="button" href="#states">Browse All States</a>
            <a className="button outline" href="/services/">View All {services.length} Services</a>
          </div>
          <div className="trustrow">
            <span>51 state and DC routes</span>
            <span>City-specific service hubs</span>
            <span>Independent-provider disclosure</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>51</strong><span>States & DC</span></div>
          <div className="stat"><strong>{services.length}</strong><span>Service topics</span></div>
          <div className="stat"><strong>Local</strong><span>City routes</span></div>
          <div className="stat"><strong>Direct</strong><span>Provider verification</span></div>
        </div>
      </section>

      <section className="section gray" id="states">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="pill">Areas we serve</span>
              <h2>Browse garage door services by state</h2>
              <p className="section-lead">Each state subdomain contains its city directory and the full garage door service catalog. Geographic pages organize information; they do not claim that one company operates an office in every listed community.</p>
            </div>
          </div>
          <div className="area-grid">
            {states.map((state) => (
              <a className="area-card" key={state.slug} href={`https://${state.slug}.garagedoorgazette.com/`}>
                <span><strong>{state.name}</strong><small>{state.abbreviation} garage door directory</small></span>
                <b>→</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="photo-frame">
            <img src={siteImages.installation} alt="Residential garage door and property exterior" loading="lazy" />
            <div className="photo-caption"><strong>Location pages with clear context</strong><p>State, city and service routes help users preserve the right geographic context without inventing offices, technicians or response times.</p></div>
          </div>
          <div>
            <span className="pill">How the directory works</span>
            <h2>Move from state to city to the exact service need</h2>
            <p className="section-lead">The site architecture is designed to make local navigation clear while keeping provider claims accurate and transparent.</p>
            <div className="check-list">
              <div className="check-item">State pages contain complete city and service directories.</div>
              <div className="check-item">City pages contain all {services.length} local service topics.</div>
              <div className="check-item">City-service pages provide diagnosis, safety and hiring guidance.</div>
              <div className="check-item">Visitors verify the actual provider and all material service terms directly.</div>
            </div>
            <a className="button alt" href="/provider-disclosure/">Read Provider Disclosure</a>
          </div>
        </div>
      </section>

      <section className="section soft-blue">
        <div className="container">
          <div className="section-head"><div><span className="pill">A four-step process</span><h2>Use local pages without losing due diligence</h2></div></div>
          <div className="service-process">
            {steps.map(([title, text], index) => <div className="card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container content-grid">
          <div>
            <span className="eyebrow">Do not see the right location?</span>
            <h2>Use the contact route to prepare a clear service request</h2>
            <p className="section-lead">Provide the city, state, ZIP code, door condition, visible damage, urgency and property type. Current coverage and availability must still be confirmed directly with the independent provider.</p>
          </div>
          <aside className="cta">
            <span className="eyebrow">Current availability route</span>
            <h2 style={{ fontSize: 34 }}>Check local provider availability</h2>
            <p>No fabricated phone number, office, rating or guaranteed response time is published.</p>
            <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
