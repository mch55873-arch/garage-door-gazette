import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "About Garage Door Gazette",
  description: "Learn how Garage Door Gazette organizes garage door service information, location pages, hiring guidance, and independent provider routes.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <StandardPage
      eyebrow="About the website"
      title="A nationwide garage door information and provider-routing platform"
      intro="Garage Door Gazette helps property owners understand common garage door problems, compare service categories, browse location-specific routes, and prepare for conversations with independent service providers."
    >
      <h2>What Garage Door Gazette does</h2>
      <p>We publish practical information about residential and commercial garage doors, openers, springs, cables, tracks, rollers, panels, seals, controls, maintenance, installation, replacement, and emergency repair situations. Our pages are designed to help readers recognize warning signs, understand the likely inspection process, and ask better questions before authorizing work.</p>

      <h2>How location pages are organized</h2>
      <p>State and local pages provide geographic context for service availability. They do not represent a claim that one company maintains an office, employee, license, or physical location in every community listed. Coverage, response time, licensing, insurance, pricing, parts availability, and service scope must be confirmed directly with the provider handling the call.</p>

      <h2>Independent providers</h2>
      <p>Garage Door Gazette is not the employer, owner, partner, franchisor, or agent of every provider that may receive or respond to an inquiry. Providers are independent businesses responsible for their own credentials, estimates, workmanship, warranties, safety procedures, taxes, and customer agreements.</p>

      <h2>Our editorial approach</h2>
      <p>Content is written to be useful, clear, and safety-conscious. We distinguish general educational guidance from a property-specific diagnosis. Garage door systems can contain heavy moving components and high-tension hardware, so readers are repeatedly encouraged to avoid unsafe do-it-yourself work and obtain qualified assistance when appropriate.</p>

      <h2>How the website may earn revenue</h2>
      <p>The website may receive compensation when a visitor calls, submits an inquiry, or connects with a participating provider or advertising partner. Compensation does not guarantee that a provider is available, suitable, licensed, insured, or the lowest-priced option. Visitors should independently evaluate each provider before hiring.</p>

      <h2>Our responsibility to users</h2>
      <p>We aim to present accurate service descriptions, transparent disclosures, usable navigation, and clear hiring questions. Readers should verify current local requirements and obtain a written diagnosis, scope, price, and warranty before work begins.</p>
    </StandardPage>
  );
}
