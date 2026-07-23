import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Garage Door Gazette plans, writes, reviews, updates, corrects, and monetizes garage door service information.",
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  return (
    <StandardPage
      eyebrow="Content standards"
      title="Editorial Policy"
      intro="Garage Door Gazette publishes educational garage door content designed to help readers understand service categories, warning signs, safety concerns, and provider-selection questions."
      updated="July 23, 2026"
    >
      <h2>Editorial purpose</h2>
      <p>Our content explains common garage door components, symptoms, inspection steps, repair and replacement considerations, maintenance practices, safety issues, and questions to ask a provider. It is intended to support informed decisions, not replace an on-site diagnosis or a qualified professional’s judgment.</p>

      <h2>Topic selection</h2>
      <p>Topics are selected from common homeowner and property-manager questions, recurring service categories, seasonal concerns, product and component terminology, location-based search needs, and safety-sensitive situations. We aim to cover a topic as part of a connected subject area rather than publish isolated pages that repeat the same information.</p>

      <h2>Research and drafting</h2>
      <p>Writers and editors may review manufacturer documentation, industry terminology, public safety guidance, code-related resources, product manuals, and established service practices. Content is written in plain language and avoids presenting uncertain or property-specific conclusions as facts.</p>

      <h2>Safety and scope limits</h2>
      <p>Garage doors are heavy and may contain high-tension springs, cables, drums, brackets, and electrical components. Articles should clearly identify situations in which operation should stop and qualified assistance should be considered. Content does not instruct untrained readers to loosen or adjust loaded hardware.</p>

      <h2>Commercial relationships</h2>
      <p>Garage Door Gazette may earn revenue from advertising, calls, inquiries, or provider-routing relationships. Commercial arrangements do not change the requirement to disclose that providers are independent and that users should verify credentials, estimates, warranties, and suitability before hiring.</p>

      <h2>Provider and brand references</h2>
      <p>References to manufacturers, product types, service providers, or third-party resources are included for identification or educational context. They do not automatically indicate sponsorship, endorsement, certification, or a preferred relationship.</p>

      <h2>Updates and corrections</h2>
      <p>Pages may be reviewed and updated when terminology, products, safety information, website structure, or local requirements change. Material corrections should be made as promptly as practical. Correction requests should identify the exact URL, disputed statement, and supporting information.</p>

      <h2>Originality and quality</h2>
      <p>We aim to publish original, useful content that adds context instead of merely rephrasing search results. Programmatic location and service pages should include accurate geographic or service context and should not fabricate offices, employees, licenses, reviews, response times, or local experience.</p>

      <h2>Reader responsibility</h2>
      <p>Readers should treat the website as a research starting point. A written diagnosis, scope, total estimate, credentials, permit requirements, parts information, and warranty should be confirmed directly with the provider responsible for the work.</p>
    </StandardPage>
  );
}
