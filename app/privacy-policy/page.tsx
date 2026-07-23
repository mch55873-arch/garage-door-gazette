import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Garage Door Gazette, including information collection, service routing, analytics, cookies, retention, and user choices.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <StandardPage
      eyebrow="Legal and privacy"
      title="Privacy Policy"
      intro="This policy explains how Garage Door Gazette may collect, use, disclose, and protect information when you browse the website, call a displayed number, or use a service-routing feature."
      updated="July 23, 2026"
    >
      <h2>Information that may be collected</h2>
      <p>Information may include details you voluntarily provide, such as your name, telephone number, email address, property location, ZIP code, requested service, description of the garage door problem, and other information included in a call or inquiry.</p>
      <p>Technical information may also be collected automatically, including IP address, browser and device information, referring page, pages viewed, approximate location, timestamps, interaction data, cookie identifiers, and diagnostic or security logs.</p>

      <h2>Calls and service inquiries</h2>
      <p>Calls placed through numbers displayed on the website may be routed through call-tracking or communications providers. Calls may be monitored or recorded where permitted and after any notice or consent required by the parties handling the call. Information associated with an inquiry may be shared with one or more independent providers, routing partners, or technology vendors for the purpose of responding to the request.</p>

      <h2>How information may be used</h2>
      <ul>
        <li>Operate, secure, maintain, and improve the website.</li>
        <li>Route service inquiries and confirm provider availability.</li>
        <li>Respond to questions, correction requests, and legal notices.</li>
        <li>Measure traffic, calls, conversions, advertising performance, and user experience.</li>
        <li>Detect fraud, abuse, malicious activity, and technical problems.</li>
        <li>Comply with applicable legal obligations and enforce website terms.</li>
      </ul>

      <h2>How information may be shared</h2>
      <p>Information may be shared with independent garage door providers, lead-routing partners, call-tracking vendors, hosting and security providers, analytics vendors, professional advisers, and authorities when legally required. We do not authorize independent providers to use information outside their own applicable notices, agreements, and legal obligations.</p>

      <h2>Cookies and similar technologies</h2>
      <p>The website may use essential, preference, analytics, security, and advertising technologies. Browser controls may allow you to block or remove cookies, although some features may not function as intended. Additional details appear in the Cookie Policy.</p>

      <h2>Data retention and security</h2>
      <p>Information may be retained for as long as reasonably necessary for service routing, business records, analytics, security, dispute resolution, and legal obligations. Reasonable administrative and technical measures may be used, but no internet transmission or storage system can be guaranteed completely secure.</p>

      <h2>Your choices and requests</h2>
      <p>Depending on applicable law and the nature of the information held, you may be able to request access, correction, deletion, restriction, or information about certain disclosures. Requests should identify the relevant interaction and provide enough information to verify the request. Some information may be retained when legally permitted or required.</p>

      <h2>Children</h2>
      <p>The website is intended for adults seeking property-service information and is not directed to children. Do not submit personal information about a child unless necessary and legally appropriate for the service request.</p>

      <h2>External services</h2>
      <p>Independent providers and third-party websites maintain their own privacy practices. Review their notices before providing information or entering an agreement.</p>

      <h2>Policy changes</h2>
      <p>This policy may be updated as the website, service-routing methods, or legal requirements change. The updated date at the top of this page identifies the current published version.</p>
    </StandardPage>
  );
}
