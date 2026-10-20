// src/components/SchemaManager.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SchemaManager = () => {
  const { pathname } = useLocation();

  const getSchemas = () => {
    if (pathname === "/About") {
      return [
        <script key="person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vin",
              "url": "https://beingvin.com",
              "sameAs": [
                "https://www.linkedin.com/in/vin",
                "https://github.com/vin",
                "https://twitter.com/vin"
              ],
              "jobTitle": "Full Stack Web Developer & Designer",
              "image": "https://beingvin.com/images/favicon_io/android-chrome-512x512.png",
              "email": "mailto:contact@beingvin.com",
              "description": "Vin is a skilled full stack web developer and designer. Creating visually stunning and functional responsive websites."
            }
          `}
        </script>,
        <script key="about" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Vin",
              "url": "https://beingvin.com/About",
              "description": "Learn more about Vin, a full stack web developer & designer with a passion for building performant, user-friendly websites."
            }
          `}
        </script>,
        <script key="aboutBreadcrumb" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://beingvin.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://beingvin.com/About"
                }
              ]
            }
          `}
        </script>
      ];
    }

    if (pathname === "/Services/Pricing") {
      return [
        <script key="service" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Full Stack Web Development",
              "provider": {
                "@type": "Person",
                "name": "Vin"
              },
              "serviceType": "Web Design and Development",
              "areaServed": ["India", "US", "Europe"],
              "url": "https://beingvin.com/Services/Pricing",
              "description": "End-to-end responsive and SEO-optimized web development using React, Node.js, and modern design tools."
            }
          `}
        </script>,
        <script key="pricingBreadcrumb" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://beingvin.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Pricing",
                  "item": "https://beingvin.com/Services/Pricing"
                }
              ]
            }
          `}
        </script>
      ];
    }

    return [
      <script key="website" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://beingvin.com",
            "name": "Beingvin Portfolio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://beingvin.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    ];
  };

  return <Helmet>{getSchemas()}</Helmet>;
};

export default SchemaManager;
