import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
import { siteConfig } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/articles/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `${siteConfig.url}/articles/${article.slug}/`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedServices = article.serviceSlugs.map((serviceSlug) => getService(serviceSlug)).filter((service): service is NonNullable<typeof service> => Boolean(service));
  const relatedArticles = articles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, 4);

  const faqs = [
    {
      question: `What is the clearest first step for ${article.title.toLowerCase()}?`,
      answer: "Stop normal operation when the door is unstable, unusually heavy, off track, affected by damaged springs or cables, or creating a safety or security risk. Observe the condition from a safe position and arrange a qualified inspection rather than forcing movement.",
    },
    {
      question: "Can the problem be diagnosed accurately over the phone?",
      answer: "A phone description and photos may help identify likely causes, but a reliable diagnosis often requires checking the complete door, counterbalance system, tracks, cables, hardware, opener, controls, and surrounding opening.",
    },
    {
      question: "Should I operate the door until the appointment?",
      answer: "Do not keep operating a door that is crooked, off track, hanging, unusually heavy, affected by a broken spring or cable, scraping severely, or unable to secure the opening. Ask the provider for situation-specific safety guidance.",
    },
    {
      question: "What should a written estimate include?",
      answer: "The estimate should identify the diagnosis, parts, labor, service-call charges, taxes, disposal, urgency fees, alternatives, exclusions, payment terms, expected completion, and applicable parts and workmanship warranties.",
    },
    {
      question: "Does Garage Door Gazette perform the repair?",
      answer: "Garage Door Gazette is an information and provider-routing platform. Providers are independent businesses, and users should verify their identity, credentials, insurance, scope, pricing, and warranty terms before hiring.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}/`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    inLanguage: "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="hero" style={{ padding: "66px 0" }}>
        <div className="container">
          <div className="breadcrumbs"><a href="/">Home</a> / <a href="/articles/">Articles</a> / {article.title}</div>
          <span className="eyebrow">{article.category} guide</span>
          <h1 style={{ maxWidth: 980 }}>{article.title}</h1>
          <p>{article.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="article">
            <span className="pill">Direct answer</span>
            <p><strong>{article.directAnswer}</strong></p>
            <p>A garage door is a coordinated system rather than a collection of independent parts. The panels and structural stiles travel through tracks on rollers, while springs and cables counterbalance the weight and the opener controls movement. A symptom that appears to come from one component may actually be caused by resistance, imbalance, impact damage, incorrect adjustment, electrical failure, or wear elsewhere in the system.</p>
            <p>That is why a careful inspection should connect the recommended work to observable evidence. The provider should be able to explain what failed, what may have caused it, which related components were checked, and how the door will be tested after service. A diagnosis should not rely only on the sound described in a call or on the age of the opener.</p>

            <h2>Warning signs to take seriously</h2>
            <ul>{article.warningSigns.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Stop normal operation when the door moves unpredictably, hangs unevenly, has left the track, is affected by a broken spring or cable, or cannot be secured. Do not stand beneath an unsupported door. Keep children, pets, vehicles, and stored property away from the travel path until the system is stable.</p>
            <p>A door that still moves is not necessarily safe. Repeated operation can turn a manageable component failure into track, panel, opener, or structural damage. It can also create a falling or crushing hazard. When the symptom is new, severe, or changing quickly, use the emergency release only when the door can be controlled safely and the manufacturer’s procedure is understood.</p>

            <h2>Common causes and contributing conditions</h2>
            <ul>{article.commonCauses.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>More than one cause may exist at the same time. For example, a worn roller can increase resistance, poor balance can overload the opener, and loose track hardware can allow the door to shift. Replacing only the most visible failed part may not restore reliable operation when the related condition remains.</p>
            <p>Environmental exposure also matters. Moisture, salt, dust, heat, cold, sunlight, pests, and repeated wetting can affect metal, wood, seals, wiring, finishes, bearings, and controls. Commercial or multi-user doors accumulate cycles much faster than a typical residential door, so their maintenance and component ratings should reflect actual use.</p>

            <h2>What a professional inspection may include</h2>
            <ul>{article.professionalChecks.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>A complete inspection should be proportionate to the symptom. It commonly includes the door sections and reinforcement, tracks and mounting points, rollers, hinges, springs, cables, drums, brackets, bearings, opener rail and drive system, controls, safety sensors, travel limits, force settings, weather seals, and manual release. The provider should also look for impact damage, corrosion, previous modifications, and parts that are incompatible with the door.</p>
            <p>Ask the provider to demonstrate the condition when it can be shown safely. Photos are useful for elevated, concealed, or difficult-to-see components. After repair, the door should move smoothly, remain properly aligned, balance as intended, and complete applicable safety tests. Merely making the opener move the door does not prove the counterbalance system is correct.</p>

            <h2>Repair, adjustment or replacement?</h2>
            <p>Repair is generally reasonable when the problem is isolated, the surrounding system remains serviceable, and correctly rated compatible parts are available. Adjustment may be appropriate when hardware is intact but alignment, travel, controls, or balance require correction. Replacement becomes more practical when damage is structural, failures are recurring, components are obsolete, matching parts are unavailable, or the cost and uncertainty of repeated repair approach the value of a broader solution.</p>
            <p>Request alternatives when more than one legitimate approach exists. A useful estimate explains the minimum safe repair, any recommended preventive work, and the reason for an upgrade or replacement. Optional improvements—such as quieter rollers, higher-cycle springs, battery backup, smart controls, insulation, reinforcement, or new weather seals—should be distinguished from work required to restore safe operation.</p>

            <h2>Cost factors that affect the estimate</h2>
            <p>Actual cost depends on the service area, door type, dimensions, weight, material, component design, manufacturer, parts availability, labor access, urgency, after-hours scheduling, related damage, taxes, permits, disposal, and warranty. A commercial, custom, glass, wood, wind-rated, high-cycle, or fire-rated door can require different equipment and procedures from a common residential sectional door.</p>
            <p>Do not compare estimates by total price alone when the scopes differ. One estimate may include paired parts, balance testing, new hardware, disposal, tax, and warranty while another excludes them. Ask whether the service-call charge applies to the repair, whether additional work requires approval, and when payment is due.</p>

            <h2>Safety boundaries for do-it-yourself work</h2>
            <p>Simple observation, cleaning sensor lenses, replacing a remote battery, or moving an obvious obstruction may be within a homeowner’s normal maintenance ability when done according to manufacturer instructions. Work involving loaded springs, cables, drums, bottom brackets, structural track, unsupported panels, electrical faults, or a door that is off track requires much greater caution.</p>
            <p>Springs and related components can store substantial force, and the door itself may weigh hundreds of pounds. Do not loosen fasteners without knowing whether they retain spring tension or support the door. Do not use improvised clamps, ropes, jacks, or ladders to hold an unstable door. When there is fire, injury, crime, electrical arcing, structural collapse, or another immediate threat, contact the appropriate emergency service rather than relying on a service-directory call.</p>

            <h2>Questions to ask the provider</h2>
            <ul>
              <li>What failed, and what evidence confirms the diagnosis?</li>
              <li>Were the door balance, tracks, cables, springs, hardware, opener, and safety devices checked?</li>
              <li>Which repair and replacement options are available, and why is one recommended?</li>
              <li>Are the parts correctly rated and compatible with this door?</li>
              <li>Does the written price include labor, parts, service-call charges, taxes, disposal, and testing?</li>
              <li>What parts, manufacturer, and workmanship warranties apply?</li>
              <li>Is the provider currently licensed or registered where required and appropriately insured?</li>
              <li>Will permits, code requirements, or inspections apply to this work?</li>
            </ul>

            <h2>Ways to reduce future problems</h2>
            <ul>{article.prevention.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Keep a simple record of the door model, opener model, spring or component details, installation date, maintenance visits, repairs, and warranty documents. This information makes future diagnosis and parts matching easier. Pay attention to changes in sound, speed, balance, sealing, control response, and alignment rather than waiting for complete failure.</p>
            <p>Maintenance should be based on usage and condition. A lightly used residential door and a high-cycle warehouse door do not need the same schedule. The goal is not to replace parts automatically; it is to identify wear, maintain safe movement, protect the opener from excessive load, and prevent secondary damage.</p>

            <h2>Related services</h2>
            <div className="list">
              {relatedServices.map((service) => <a key={service.slug} href={`/services/${service.slug}/`}>{service.title}</a>)}
              <a href="/provider-disclosure/">Understand independent provider routing</a>
              <a href="/locations/">Browse service information by state</a>
            </div>

            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => <div className="faq" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}

            <h2>Bottom line</h2>
            <p>{article.directAnswer} Use this guide to prepare for the inspection and to ask focused questions, but base the final decision on the actual property, the provider’s documented findings, a written scope, and verified credentials. Garage Door Gazette provides educational information and connection routes; independent providers are responsible for the diagnosis, estimate, service agreement, workmanship, and warranty.</p>
          </article>

          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">Check local availability</span>
              <h2 style={{ fontSize: 31 }}>{article.category} service</h2>
              <p>Confirm provider coverage, scheduling, identity, credentials, inspection scope, total price, and warranty terms directly.</p>
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </div>
            {relatedArticles.length ? <div style={{ marginTop: 26 }}><h3>Related guides</h3><div className="list">{relatedArticles.map((item) => <a key={item.slug} href={`/articles/${item.slug}/`}>{item.title}</a>)}</div></div> : null}
          </aside>
        </div>
      </section>
    </>
  );
}
