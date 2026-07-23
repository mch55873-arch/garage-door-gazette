export const siteConfig = {
  name: "Garage Door Gazette",
  domain: "garagedoorgazette.com",
  url: "https://garagedoorgazette.com",
  description:
    "Research garage door problems, compare repair and installation services, browse locations, and check local provider availability across the United States.",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_LABEL || "Call (773) 249-5939",
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+17732495939",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_NUMBER
    ? `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
    : "tel:+17732495939",
};

export const siteImages = {
  hero: "https://images.pexels.com/photos/28384143/pexels-photo-28384143.jpeg?auto=compress&cs=tinysrgb&w=1600",
  service: "https://images.pexels.com/photos/34711989/pexels-photo-34711989.jpeg?auto=compress&cs=tinysrgb&w=1400",
  about: "https://images.pexels.com/photos/33910247/pexels-photo-33910247.jpeg?auto=compress&cs=tinysrgb&w=1400",
  areas: "https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1400",
  installation: "https://images.pexels.com/photos/17072601/pexels-photo-17072601.jpeg?auto=compress&cs=tinysrgb&w=1400",
  woodDoor: "https://images.pexels.com/photos/38264449/pexels-photo-38264449.jpeg?auto=compress&cs=tinysrgb&w=1400",
  commercial: "https://images.pexels.com/photos/31944676/pexels-photo-31944676.jpeg?auto=compress&cs=tinysrgb&w=1400",
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
