import type { Metadata } from "next";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { siteConfig, siteImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Garage Door Gazette",
  description: "Prepare garage door service details, check independent provider availability, and review the information to confirm before authorizing work.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a> / Contact</div>
            <span className="eyebrow">Contact and local availability</span>
            <h1>Prepare your garage door service request</h1>
            <p>Share the location, symptom, door condition, property type, and urgency. Then confirm the actual independent provider, current coverage, credentials, written scope, total price, and warranty terms.</p>
            <div className="service-badges">
              <span className="service-badge">State and city routes</span>
              <span className="service-badge">Complete service directory</span>
              <span className="service-badge">Independent providers</span>
            </div>
          </div>
          <div className="service-hero-photo">
            <img src={siteImages.hero} alt="Modern garage door at a residential property" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container contact-layout">
          <aside className="contact-panel">
            <span className="eyebrow">Before you contact a provider</span>
            <h2>Have the important details ready</h2>
            <p>The more specific the description, the easier it is for a provider to understand the likely equipment, parts, access, and safety considerations.</p>
            <div className="contact-method"><b>01</b><div><strong>Location</strong><span>City, state, ZIP code, and whether the property is residential, commercial, rental, or managed.</span></div></div>
            <div className="contact-method"><b>02</b><div><strong>Door condition</strong><span>Open, closed, stuck, heavy, uneven, noisy, off track, unsecured, or affected by visible damage.</span></div></div>
            <div className="contact-method"><b>03</b><div><strong>Visible components</strong><span>Springs, cables, drums, rollers, tracks, hinges, panels, seals, sensors, remotes, keypad, or opener lights.</span></div></div>
            <div className="contact-method"><b>04</b><div><strong>Job details</strong><span>Door size, material, approximate age, opener brand, urgency, access restrictions, and photos when available.</span></div></div>
            <div className="contact-photo"><img src={siteImages.commercial} alt="Garage door at a commercial-style property" loading="lazy" /></div>
          </aside>

          <div className="contact-form">
            <span className="pill">Request preparation form</span>
            <h2>Tell the provider what is happening</h2>
            <p className="section-lead">Complete the fields below to generate a clear request summary. The form does not fabricate a lead submission or store your information.</p>
            <ContactRequestForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><span className="pill">What happens next</span><h2>A responsible service conversation should follow four steps</h2></div></div>
          <div className="service-process">
            {[
              ["Describe", "Explain the property location, door condition, visible damage, urgency, and access or security concern."],
              ["Confirm", "Ask whether the independent provider currently serves your ZIP code and can handle the specific door or opener type."],
              ["Inspect", "Request a property-specific diagnosis that evaluates the full door system rather than relying only on a phone description."],
              ["Approve", "Review the written scope, parts, labor, service-call charges, taxes, exclusions, total price, and warranty before work begins."],
            ].map(([title, text], index) => <div className="card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container content-grid">
          <div>
            <span className="eyebrow">Safety and emergency information</span>
            <h2>Keep people away from an unstable or unsupported door</h2>
            <p className="section-lead">Do not force a heavy, crooked, off-track, partially supported, or visibly damaged door. Springs, cables, drums, bottom brackets, and related counterbalance components can store substantial force.</p>
            <p className="section-lead">Garage Door Gazette is not an emergency-response agency. For fire, injury, crime, electrical danger, carbon monoxide, or another immediate threat to life or property, contact the appropriate local emergency service.</p>
          </div>
          <aside className="cta">
            <span className="eyebrow">Current contact route</span>
            <h2 style={{ fontSize: 34 }}>Check independent provider availability</h2>
            <p>Ringba phone routing will be displayed when the approved campaign number becomes available. Until then, the site does not publish a fabricated number.</p>
            <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </aside>
        </div>
      </section>

      <section className="section soft-blue">
        <div className="container content-grid">
          <div>
            <span className="pill">Website correspondence</span>
            <h2>Corrections, accessibility and legal notices</h2>
            <p className="section-lead">When submitting website feedback or a correction request, include the exact page URL, the specific statement or feature involved, supporting information when relevant, and the requested correction.</p>
            <div className="check-list">
              <div className="check-item">Content correction or outdated information</div>
              <div className="check-item">Accessibility concern or navigation problem</div>
              <div className="check-item">Provider disclosure or advertising question</div>
              <div className="check-item">Copyright, trademark, privacy, or legal notice</div>
            </div>
          </div>
          <aside className="cta sidebar">
            <span className="eyebrow">Before hiring</span>
            <h2 style={{ fontSize: 32 }}>Verify every material term directly</h2>
            <p>Confirm the business identity, coverage, credentials, insurance, diagnosis, parts, labor, fees, total price, payment terms, exclusions, and warranty.</p>
            <a className="button" href="/hiring-guide/">Open Hiring Guide</a>
          </aside>
        </div>
      </section>
    </>
  );
}
