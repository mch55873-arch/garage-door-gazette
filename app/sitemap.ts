import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-23T00:00:00Z");

  const corePages: MetadataRoute.Sitemap = [
    ["/", 1, "weekly"],
    ["/services/", 0.95, "weekly"],
    ["/locations/", 0.9, "weekly"],
    ["/articles/", 0.9, "weekly"],
    ["/about/", 0.6, "monthly"],
    ["/contact/", 0.7, "monthly"],
    ["/privacy-policy/", 0.3, "yearly"],
    ["/terms/", 0.3, "yearly"],
    ["/disclaimer/", 0.3, "yearly"],
    ["/cookie-policy/", 0.3, "yearly"],
    ["/editorial-policy/", 0.4, "yearly"],
    ["/provider-disclosure/", 0.5, "yearly"],
    ["/accessibility/", 0.3, "yearly"],
  ].map(([path, priority, changeFrequency]) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: priority as number,
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
