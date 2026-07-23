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
    description: `Browse all ${services.length} garage door repair, installation, opener, spring, cable, track, panel, maintenance and commercial service topics for ${state.name}.`,
    alternates: { canonical: `https://${state.slug}.garagedoorgazette.com/` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Garage Door Services in ${state.name}`,
    url: `https://${state.slug}.garagedoorgazette.com/`,
    description: `Complete garage door service directory and independent provider routes for ${state.name}.`,
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
          <h1>All garage door services in {state.name}</h1>
          <p>Browse the complete {services.length}-service directory. The live state subdomain also provides the full city and community directory for {state.name}.</p>
          <div className="hero-actions"><a className="button" href={`https://${state.slug}.garagedoorgazette.com/`}>Open {state.name} Directory</a><a className="button outline" href="/services/">National Services</a></div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head">
            <div><span className="pill">Complete service directory</span><h2>All {services.length} garage door services</h2></div>
          </div>
          <div className="cards">
            {services.map((service) => (
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
            <h2>State and city subdomain structure</h2>
            <p>The canonical state route is <strong>{state.slug}.garagedoorgazette.com</strong>. City routes use the format <strong>city-{state.slug}.garagedoorgazette.com</strong>. Each city route contains the complete service directory and location-specific service pages.</p>
            <h2>Verify the provider before authorizing work</h2>
            <p>Confirm the provider’s legal business identity, credentials where required, insurance, diagnosis, parts, labor, taxes, service-call charges, total price, exclusions, expected completion time and written warranty.</p>
            <h2>Garage door safety</h2>
            <p>Stop using a door that is unstable, off track, unsupported, affected by a broken spring or cable, or unable to secure the opening. Keep people, pets and vehicles away until the system is evaluated safely.</p>
          </article>
          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">{state.name}</span>
              <h2 style={{ fontSize: 31 }}>Browse every city</h2>
              <p>Open the canonical state subdomain to browse every city and community route in {state.name}.</p>
              <a className="button" href={`https://${state.slug}.garagedoorgazette.com/`}>View Cities</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
