import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Garage Door Gazette, including essential, analytics, security, call-attribution, and advertising technologies.",
  alternates: { canonical: "/cookie-policy/" },
};

export default function CookiePolicyPage() {
  return (
    <StandardPage
      eyebrow="Privacy controls"
      title="Cookie Policy"
      intro="This policy explains how Garage Door Gazette may use cookies and similar technologies to operate the website, protect it, understand usage, and measure service inquiries."
      updated="July 23, 2026"
    >
      <h2>What cookies are</h2>
      <p>Cookies are small files or identifiers stored or read by a browser or device. Similar technologies may include local storage, pixels, tags, scripts, and call-attribution identifiers.</p>

      <h2>Types of technologies that may be used</h2>
      <ul>
        <li><strong>Essential:</strong> support core navigation, security, load balancing, and technical operation.</li>
        <li><strong>Preference:</strong> remember choices such as location or display settings.</li>
        <li><strong>Analytics:</strong> measure visits, page performance, navigation, and general usage trends.</li>
        <li><strong>Advertising and attribution:</strong> measure calls, inquiries, campaigns, and provider-routing performance.</li>
        <li><strong>Fraud and security:</strong> identify suspicious traffic, abuse, automated activity, and technical threats.</li>
      </ul>

      <h2>Third-party technologies</h2>
      <p>Hosting, analytics, advertising, security, and call-routing vendors may set or read their own identifiers while providing services. Their handling of information is governed by their own notices and agreements.</p>

      <h2>Your controls</h2>
      <p>Most browsers allow you to block, delete, or limit cookies. Device and browser settings may also restrict tracking or reset advertising identifiers. Blocking essential technologies may affect website functionality, while blocking analytics or advertising technologies may reduce measurement accuracy.</p>

      <h2>Consent tools</h2>
      <p>A consent banner or preference control may be displayed when required or when additional tracking tools are activated. Available choices depend on the technologies in use and the visitor’s location.</p>

      <h2>Changes</h2>
      <p>This policy may be updated when technologies, vendors, website functions, or legal requirements change. Review the updated date for the current published version.</p>
    </StandardPage>
  );
}
