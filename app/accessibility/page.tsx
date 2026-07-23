import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility goals, supported features, known limitations, and feedback process for Garage Door Gazette.",
  alternates: { canonical: "/accessibility/" },
};

export default function AccessibilityPage() {
  return (
    <StandardPage
      eyebrow="Accessible website use"
      title="Accessibility Statement"
      intro="Garage Door Gazette aims to make its service information and navigation usable by people with a broad range of abilities, devices, browsers, and assistive technologies."
      updated="July 23, 2026"
    >
      <h2>Our accessibility goals</h2>
      <p>We work toward clear heading structure, readable contrast, keyboard-accessible navigation, descriptive links, meaningful page titles, responsive layouts, visible focus states, and text alternatives for important visual content.</p>

      <h2>Supported interaction</h2>
      <p>The website is designed to support current desktop and mobile browsers, zoomed text, keyboard navigation, screen readers, and device orientation changes. Some third-party call-routing, analytics, embedded, or advertising tools may have accessibility characteristics outside our direct control.</p>

      <h2>Known limitations</h2>
      <p>Older archived content, third-party destinations, dynamically supplied advertisements, or external provider pages may not meet the same standards. We continue to review templates and shared components as the website expands.</p>

      <h2>Accessibility feedback</h2>
      <p>Report an accessibility barrier through the contact page. Include the page URL, the feature involved, the browser or assistive technology used, and the outcome you expected. This information helps us reproduce and prioritize the issue.</p>

      <h2>Alternative access</h2>
      <p>When a page or feature cannot be used effectively, request the same information in a reasonable alternative format through the contact route. Service availability and provider communications remain subject to the independent provider’s own systems and practices.</p>

      <h2>Ongoing review</h2>
      <p>Accessibility is an ongoing process. New templates, service pages, location routes, and interactive features should be reviewed for keyboard use, focus order, labels, contrast, responsive behavior, and understandable content.</p>
    </StandardPage>
  );
}
