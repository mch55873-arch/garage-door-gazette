import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getState, states } from "@/data/states";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) return {};
  return {
    title: `Garage Door Repair Services in ${state.name}`,
    description: `Browse garage door repair, spring, opener, cable, track, panel, installation, maintenance, and commercial service information for ${state.name}.`,
    alternates: { canonical: `/locations/${state.slug}/` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) notFound();
  const featured = services.slice(0, 18);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Garage Door Services in ${state.name}`,
    url: `${siteConfig.url}/locations/${state.slug}/`,
    description: `Garage door service information and independent provider routes for ${state.name}.`,
    about: { "@type": "AdministrativeArea", name: state.name },
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <div className="breadcrumbs"><a href="/">Home</a> / <a href="/locations/">Locations</a> / {state.name}</div>
          <span className="eyebrow">{state.abbreviation} service guide</span>
          <h1>Garage door services in {state.name}</h1>
          <p>Review common garage door service categories and check current availability with independent providers that may serve communities in {state.name}. Coverage, response time, credentials, pricing, and warranties vary by provider.</p>
          <div className="hero-actions"><a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><a className="button outline" href="/services/">Browse Services</a></div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div><span className="pill">Popular service categories</span><h2>Garage door repair and installation information for {state.name}</h2></div>
          </div>
          <div className="cards">
            {featured.map((service) => (
              <a className="card" key={service.slug} href={`/services/${service.slug}/`}>
                <span className="pill">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="more">Review service →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="article">
            <h2>How to use this {state.name} service page</h2>
            <p>Start with the symptom or component involved, review the relevant service page, and then confirm whether an independent provider currently covers your ZIP code. A state page is geographic navigation, not a claim that one company has an office, employee, license, or established local branch in every community.</p>

            <h2>What to describe when you call</h2>
            <ul>
              <li>Property city, ZIP code, and whether the door is residential or commercial</li>
              <li>Whether the door is open, closed, stuck, uneven, noisy, off track, or unsecured</li>
              <li>Visible damage to springs, cables, rollers, tracks, panels, hinges, seals, or opener controls</li>
              <li>Door size, material, approximate age, brand, and opener model when known</li>
              <li>Any immediate safety, access, weather, or security concern</li>
            </ul>

            <h2>Verify the provider before authorizing work</h2>
            <p>Requirements can differ by jurisdiction and job type. Confirm the provider’s legal business identity, current credentials where required, insurance, written diagnosis, parts, labor, taxes, service-call fees, total price, payment schedule, exclusions, permits, and warranty. Keep copies of estimates, invoices, photos, and communications.</p>

            <h2>Garage door safety</h2>
            <p>Stop using a door that is unstable, off track, unsupported, affected by a broken spring or cable, or unable to secure the opening. Springs, cables, drums, bottom brackets, and related counterbalance components can store substantial force. Keep people, pets, and vehicles away until the condition is evaluated safely.</p>

            <h2>Climate and property considerations</h2>
            <p>Weather exposure, wind, temperature changes, humidity, salt air, snow, dust, sun, drainage, and usage frequency can affect doors differently across {state.name}. A provider should inspect the actual property rather than recommend work solely from a general description.</p>
          </article>

          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">{state.name}</span>
              <h2 style={{ fontSize: 31 }}>Check current coverage</h2>
              <p>Ask whether the provider serves your ZIP code and confirm scheduling, credentials, inspection scope, pricing, and warranty terms.</p>
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </div>
            <div className="list" style={{ marginTop: 22 }}>
              <a href="/services/emergency-garage-door-repair/">Emergency Garage Door Repair</a>
              <a href="/services/broken-garage-door-spring-repair/">Broken Spring Repair</a>
              <a href="/services/garage-door-opener-repair/">Garage Door Opener Repair</a>
              <a href="/services/off-track-garage-door-repair/">Off-Track Door Repair</a>
              <a href="/provider-disclosure/">Provider Disclosure</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
