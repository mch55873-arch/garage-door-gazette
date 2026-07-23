export const siteConfig = {
  name: "Garage Door Gazette",
  domain: "garagedoorgazette.com",
  description:
    "Find garage door repair, installation and maintenance services in communities across the United States.",
  phoneLabel: process.env.NEXT_PUBLIC_PHONE_LABEL || "Check Local Availability",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_NUMBER
    ? `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
    : "/contact/",
};
