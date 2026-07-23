import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

type CorePage = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-23T00:00:00Z");

  const corePageRows: CorePage[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/", priority: 0.95, changeFrequency: "weekly" },
    { path: "/locations/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/articles/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/editorial-policy/", priority: 0.4, changeFrequency: "yearly" },
    { path: "/provider-disclosure/", priority: 0.5, changeFrequency: "yearly" },
    { path: "/accessibility/", priority: 0.3, changeFrequency: "yearly" },
  ];

  const corePages: MetadataRoute.Sitemap = corePageRows.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.82,
  }));

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${siteConfig.url}/locations/${state.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...corePages, ...servicePages, ...statePages, ...articlePages];
}
