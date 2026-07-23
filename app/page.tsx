import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig, siteImages } from "@/data/site";

const featuredSlugs = [
  "emergency-garage-door-repair",
  "broken-garage-door-spring-repair",
  "garage-door-opener-repair",
  "off-track-garage-door-repair",
  "garage-door-cable-repair",
  "new-garage-door-installation",
];

const featured = featuredSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

const faqs = [
  ["How quickly can a garage door provider respond?", "Response time depends on location, urgency, travel distance, parts availability, weather, and the provider’s current schedule. Confirm availability directly before relying on a stated arrival window."],
  ["Is a broken garage door spring dangerous?", "A broken spring can leave the door extremely heavy and unstable. Avoid forcing or lifting the door and keep people away until a qualified provider evaluates it."],
  ["Should I repair or replace my garage door?", "Repair may be practical for isolated hardware, opener, track, cable, spring, seal, or panel problems. Replacement may be more appropriate when damage is extensive, recurring, structurally significant, or the door is near the end of its service life."],
  ["What should a written estimate include?", "Ask for the diagnosis, parts, labor, service-call charges, taxes, disposal, warranty terms, exclusions, expected completion time, and total price before authorizing work."],
  ["Are local providers licensed and insured?", "Requirements vary by state and service type. Confirm the specific provider’s current licensing, insurance, qualifications, and warranty terms before hiring."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Nationwide garage door service directory</span>
            <h1>Find the right garage door service <span>for your property</span></h1>
            <p>
              Research repair and installation options, identify common warning signs, choose your state or city, and check current availability with independent providers.
            </p>
            <div className="hero-actions">
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              <a className="button outline" href="/services/">Browse All {services.length} Services</a>
            </div>
            <div className="trustrow">
              <span>Independent provider routes</span>
              <span>State and city directories</span>
              <span>Safety-first hiring guidance</span>
            </div>
          </div>
          <div className="hero-media">
            <img src={siteImages.hero} alt="Modern residential garage door" loading="eager" fetchPriority="high" />
            <div className="floating-card">
              <strong>Start with the actual symptom</strong>
              <span>Heavy door, broken spring, damaged cable, opener fault, off-track movement, panel damage, or a new installation.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>51</strong><span>States & DC</span></div>
          <div className="stat"><strong>{services.length}</strong><span>Service Topics</span></div>
          <div className="stat"><strong>City</strong><span>Local Subdomains</span></div>
          <div className="stat"><strong>Direct</strong><span>Availability Check</span></div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="pill">Popular garage door services</span>
              <h2>Start with the repair or installation you need</h2>
              <p className="section-lead">Each service page explains warning signs, likely inspection steps, repair considerations, hiring questions, safety issues, and relevant local routes.</p>
            </div>
            <a className="button alt" href="/services/">View All {services.length} Services</a>
          </div>
          <div className="cards">
            {featured.map((service, index) => (
              <a className="card" key={service.slug} href={`/services/${service.slug}/`}>
                <span className="icon">{["!", "↕", "⚙", "↔", "⌁", "+"][index]}</span>
                <span className="pill" style={{ marginTop: 18 }}>{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="more">Review service →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="photo-frame">
            <img src={siteImages.service} alt="Residential garage door surrounded by autumn greenery" loading="lazy" />
            <div className="photo-caption">
              <strong>A complete system—not one isolated part</strong>
              <p>Springs, cables, tracks, rollers, panels, controls, and the opener must work together safely.</p>
            </div>
          </div>
          <div>
            <span className="pill">A clearer hiring process</span>
            <h2>Understand the diagnosis before authorizing work</h2>
            <p className="section-lead">A responsible recommendation should connect the proposed work to visible findings. Ask the provider what failed, why it failed, what the estimate includes, and how the system will be tested afterward.</p>
            <div className="check-list">
              <div className="check-item">Verify the provider’s legal identity, credentials, insurance, and current service coverage.</div>
              <div className="check-item">Request a written diagnosis, itemized scope, parts, labor, fees, exclusions, and total price.</div>
              <div className="check-item">Avoid loosening springs, cables, drums, bottom brackets, or other loaded components.</div>
              <div className="check-item">Confirm balance, travel, controls, sensors, and safety reversal after the work.</div>
            </div>
            <div className="hero-actions">
              <a className="button alt" href="/hiring-guide/">Read the Hiring Guide</a>
              <a className="button light-outline" href="/provider-disclosure/">Provider Disclosure</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <span className="eyebrow">How the directory works</span>
          <h2>A simple path from garage door problem to an informed service conversation</h2>
          <div className="process">
            {[
              ["Choose the problem", "Start with the spring, opener, cable, track, panel, sensor, maintenance, or installation need."],
              ["Select your location", "Open the state subdomain, choose your city, and retain the correct geographic context."],
              ["Review the guidance", "Understand warning signs, inspection points, safety issues, and provider questions."],
              ["Confirm the details", "Verify current coverage, credentials, scheduling, written scope, total price, and warranty."],
            ].map(([title, text], index) => <div className="step" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div><span className="pill">Nationwide service areas</span><h2>Browse garage door services by state</h2><p className="section-lead">Every state directory links to its cities and communities. Each city route contains the complete local service directory.</p></div>
            <a className="button alt" href="/locations/">View Areas We Serve</a>
          </div>
          <div className="state-grid">
            {states.map((state) => <a className="state-link" key={state.slug} href={`https://${state.slug}.${siteConfig.domain}/`}>{state.name}</a>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <span className="pill">Repair, replacement and installation</span>
            <h2>Options for residential and commercial garage doors</h2>
            <p className="section-lead">Use the service directory to compare component repairs, opener work, door replacement, weatherproofing, maintenance, security upgrades, and commercial overhead-door services.</p>
            <div className="benefit-grid">
              <div className="benefit"><strong>Repair guidance</strong><span>Symptoms, likely causes, inspection scope, and safety considerations.</span></div>
              <div className="benefit"><strong>Installation planning</strong><span>Measurements, materials, clearances, controls, reinforcement, and disposal.</span></div>
              <div className="benefit"><strong>Local navigation</strong><span>State and city subdomains with location-specific service routes.</span></div>
              <div className="benefit"><strong>Transparent disclosure</strong><span>Independent-provider language without fabricated offices, ratings, or guarantees.</span></div>
            </div>
          </div>
          <div className="photo-frame">
            <img src={siteImages.installation} alt="Pair of garage doors on a residential property" loading="lazy" />
            <div className="photo-caption"><strong>Planning a new door?</strong><p>Compare material, insulation, dimensions, hardware, opener compatibility, security, and maintenance requirements.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft-blue">
        <div className="container content-grid">
          <div>
            <span className="pill">Frequently asked questions</span>
            <h2>Garage door service questions</h2>
            <div className="faq-list">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </div>
          <aside className="cta sidebar">
            <span className="eyebrow">Check current availability</span>
            <h2 style={{ fontSize: 34 }}>Need help with a garage door problem?</h2>
            <p>Choose your location or use the contact route. Confirm the actual provider, service coverage, credentials, diagnosis, pricing, and warranty directly.</p>
            <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
