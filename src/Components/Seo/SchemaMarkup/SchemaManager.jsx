// src/components/SchemaManager.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import {
  websiteSchema,
  personSchema,
  aboutPageSchema,
  aboutBreadcrumbSchema,
  pricingBreadcrumbSchema,
  serviceSchema,
} from "./schemaConfig";

const SchemaManager = () => {
  const { pathname } = useLocation();
  const schemas = [websiteSchema]; // always include Website schema

  if (pathname === "/About") {
    schemas.push(personSchema, aboutPageSchema, aboutBreadcrumbSchema);
  }

  if (pathname === "/Services/Pricing") {
    schemas.push(pricingBreadcrumbSchema, serviceSchema);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default SchemaManager;
