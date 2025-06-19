import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${SITE_INFO.title}`,
    default: SITE_INFO.title,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "ncdai",
      url: SITE_INFO.url,
    },
  ],
  creator: "ncdai",
  openGraph: {
    siteName: SITE_INFO.title,
    url: "/",
    type: "website",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iamncdai", // Twitter username
    images: [SITE_INFO.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Thanks @shadcn-ui */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
