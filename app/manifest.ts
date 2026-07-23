import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Garage Door Gazette",
    short_name: "Garage Door Gazette",
    description: "Nationwide garage door repair, installation, maintenance, location, and provider-routing information.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101826",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
