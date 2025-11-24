import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import ProductsUpdated from "@/components/sections/ProductsUpdated";
import AboutUpdated from "@/components/sections/AboutUpdated";
import GlobalOfficesUpdated from "@/components/sections/GlobalOfficesUpdated";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

// SEO Metadata - Optimized for Search Engines
export const metadata: Metadata = {
  title: "CannyMinds Technology Solutions | Digital Transformation & AI Services | ISO Certified",
  description: "Leading IT solutions provider with 20+ years of experience in digital transformation, AI automation, enterprise software development. ISO 27001 certified. Serving 500+ clients across India, USA, Nigeria, UAE. Expert in CannyDocs, CannyHR, CannyScan, CannyTrack.",
  keywords: [
    "digital transformation services",
    "AI automation solutions",
    "enterprise software development",
    "IT consulting services",
    "document management software",
    "HR payroll software",
    "business process automation",
    "cloud migration services",
    "CannyDocs",
    "CannyHR",
    "ISO 27001 certified IT company",
    "IT solutions India",
    "IT solutions USA",
    "custom software development",
    "digital marketing services"
  ],
  authors: [{ name: "CannyMinds Technology Solutions" }],
  openGraph: {
    title: "CannyMinds Technology Solutions | Digital Transformation & AI Services",
    description: "20+ years experience delivering enterprise IT solutions, AI automation, and digital transformation to 500+ clients globally. ISO 27001 certified.",
    type: "website",
    url: "https://cannymindstech.com",
    siteName: "CannyMinds Technology Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyMinds Technology Solutions"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CannyMinds Technology Solutions | Digital Transformation & AI Services",
    description: "20+ years experience in digital transformation, AI automation, and enterprise software development. ISO 27001 certified.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://cannymindstech.com",
  },
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CannyMinds Technology Solutions",
  "description": "Leading IT solutions provider specializing in digital transformation, AI automation, and enterprise software development",
  "url": "https://cannymindstech.com",
  "logo": "https://cannymindstech.com/logo.png",
  "foundingDate": "2003",
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "streetAddress": "No 5 Devaraj street, OMR Perungudi",
      "postalCode": "600096"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "McKinney",
      "addressRegion": "Texas"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressLocality": "Lagos"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Dubai"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9361801926",
    "contactType": "customer service",
    "areaServed": ["IN", "US", "NG", "AE"],
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/cannyminds",
    "https://twitter.com/cannyminds",
    "https://www.facebook.com/cannyminds"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  }
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navigation />
      <main>
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>
        <section id="products" aria-label="Products and services">
          <ProductsUpdated />
        </section>
        <section id="about" aria-label="About CannyMinds">
          <AboutUpdated />
        </section>
        <section id="offices" aria-label="Global offices">
          <GlobalOfficesUpdated />
        </section>
        <section id="faq" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        <section id="contact" aria-label="Contact information">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
