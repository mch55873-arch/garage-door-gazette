import type { Metadata } from "next";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig, siteImages } from "@/data/site";

export const metadata: Metadata = {
  title: "About Garage Door Gazette",
  description: "Learn how Garage Door Gazette organizes garage door service information, state and city directories, safety guidance, and independent provider routes.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a> / About</div>
            <span className="eyebrow">About Garage Door Gazette</span>
            <h1>A clearer way to research garage door service</h1>
            <p>Garage Door Gazette is a nationwide information and provider-routing platform built to help property owners understand common garage door problems, compare service categories, navigate local pages, and prepare for more informed service conversations.</p>
            <div className="hero-actions">
              <a className="button" href="/services/">Browse All Services</a>
              <a className="button outline" href="/locations/">Explore Service Areas</a>
            </div>
          </div>
          <div className="service-hero-photo">
            <img src={siteImages.about} alt="Residential home with a garage and green exterior" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <span className="pill">Our purpose</span>
            <h2>Practical guidance before a property owner authorizes work</h2>
            <p className="section-lead">Garage door failures are often described by a symptom—heavy movement, a loud snap, uneven travel, a remote that stops responding, or a door that will not open. The visible symptom is not always the root cause.</p>
            <p className="section-lead">Our content explains the components involved, common warning signs, likely inspection points, safety concerns, repair-versus-replacement considerations, and the questions a property owner should ask before approving a job.</p>
            <div className="check-list">
              <div className="check-item">Clear service descriptions covering repair, installation, maintenance, controls, weatherproofing, security, and commercial doors.</div>
              <div className="check-item">State and city navigation designed around transparent geographic context.</div>
              <div className="check-item">Safety-conscious guidance for springs, cables, drums, brackets, heavy panels, and unstable doors.</div>
              <div className="check-item">Hiring questions covering credentials, inspection findings, written scope, pricing, exclusions, and warranties.</div>
            </div>
          </div>
          <div className="photo-frame">
            <img src={siteImages.woodDoor} alt="Traditional wooden garage door" loading="lazy" />
            <div className="photo-caption"><strong>Information first</strong><p>A general guide cannot replace a property-specific inspection, but it can help users recognize unsafe conditions and ask better questions.</p></div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head"><div><span className="pill">What the platform includes</span><h2>A nationwide garage door knowledge and location structure</h2></div></div>
          <div className="metric-grid">
            <div className="metric"><strong>{services.length}</strong><span>Service topics</span></div>
            <div className="metric"><strong>{states.length}</strong><span>States and DC</span></div>
            <div className="metric"><strong>City</strong><span>Subdomain routes</span></div>
            <div className="metric"><strong>24</strong><span>Garage door guides</span></div>
          </div>
          <div className="cards" style={{ marginTop: 26 }}>
            {[
              ["Service education", "Pages explain warning signs, inspection scope, repair considerations, costs, safety issues, FAQs, and related services."],
              ["Local navigation", "State subdomains link to city and community subdomains, while city routes provide access to the complete local service directory."],
              ["Provider routing", "Visitors may use the contact or phone route to check current availability with an independent provider serving their area."],
              ["Editorial transparency", "The website avoids fabricated local offices, technicians, ratings, response times, licenses, prices, reviews, and coverage guarantees."],
              ["Safety awareness", "Content repeatedly warns against touching loaded counterbalance parts or operating unstable, off-track, unsupported, or severely damaged doors."],
              ["Hiring support", "Users are encouraged to verify the provider, request written findings, compare complete estimates, and retain documentation."],
            ].map(([title, text], index) => <div className="card" key={title}><span className="icon">0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <span className="eyebrow">Independent provider disclosure</span>
          <h2>Garage Door Gazette is not the local contractor performing every job</h2>
          <p className="section-lead">Providers that receive or respond to an inquiry are independent businesses responsible for their own legal identity, coverage, credentials, insurance, estimates, safety procedures, workmanship, taxes, warranties, and customer agreements.</p>
          <div className="process">
            {[
              ["Verify", "Confirm the business name, service address, credentials and insurance where applicable."],
              ["Diagnose", "Ask what failed, what evidence supports the diagnosis, and whether related components were inspected."],
              ["Document", "Obtain an itemized written estimate that includes parts, labor, fees, exclusions, and warranty terms."],
              ["Approve", "Authorize work only after the complete scope, total price, payment timing, and expected testing are clear."],
            ].map(([title, text], index) => <div className="step" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft-blue">
        <div className="container content-grid">
          <div>
            <span className="pill">Editorial approach</span>
            <h2>Useful, transparent and safety-conscious content</h2>
            <p className="section-lead">Our pages distinguish general educational information from a property-specific diagnosis. Content is organized around the user’s actual intent: understanding the problem, comparing realistic options, finding the right location route, and verifying the independent provider before hiring.</p>
            <p className="section-lead">The website may receive compensation when a visitor calls, submits an inquiry, or connects with a participating provider or advertising partner. Compensation does not guarantee provider availability, suitability, licensing, insurance, workmanship, or the lowest price.</p>
            <a className="button alt" href="/editorial-policy/">Read Editorial Policy</a>
          </div>
          <aside className="cta sidebar">
            <span className="eyebrow">Continue exploring</span>
            <h2 style={{ fontSize: 34 }}>Research the service before making the call</h2>
            <p>Browse the complete service directory, select your location, and review the provider disclosure before authorizing work.</p>
            <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
