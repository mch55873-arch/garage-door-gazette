import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations concerning Garage Door Gazette content, service locations, independent providers, pricing, safety, and emergency situations.",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <StandardPage
      eyebrow="Important limitations"
      title="Disclaimer"
      intro="Garage Door Gazette is an information, advertising, and provider-routing website. The content is general and does not replace a qualified inspection or a written agreement with a service provider."
      updated="July 23, 2026"
    >
      <h2>No property-specific diagnosis</h2>
      <p>Symptoms described online may have multiple causes. A noisy, heavy, crooked, stuck, or non-responsive door cannot be diagnosed reliably without examining the complete door, counterbalance system, tracks, cables, hardware, opener, controls, and surrounding structure.</p>

      <h2>No claim of a local office everywhere</h2>
      <p>Location pages identify areas for which information or provider routes may be available. They do not state that Garage Door Gazette or one provider owns an office, employs technicians, holds a license, or maintains physical premises in every listed city or state.</p>

      <h2>Independent provider responsibility</h2>
      <p>Providers are independent businesses. Garage Door Gazette does not guarantee their licensing, insurance, availability, response time, diagnosis, estimate, products, workmanship, warranty, conduct, or compliance. Verify all material facts directly before hiring.</p>

      <h2>Prices and availability</h2>
      <p>Any general discussion of cost is educational only. Actual pricing depends on location, door size and weight, component type, manufacturer, access, labor, urgency, permits, taxes, parts, damage, and provider policies. Request a written total estimate.</p>

      <h2>Safety disclaimer</h2>
      <p>Garage doors are heavy, and springs, cables, drums, bottom brackets, and related hardware may store substantial force. Do not loosen, cut, unwind, adjust, or remove loaded components unless you are qualified and equipped to do so. Keep people and property away from an unstable door.</p>

      <h2>No emergency service guarantee</h2>
      <p>A phone route or page labeled emergency or same-day does not guarantee immediate response. For fire, injury, crime, carbon monoxide, electrical danger, structural collapse, or another urgent threat, contact the appropriate local emergency service.</p>

      <h2>External information</h2>
      <p>References to brands, products, manufacturers, standards, or third-party resources are informational and do not imply sponsorship or endorsement unless expressly stated. Product specifications and local requirements may change.</p>

      <h2>Use of information</h2>
      <p>You use the website and make hiring decisions at your own discretion. Obtain professional advice appropriate to the property and circumstances.</p>
    </StandardPage>
  );
}
