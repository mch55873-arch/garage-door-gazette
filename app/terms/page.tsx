import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing use of Garage Door Gazette, its educational content, location pages, phone routes, and independent provider connections.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <StandardPage
      eyebrow="Website terms"
      title="Terms and Conditions"
      intro="By accessing or using Garage Door Gazette, you agree to these terms. Do not use the website if you do not accept them."
      updated="July 23, 2026"
    >
      <h2>Website purpose</h2>
      <p>Garage Door Gazette provides general educational content, service-category information, location navigation, advertising, and routes that may connect users with independent garage door providers. The website is not a substitute for an on-site inspection, engineering opinion, legal advice, insurance advice, code review, or emergency service.</p>

      <h2>No universal contractor relationship</h2>
      <p>Garage Door Gazette does not claim to employ, own, control, supervise, or maintain a physical office for every provider or location displayed. A provider connection does not create a partnership, agency, franchise, joint venture, employment relationship, or warranty by Garage Door Gazette.</p>

      <h2>Your responsibility when hiring</h2>
      <p>You are responsible for evaluating the provider, confirming identity and credentials, reviewing references where appropriate, obtaining a written diagnosis and estimate, understanding permits and code requirements, and deciding whether to enter a service agreement. Verify insurance, licensing where required, parts, labor, exclusions, payment terms, completion standards, and warranties before authorizing work.</p>

      <h2>Safety</h2>
      <p>Garage doors, springs, cables, drums, brackets, tracks, openers, and related components may create crushing, falling, electrical, and stored-energy hazards. Do not rely on website content as an instruction to perform work beyond your training and equipment. Contact appropriate emergency services when there is an immediate threat to life or property.</p>

      <h2>Permitted use</h2>
      <p>You may use the website for lawful personal or business research related to garage door services. You may not interfere with website operation, attempt unauthorized access, introduce malicious code, scrape at a harmful rate, misrepresent your identity, submit fraudulent inquiries, abuse phone routes, copy substantial portions of the website, or use content in a way that violates applicable law or third-party rights.</p>

      <h2>Content accuracy</h2>
      <p>We aim to keep content useful and accurate, but service practices, product availability, pricing, codes, credentials, and local requirements change. Information is provided without a guarantee that it is complete, current, or suitable for a particular property.</p>

      <h2>Third-party services and links</h2>
      <p>The website may contain phone routes, advertisements, links, or references to third parties. Garage Door Gazette is not responsible for third-party websites, availability, representations, privacy practices, contracts, products, workmanship, or conduct.</p>

      <h2>Compensation and advertising</h2>
      <p>Garage Door Gazette may receive compensation from calls, inquiries, advertising, or provider-routing relationships. Compensation may affect which route or provider receives an inquiry, but it does not constitute an endorsement or guarantee.</p>

      <h2>Disclaimer of warranties</h2>
      <p>The website and its content are provided on an “as available” basis without warranties of uninterrupted operation, error-free content, provider availability, response time, results, merchantability, fitness for a particular purpose, or non-infringement, to the extent permitted by law.</p>

      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, Garage Door Gazette will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; lost profits; property damage; personal injury; provider acts or omissions; service disputes; or reliance on website content. Rights that cannot legally be excluded remain unaffected.</p>

      <h2>Indemnity</h2>
      <p>You agree to be responsible for losses, claims, or costs arising from your unlawful misuse of the website, violation of these terms, fraudulent submissions, or infringement of another party’s rights, to the extent permitted by law.</p>

      <h2>Changes and availability</h2>
      <p>We may update content, routes, services, locations, or these terms and may suspend or discontinue parts of the website. Continued use after an update constitutes acceptance of the revised terms.</p>

      <h2>Contact</h2>
      <p>Questions or legal notices concerning these terms may be submitted through the contact page. Include the relevant URL, date, and a clear description of the matter.</p>
    </StandardPage>
  );
}
