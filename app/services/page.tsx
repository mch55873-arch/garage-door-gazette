import type { Metadata } from "next";
import { serviceCategories, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Garage Door Repair and Installation Services",
  description: `Browse ${services.length} garage door repair, opener, spring, track, cable, maintenance, installation, and commercial service topics.`,
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">Garage door services</span>
          <h1 style={{ maxWidth: 900 }}>Repair, installation and maintenance service topics</h1>
          <p>Browse {services.length} service guides covering emergency problems, springs, openers, tracks, cables, panels, weatherproofing, maintenance, security, and commercial doors.</p>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((service) => service.category === category);
            return (
              <section key={category} style={{ marginBottom: 48 }}>
                <span className="pill">{category}</span>
                <h2 style={{ fontSize: 34, marginBottom: 22 }}>{category}</h2>
                <div className="cards">
                  {categoryServices.map((service) => (
                    <a className="card" href={`/services/${service.slug}/`} key={service.slug}>
                      <span className="icon">▤</span>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                      <span className="more">Read service guide →</span>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
