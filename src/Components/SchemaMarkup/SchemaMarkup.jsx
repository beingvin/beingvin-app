import React from "react";
import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const personSchema = {
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
    "worksFor": {
      "@type": "Organization",
      "name": "Beingvin"
    },
    "image": "https://beingvin.com/images/favicon_io/android-chrome-512x512.png",
    "email": "mailto:contact@beingvin.com",
    "description": "Vin is a skilled full stack web developer and designer. Creating visually stunning and functional responsive websites."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://beingvin.com",
    "name": "Beingvin Portfolio",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://beingvin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
