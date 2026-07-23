import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Provider Disclosure",
  description: "How Garage Door Gazette may route calls and inquiries to independent garage door providers and what users should verify before hiring.",
  alternates: { canonical: "/provider-disclosure/" },
};

export default function ProviderDisclosurePage() {
  return (
    <StandardPage
      eyebrow="Independent provider notice"
      title="Provider Disclosure"
      intro="Garage Door Gazette may connect visitors with independent garage door service providers or routing partners. This page explains that relationship and the checks users should complete before hiring."
      updated="July 23, 2026"
    >
      <h2>Independent businesses</h2>
      <p>Providers that receive or respond to calls and inquiries are independent businesses. They are not automatically employees, agents, franchisees, partners, or representatives of Garage Door Gazette. Each provider controls its own operations, staffing, licensing, insurance, pricing, scheduling, diagnosis, products, workmanship, warranties, and customer agreements.</p>

      <h2>How routing may work</h2>
      <p>A phone number, form, or location page may route an inquiry to a participating provider, call center, advertising partner, or lead-distribution platform based on factors such as service type, geography, time, capacity, and campaign rules. A route may not be available in every location or at every time.</p>

      <h2>Compensation</h2>
      <p>Garage Door Gazette may receive compensation when a visitor calls, submits an inquiry, or connects with a participating provider or advertising partner. Compensation may influence which route receives an inquiry. It does not guarantee quality, availability, licensing, insurance, pricing, or suitability.</p>

      <h2>No fabricated local presence</h2>
      <p>State, city, and service-area pages are organizational and informational. They do not claim that Garage Door Gazette or one provider has a physical office, employee, license, or established local branch in every listed community. Verify the provider’s actual business identity and service area directly.</p>

      <h2>What to verify before hiring</h2>
      <ul>
        <li>Legal business name and contact details</li>
        <li>Current license or registration where required</li>
        <li>Insurance appropriate to the work</li>
        <li>Written diagnosis and scope of work</li>
        <li>Parts, labor, taxes, fees, disposal, and total price</li>
        <li>Payment schedule and cancellation terms</li>
        <li>Manufacturer and workmanship warranties</li>
        <li>Permit, code, and inspection responsibilities</li>
      </ul>

      <h2>Disputes and service issues</h2>
      <p>The provider that performs the work is responsible for the service agreement and resolving workmanship, payment, scheduling, property-damage, warranty, or customer-service disputes. Keep copies of estimates, invoices, photos, communications, warranties, and payment records.</p>

      <h2>Emergency limitations</h2>
      <p>Emergency, same-day, or 24/7 wording describes a service category or possible route and is not a guarantee of immediate response. Contact local emergency services when there is a threat to life, fire, crime, electrical danger, or another urgent hazard.</p>
    </StandardPage>
  );
}
