import type { Metadata } from "next";
import { states } from "@/data/states";

export const metadata: Metadata = {
  title: "Garage Door Repair Locations Across the USA",
  description: "Browse garage door repair, installation, opener, spring, track, cable, and maintenance service information by U.S. state and the District of Columbia.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">Nationwide service areas</span>
          <h1>Garage door services by state</h1>
          <p>Choose a state to review service information and check independent local provider availability. Coverage, scheduling, pricing, and credentials vary by provider.</p>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="state-grid">
            {states.map((state) => (
              <a className="state-link" key={state.slug} href={`/locations/${state.slug}/`}>
                <strong>{state.name}</strong><br /><small>{state.abbreviation}</small>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
