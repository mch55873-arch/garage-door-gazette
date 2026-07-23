import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { siteConfig, siteImages } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} Near You`,
    description: `Learn about ${service.title.toLowerCase()}, warning signs, inspection steps, repair options, cost factors, safety considerations, and local provider availability.`,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

type Guidance = { signs: string[]; inspection: string[]; factors: string[] };

const baseGuidance: Guidance = {
  signs: [
    "The door is heavy, uneven, stuck, jerking, scraping, or producing a new mechanical sound",
    "The opener strains, hums, reverses, stops, or operates inconsistently",
    "Hardware, tracks, panels, seals, controls, or safety components show visible damage",
    "The opening cannot be secured or creates an immediate access, weather, or safety concern",
  ],
  inspection: [
    "Door balance, travel, alignment, and structural condition",
    "Springs, cables, drums, bearings, brackets, rollers, tracks, and hinges",
    "Opener rail, trolley, drive system, controls, sensors, and safety reversal",
    "Correct part specifications, compatibility, installation requirements, and manufacturer guidance",
  ],
  factors: [
    "Door size, weight, material, age, and cycle usage",
    "Component type, manufacturer, compatibility, and parts availability",
    "Access difficulty, urgency, related damage, and required testing",
    "Service-call charges, labor, taxes, disposal, permits, exclusions, and warranty terms",
  ],
};

const categoryGuidance: Record<string, Partial<Guidance>> = {
  Springs: {
    signs: ["A visible gap appears in a torsion spring", "The door feels unusually heavy", "The opener strains but the door barely moves", "The door rises unevenly or drops quickly"],
    inspection: ["Spring type, dimensions, cycle rating, and condition", "Cables, drums, bearings, center support, and brackets", "Door balance after repair", "Manual and automatic travel with safety testing"],
  },
  "Openers and Controls": {
    signs: ["The motor runs but the door does not move", "Remote, keypad, or wall-control response is intermittent", "The opener reverses unexpectedly", "Grinding, humming, or clicking comes from the opener"],
    inspection: ["Power, controls, travel limits, force settings, rail, trolley, and drive system", "Remotes, keypad, wall station, wiring, and safety sensors", "Door balance before diagnosing the opener", "Compatibility of replacement components and accessories"],
  },
  "Tracks and Rollers": {
    signs: ["The door binds, shakes, or scrapes", "Rollers leave the track", "Track sections are bent, loose, or misaligned", "The door moves unevenly or hangs crooked"],
    inspection: ["Vertical and horizontal track alignment", "Mounting brackets, fasteners, and structural attachment", "Roller wear and bearing condition", "Cable, panel, spring, or impact damage contributing to the problem"],
  },
  "Cables and Hardware": {
    signs: ["A cable is frayed, loose, or off the drum", "The door hangs crooked", "Hardware is cracked, loose, or distorted", "Movement is jerky or unstable"],
    inspection: ["Both cables, drums, bottom brackets, hinges, bearings, and fasteners", "Spring tension and door balance", "Correct cable length, drum pairing, and component ratings", "Corrosion, fatigue, and damage from an off-track event"],
  },
  "Doors and Panels": {
    signs: ["Panels are dented, cracked, bowed, rusted, or separating", "The door no longer seals or moves evenly", "Impact damage affects hinges or tracks", "Several major components are near end of life"],
    factors: ["Panel availability and color matching", "Structural reinforcement and wind-load needs", "Insulation, material, finish, and opener compatibility", "Removal, disposal, hardware, labor, and warranty scope"],
  },
  "Commercial Services": {
    signs: ["The door disrupts loading, security, access, or production", "High-cycle components show accelerated wear", "The curtain, sections, guides, motor, or controls are damaged", "Required safety or fire features do not operate correctly"],
    factors: ["Business interruption and access scheduling", "Code, inspection, fire, and safety requirements", "High-cycle component ratings and controls", "Access equipment, after-hours work, parts lead time, and testing"],
  },
};

function guidanceFor(category: string): Guidance {
  const custom = categoryGuidance[category] || {};
  return {
    signs: custom.signs || baseGuidance.signs,
    inspection: custom.inspection || baseGuidance.inspection,
    factors: custom.factors || baseGuidance.factors,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const guidance = guidanceFor(service.category);
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 6);
  const faqs = [
    [`How much does ${service.title.toLowerCase()} cost?`, "Pricing depends on location, door size and weight, component type, access, urgency, parts availability, related damage, labor, service-call charges, taxes, disposal, and warranty scope. Request a written total estimate."],
    [`How do I know whether ${service.title.toLowerCase()} is needed?`, "A property-specific inspection should connect the recommendation to visible findings. The provider should explain what failed, why it failed, and which observations support the proposed scope."],
    ["Should I repair or replace the affected component?", "Repair may be practical when compatible parts are available and the surrounding system remains serviceable. Broader replacement may be appropriate when damage is extensive, parts are obsolete, failures recur, or several components are near end of life."],
    ["Is local availability guaranteed?", "No. Coverage, scheduling, response time, credentials, parts, pricing, and warranties vary by independent provider and must be confirmed directly."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.category,
        description: service.summary,
        provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        areaServed: { "@type": "Country", name: "United States" },
        url: `${siteConfig.url}/services/${service.slug}/`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}/` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="service-hero">
        <div className="container service-hero-grid">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a> / <a href="/services/">Services</a> / {service.title}</div>
            <span className="eyebrow">{service.category}</span>
            <h1>{service.title} near you</h1>
            <p>{service.summary} Review common warning signs, professional inspection steps, repair considerations, cost factors, safety information, and local-provider questions.</p>
            <div className="hero-actions">
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              <a className="button outline" href="/areas-we-serve/">Choose Your Location</a>
            </div>
            <div className="service-badges">
              <span className="service-badge">Diagnosis-first guidance</span>
              <span className="service-badge">Written-scope checklist</span>
              <span className="service-badge">Independent providers</span>
            </div>
          </div>
          <div className="service-hero-photo">
            <img src={siteImages.service} alt="Residential garage door service information" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head"><div><span className="pill">What to expect</span><h2>A professional service process should be clear from diagnosis to testing</h2></div></div>
          <div className="service-process">
            {[
              ["Describe", "Explain the door position, sounds, movement, visible damage, property type, location, and urgency."],
              ["Inspect", "Evaluate the complete operating system instead of replacing a component from a phone description alone."],
              ["Compare", "Review compatible repair and replacement options, parts availability, exclusions, and likely service life."],
              ["Verify", "Approve a written scope covering parts, labor, fees, total price, testing, and warranty terms."],
            ].map(([title, text], index) => <div className="card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="article">
            <span className="pill">Service overview</span>
            <h1 style={{ fontSize: 46 }}>When to consider {service.title.toLowerCase()}</h1>
            <p>{service.title} may be appropriate when a garage door component is damaged, worn, incorrectly adjusted, incompatible, or no longer operating safely. Because the door, counterbalance system, tracks, cables, hardware, controls, and opener work together, the visible symptom is not always the root cause.</p>
            <p>A qualified provider should inspect the complete system before recommending work. The diagnosis should distinguish an isolated component problem from poor balance, impact damage, incorrect installation, corrosion, fatigue, electrical faults, or another failing part.</p>

            <h2>Common warning signs</h2>
            <ul>{guidance.signs.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="notice-box"><strong>Stop operating the door</strong> when movement is unstable, a spring or cable appears damaged, the door has left its track, hardware is separating, or the opening cannot be secured safely.</div>

            <h2>What a professional inspection may include</h2>
            <ul>{guidance.inspection.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>The provider should explain the findings in plain language and identify which observations support the recommendation. Request photos or video when hidden, elevated, or inaccessible components are involved.</p>

            <h2>Repair and replacement considerations</h2>
            <div className="benefit-grid">
              <div className="benefit"><strong>Repair may fit</strong><span>When the affected component is available, compatible, and the surrounding system remains serviceable.</span></div>
              <div className="benefit"><strong>Replacement may fit</strong><span>When damage is extensive, parts are obsolete, failures recur, or multiple components are near end of life.</span></div>
              <div className="benefit"><strong>Compatibility matters</strong><span>Door weight, spring sizing, opener capacity, track geometry, controls, and manufacturer requirements must align.</span></div>
              <div className="benefit"><strong>Testing matters</strong><span>Balance, travel, hardware, controls, sensors, and safety reversal should be checked after the work.</span></div>
            </div>

            <h2>Cost factors</h2>
            <ul>{guidance.factors.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Emergency or after-hours service may carry additional charges. A headline price is not a complete estimate unless the included parts, labor, fees, taxes, testing, exclusions, and warranty are documented.</p>

            <h2>Questions to ask before authorizing work</h2>
            <ul>
              <li>What failed, and what evidence confirms the diagnosis?</li>
              <li>Does the estimate include parts, labor, service-call charges, taxes, disposal, permits, and testing?</li>
              <li>Are there alternative repair or replacement options?</li>
              <li>What manufacturer, workmanship, and parts warranties apply?</li>
              <li>Will the door be balanced and safety-tested after the work?</li>
              <li>What is the provider’s legal business identity, and are current credentials and insurance available where required?</li>
            </ul>

            <h2>Safety note</h2>
            <p>Garage doors are heavy, and springs, cables, drums, bottom brackets, and counterbalance hardware can store substantial force. Avoid loosening loaded hardware or attempting work without the correct training, tools, specifications, and procedures. Keep children, pets, vehicles, and bystanders away from an unstable door.</p>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </article>

          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">Check local availability</span>
              <h2 style={{ fontSize: 32 }}>{service.title}</h2>
              <p>Confirm service coverage, scheduling, credentials, inspection scope, total pricing, exclusions, and warranty directly with the independent provider.</p>
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              <a className="button outline" style={{ marginTop: 12 }} href="/areas-we-serve/">Browse Areas We Serve</a>
            </div>
            <div style={{ marginTop: 26 }}>
              <h3>Related services</h3>
              <div className="list">
                {related.map((item) => <a key={item.slug} href={`/services/${item.slug}/`}>{item.title}</a>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section dark">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">Transparent provider routing</span>
            <h2>Verify the actual business before work begins</h2>
            <p className="section-lead">Garage Door Gazette is an information and referral platform, not the contractor performing the work. The site does not guarantee provider availability, credentials, response time, pricing, workmanship, or warranty.</p>
            <a className="button" href="/provider-disclosure/">Read Provider Disclosure</a>
          </div>
          <div className="photo-frame">
            <img src={siteImages.commercial} alt="Garage door at a property exterior" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
