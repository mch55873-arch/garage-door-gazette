export const siteConfig = {
  name: "Garage Door Gazette",
  domain: "garagedoorgazette.com",
  url: "https://garagedoorgazette.com",
  description:
    "Research garage door problems, compare repair and installation services, browse locations, and check local provider availability across the United States.",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_LABEL || "Check Local Availability",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_NUMBER
    ? `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
    : "/contact/",
};

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
