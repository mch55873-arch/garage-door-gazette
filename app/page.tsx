import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig } from "@/data/site";

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
  ["How quickly can a garage door provider respond?", "Response time depends on location, urgency, travel distance, parts availability, weather, and the provider’s current schedule. Call to confirm local availability."],
  ["Is a broken garage door spring dangerous?", "A broken spring can leave the door extremely heavy and unstable. Avoid forcing or lifting the door and keep people away until a qualified technician evaluates it."],
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
            <h1>Find garage door repair services <span>near you</span></h1>
            <p>
              Research common garage door problems, compare repair and installation options, choose your location, and check availability with independent local providers.
            </p>
            <div className="hero-actions">
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              <a className="button outline" href="/services/">Browse All Services</a>
            </div>
            <div className="trustrow">
              <span>Independent providers</span>
              <span>Location-specific routes</span>
              <span>Repair-first guidance</span>
            </div>
          </div>

          <aside className="leadcard">
            <span className="pill">Request service information</span>
            <h2>Tell us what is happening</h2>
            <p>Submit the basic details or call directly. Coverage, response time, pricing, and service scope must be confirmed with the independent provider.</p>
            <form className="formgrid" method="get" action="/contact/">
              <label>Full name<input name="name" autoComplete="name" required /></label>
              <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
              <label>City or ZIP<input name="location" autoComplete="postal-code" required /></label>
              <label>Service
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {featured.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                </select>
              </label>
              <button className="button alt" type="submit">Continue Request</button>
            </form>
            <p className="notice">Garage Door Gazette is an information and referral platform. Providers are independent businesses.</p>
          </aside>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>51</strong><span>States & DC</span></div>
          <div className="stat"><strong>{services.length}</strong><span>Service Topics</span></div>
          <div className="stat"><strong>Local</strong><span>Provider Routes</span></div>
          <div className="stat"><strong>Direct</strong><span>Availability Check</span></div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="pill">Popular services</span>
              <h2>Help for common garage door problems</h2>
              <p className="section-lead">Start with the repair or installation need, then choose your state to preserve the right geographic context.</p>
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
        <div className="container content-grid" style={{ alignItems: "center" }}>
          <div>
            <span className="pill">A clearer hiring process</span>
            <h2>Understand the issue before authorizing work</h2>
            <p className="section-lead">A responsible service visit should connect the recommendation to a visible diagnosis. Ask the provider to explain what failed, why it failed, which parts are needed, and what the repair does—and does not—cover.</p>
            <div className="cards" style={{ gridTemplateColumns: "repeat(2,1fr)", marginTop: 28 }}>
              {[
                ["Confirm credentials", "Verify licensing, insurance, qualifications, and manufacturer requirements that apply to the work."],
                ["Request written scope", "Document labor, parts, service-call charges, warranty terms, exclusions, and total price."],
                ["Avoid unsafe DIY work", "Springs, cables, drums, brackets, and heavy doors can store dangerous force."],
                ["Plan maintenance", "Clarify lubrication, balancing, sensor checks, hardware inspection, and follow-up needs."],
              ].map(([title, text]) => <div className="card" key={title}><span className="icon">✓</span><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
          <aside className="cta">
            <span className="eyebrow">Important disclosure</span>
            <h2 style={{ fontSize: 36 }}>Independent local provider network</h2>
            <p>Garage Door Gazette does not claim that one company operates every location or holds every local license. Availability, credentials, service scope, warranties, and pricing vary by provider.</p>
            <a className="button" href="/provider-disclosure/">Read Provider Disclosure</a>
          </aside>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2>A simple path from garage door problem to informed service call</h2>
          <div className="process">
            {[
              ["Choose the problem", "Start with the spring, opener, cable, track, panel, sensor, maintenance, or installation need."],
              ["Select your location", "Choose a state and local route to keep geographic information clear."],
              ["Review guidance", "Understand warning signs, service options, safety issues, and provider questions."],
              ["Check availability", "Confirm local coverage, credentials, scheduling, scope, warranty, and total price."],
            ].map(([title, text], index) => <div className="step" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div><span className="pill">Nationwide locations</span><h2>Browse garage door services by state</h2></div>
            <a className="button alt" href="/locations/">View All Locations</a>
          </div>
          <div className="state-grid">
            {states.map((state) => <a className="state-link" key={state.slug} href={`/locations/${state.slug}/`}>{state.name}</a>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <div>
            <span className="pill">Frequently asked questions</span>
            <h2>Garage door service questions</h2>
            {faqs.map(([question, answer]) => <div className="faq" key={question}><h3>{question}</h3><p>{answer}</p></div>)}
          </div>
          <aside className="cta sidebar">
            <h2 style={{ fontSize: 34 }}>Need help with a garage door problem?</h2>
            <p>Check whether an independent provider is available in your area. Confirm pricing and scope directly before authorizing work.</p>
            <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
