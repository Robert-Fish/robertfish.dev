import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/content"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: "Robert Fish, Full Stack Engineer",
    template: "%s, Robert Fish",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.canonical }],
  creator: site.name,
  alternates: {
    canonical: site.canonical,
  },
  openGraph: {
    type: "website",
    url: site.canonical,
    title: "Robert Fish, Full Stack Engineer",
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: `${site.origin}/og.png`,
        width: 1200,
        height: 630,
        alt: "Robert Fish, Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Fish, Full Stack Engineer",
    description: site.description,
    images: [`${site.origin}/og.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "128x128" },
      { url: "/icon.png", type: "image/png", sizes: "128x128" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0E1116",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.canonical,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressCountry: "AU",
  },
  sameAs: [site.linkedin, site.github],
  worksFor: {
    "@type": "Organization",
    name: "The BUSY Group",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
