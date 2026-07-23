import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Garage Door Gazette",
  description: "Contact Garage Door Gazette or use the local service route to check independent garage door provider availability.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <StandardPage
      eyebrow="Contact and availability"
      title="Contact Garage Door Gazette"
      intro="Use the phone route below to check current provider availability. Service coverage, scheduling, credentials, pricing, and warranties must be confirmed directly with the independent provider."
    >
      <h2>Check local service availability</h2>
      <p>The fastest available contact route is the service phone link. When connected, explain the property location, door type, visible symptoms, urgency, and whether the opening can be secured safely.</p>
      <p><a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>

      <h2>Information to prepare before calling</h2>
      <ul>
        <li>City, state, and ZIP code</li>
        <li>Residential or commercial property</li>
        <li>Door material, approximate size, and number of sections</li>
        <li>Whether the door is open, closed, stuck, crooked, or off track</li>
        <li>Any visible broken spring, loose cable, damaged panel, bent track, or opener warning light</li>
        <li>Photos or video that may help the provider understand the condition</li>
      </ul>

      <h2>Before authorizing service</h2>
      <p>Ask the provider to confirm its legal business name, service area, licensing where required, insurance, inspection findings, written scope, total price, payment terms, parts, labor, exclusions, and warranty. Do not authorize work solely because a provider appeared through this website.</p>

      <h2>Website feedback and correction requests</h2>
      <p>Website feedback, content corrections, accessibility concerns, and legal notices may be submitted through the contact method displayed on this page. Include the exact page URL and a clear description of the issue so it can be reviewed efficiently.</p>

      <h2>Emergency warning</h2>
      <p>Garage Door Gazette is not an emergency-response agency. For fire, injury, crime, electrical danger, or another immediate threat to life or property, contact the appropriate local emergency service. Keep people, pets, and vehicles away from an unstable or unsupported garage door.</p>
    </StandardPage>
  );
}
