const title = "shadcn/brand";
const description = "shadcn/brand is brand assets for shadcn/ui.";

export const SITE_INFO = {
  title,
  url: process.env.APP_URL || "https://shadcn-brand.vercel.app",
  ogImage: `/og?title=${encodeURIComponent(
    title
  )}&description=${encodeURIComponent(description)}`,
  description,
  keywords: [
    "shadcn",
    "shadcn/ui",
    "shadcn/brand",
    "shadcn-ui",
    "shadcn-brand",
  ],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#0a0a0a",
};
