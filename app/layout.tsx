import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Garage Door Repair Services Across the USA | Garage Door Gazette",
    template: "%s | Garage Door Gazette",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Garage Door Repair Services Across the USA",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Repair Services Across the USA",
    description: siteConfig.description,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
