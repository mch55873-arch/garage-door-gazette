import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/data/site";

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
    description: `Learn about ${service.title.toLowerCase()}, warning signs, inspection, repair options, costs, safety considerations, and how to check local provider availability.`,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

const categoryGuidance: Record<string, { signs: string[]; inspection: string[]; considerations: string[] }> = {
  "Emergency Repair": {
    signs: ["The door is stuck open or closed", "The door is hanging unevenly or has left the track", "A loud snap, impact, or sudden mechanical failure occurred", "The door cannot be secured safely"],
    inspection: ["Disconnect unsafe automatic operation", "Inspect springs, cables, tracks, rollers, brackets, panels, and opener components", "Identify whether the door can be stabilized without forcing it", "Explain temporary security and permanent repair options"],
    considerations: ["After-hours or emergency service charges", "Parts availability", "Whether the opening can be secured", "Whether additional structural damage is present"],
  },
  Springs: {
    signs: ["A visible gap appears in a torsion spring", "The opener strains but the door barely moves", "The door feels unusually heavy", "The door rises unevenly or drops quickly"],
    inspection: ["Confirm spring type, size, cycle rating, and condition", "Inspect cables, drums, bearings, center support, and brackets", "Check balance after replacement", "Test manual and automatic operation"],
    considerations: ["Single versus paired spring replacement", "Correct spring sizing", "Cycle-life options", "Related cable, bearing, or bracket wear"],
  },
  "Openers and Controls": {
    signs: ["The motor runs but the door does not move", "Remote, keypad, or wall control response is intermittent", "The opener reverses unexpectedly", "The opener produces grinding, humming, or clicking sounds"],
    inspection: ["Check power, controls, travel limits, force settings, rail, trolley, and drive system", "Test remotes, keypad, wall station, and safety sensors", "Inspect door balance before blaming the opener", "Confirm compatibility of replacement components"],
    considerations: ["Repair versus replacement cost", "Horsepower and door weight", "Smart-home compatibility", "Battery backup and security features"],
  },
  "Tracks and Rollers": {
    signs: ["The door binds, shakes, or makes scraping sounds", "Rollers leave the track", "Track sections are bent, loose, or misaligned", "The door moves unevenly"],
    inspection: ["Inspect vertical and horizontal track alignment", "Check mounting brackets and fasteners", "Evaluate roller wear and bearing condition", "Look for cable or panel damage that caused the tracking issue"],
    considerations: ["Whether track repair is structurally safe", "Roller material and bearing quality", "Panel alignment", "Underlying impact or spring problems"],
  },
  "Cables and Hardware": {
    signs: ["A cable is frayed, loose, or off the drum", "The door hangs crooked", "Hardware is cracked, loose, or visibly distorted", "Movement is jerky or unstable"],
    inspection: ["Secure the door before touching loaded components", "Inspect both cables, drums, bottom brackets, hinges, bearings, and fasteners", "Confirm spring tension and door balance", "Replace damaged hardware with correctly rated parts"],
    considerations: ["Paired component wear", "Corrosion or fatigue", "Correct cable length and drum pairing", "Damage caused by an off-track event"],
  },
  "Safety and Controls": {
    signs: ["The door fails to reverse when obstructed", "Sensor lights blink or remain off", "The door closes and immediately reopens", "Controls operate unpredictably"],
    inspection: ["Clean, align, and test photoelectric sensors", "Inspect wiring and mounting", "Test auto-reverse and force settings", "Confirm the door is balanced and travels freely"],
    considerations: ["Current safety standards", "Compatible replacement sensors", "Wiring damage", "Opener age and control-board condition"],
  },
  Maintenance: {
    signs: ["The door is noisy, slow, or rough", "Fasteners repeatedly loosen", "Weather seals are worn", "The system has not been professionally inspected recently"],
    inspection: ["Inspect springs, cables, rollers, hinges, tracks, bearings, opener, and seals", "Test balance and safety reversal", "Tighten appropriate hardware", "Use manufacturer-appropriate lubrication"],
    considerations: ["Door age and usage frequency", "Coastal or corrosive environments", "Commercial versus residential cycles", "Items excluded from routine maintenance"],
  },
  Weatherproofing: {
    signs: ["Daylight, water, pests, or drafts enter around the door", "The bottom seal is cracked or flattened", "The garage experiences excessive heat or cold transfer", "The threshold no longer seals evenly"],
    inspection: ["Measure gaps at the bottom, sides, and top", "Check the floor and door for unevenness", "Inspect retainers and seal channels", "Confirm drainage and moisture conditions"],
    considerations: ["Seal profile and retainer compatibility", "Floor slope", "Climate and exposure", "Insulation value versus ventilation needs"],
  },
  "Doors and Panels": {
    signs: ["Panels are dented, cracked, bowed, rusted, or separating", "The door no longer seals or moves evenly", "Impact damage affects hinges or tracks", "Multiple components are near end of life"],
    inspection: ["Evaluate panel, stile, hinge, track, spring, and opener condition", "Confirm whether matching panels remain available", "Measure the opening and headroom", "Compare repair and full replacement scope"],
    considerations: ["Panel availability and color matching", "Structural damage", "Insulation and wind-load needs", "Removal and disposal charges"],
  },
  "Door Materials": {
    signs: ["Material-specific cracking, corrosion, rot, delamination, or glass damage", "Finish failure exposes the door to weather", "Hardware pulls away from weakened material", "The door has become heavy or distorted"],
    inspection: ["Identify the door material and construction", "Inspect structural stiles and reinforcement", "Check finish, seals, hardware attachment, and balance", "Determine whether repair materials are compatible"],
    considerations: ["Material matching", "Finish and corrosion protection", "Weight changes", "Manufacturer repair limitations"],
  },
  "Door Styles": {
    signs: ["Sections bind or separate", "Style-specific hardware is worn", "The door no longer follows its intended travel path", "Decorative components interfere with operation"],
    inspection: ["Confirm door construction and operating system", "Inspect hinges, rollers, tracks, guides, and counterbalance components", "Check clearances and reinforcement", "Test full travel safely"],
    considerations: ["Availability of style-specific parts", "Clearance and headroom", "Door weight", "Historic or custom design constraints"],
  },
  "Commercial Services": {
    signs: ["The door disrupts loading, security, access, or production", "High-cycle components show wear", "The curtain, sections, guides, motor, or controls are damaged", "Required safety or fire features do not operate correctly"],
    inspection: ["Document door type, dimensions, cycle use, controls, safety devices, and damage", "Secure the work zone", "Review operational and code requirements", "Provide repair, replacement, and downtime options"],
    considerations: ["Business interruption", "Code and inspection requirements", "High-cycle component ratings", "Access equipment and after-hours work"],
  },
  Security: {
    signs: ["Locks, latches, reinforcement, or access controls no longer secure the opening", "The door can be forced or lifted", "Hardware has been damaged during an attempted entry", "The opener lacks modern security features"],
    inspection: ["Inspect locks, latches, tracks, panels, opener release, and reinforcement", "Check emergency egress and safe operation", "Identify compatibility with the existing door", "Explain mechanical and electronic security options"],
    considerations: ["Fire and egress requirements", "Opener compatibility", "Manual access during power failure", "Avoiding modifications that overload the door"],
  },
};

function guidanceFor(category: string) {
  return categoryGuidance[category] || categoryGuidance["Emergency Repair"];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const guidance = guidanceFor(service.category);
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Country", name: "United States" },
    description: service.summary,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="hero" style={{ padding: "62px 0" }}>
        <div className="container">
          <div className="breadcrumbs"><a href="/">Home</a> / <a href="/services/">Services</a> / {service.title}</div>
          <span className="eyebrow">{service.category}</span>
          <h1 style={{ maxWidth: 930 }}>{service.title} near you</h1>
          <p>Understand common warning signs, professional inspection steps, repair considerations, and how to check independent provider availability in your area.</p>
          <div className="hero-actions"><a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><a className="button outline" href="/locations/">Choose Your State</a></div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="article">
            <span className="pill">Service overview</span>
            <h1 style={{ fontSize: 46 }}>When to consider {service.title.toLowerCase()}</h1>
            <p>{service.title} may be appropriate when a garage door component is damaged, worn, incorrectly adjusted, incompatible, or no longer operating safely. Because the door, counterbalance system, tracks, cables, and opener work together, the visible symptom is not always the root cause.</p>
            <p>A qualified provider should inspect the complete operating system before recommending work. This helps distinguish an isolated component problem from a condition caused by poor balance, impact damage, incorrect installation, corrosion, fatigue, or another failing part.</p>

            <h2>Common warning signs</h2>
            <ul>{guidance.signs.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Stop operating the door when movement is unstable, a spring or cable appears damaged, hardware is separating, the door has left its track, or the opening cannot be secured. Do not stand or work beneath an unsupported door.</p>

            <h2>What a professional inspection may include</h2>
            <ul>{guidance.inspection.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>The provider should explain the diagnosis in plain language and identify which observations support the recommendation. Request photos when hidden or elevated components are involved.</p>

            <h2>Repair and replacement considerations</h2>
            <ul>{guidance.considerations.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Repair may be practical when the affected component is available, compatible, and the rest of the system remains serviceable. Broader replacement may be more economical when damage is extensive, parts are obsolete, failures are recurring, or safety and structural concerns affect multiple components.</p>

            <h2>Questions to ask before authorizing work</h2>
            <ul>
              <li>What failed, and what evidence confirms the diagnosis?</li>
              <li>Does the estimate include parts, labor, service-call charges, taxes, disposal, and testing?</li>
              <li>Are there alternative repair or replacement options?</li>
              <li>What manufacturer, workmanship, and parts warranties apply?</li>
              <li>Will the door be balanced and safety-tested after the work?</li>
              <li>Is the provider currently licensed and insured where required?</li>
            </ul>

            <h2>Cost factors</h2>
            <p>Pricing varies by location, door size and weight, component type, manufacturer, material, labor difficulty, access, urgency, parts availability, and related damage. Emergency or after-hours work may carry additional charges. Obtain a written scope and total estimate before authorizing service.</p>

            <h2>Safety note</h2>
            <p>Garage doors are heavy, and springs, cables, drums, brackets, and counterbalance hardware can store substantial force. Avoid loosening loaded hardware or attempting a repair without the correct training, tools, and procedures. Keep children, pets, vehicles, and bystanders away from an unstable door.</p>
          </article>

          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">Check local availability</span>
              <h2 style={{ fontSize: 32 }}>{service.title}</h2>
              <p>Confirm service coverage, scheduling, credentials, scope, pricing, and warranty terms directly with the independent provider.</p>
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
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
    </>
  );
}
