// src/utils/schemaConfig.js

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://beingvin.com",
  name: "Beingvin Portfolio",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://beingvin.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vin",
  url: "https://beingvin.com",
  sameAs: [
    "https://www.linkedin.com/in/vin",
    "https://github.com/vin",
    "https://twitter.com/vin"
  ],
  jobTitle: "Full Stack Web Developer & Designer",
  image: "https://beingvin.com/images/favicon_io/android-chrome-512x512.png",
  email: "mailto:contact@beingvin.com",
  description: "Vin is a skilled full stack web developer and designer. Creating visually stunning and functional responsive websites."
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vin",
  url: "https://beingvin.com/About",
  description: "Learn more about Vin, a full stack web developer & designer with a passion for building performant, user-friendly websites."
};

export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://beingvin.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://beingvin.com/About"
    }
  ]
};

export const pricingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://beingvin.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://beingvin.com/Services/Pricing"
    }
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Stack Web Development",
  provider: {
    "@type": "Person",
    name: "Vin"
  },
  serviceType: "Web Design and Development",
  areaServed: ["India", "United States", "Europe","Asia", "Middle East"], // extended areaServed
  url: "https://beingvin.com/Services/Pricing",
  description: "End-to-end responsive and SEO-optimized web development using React, Node.js, and modern design tools."
};
