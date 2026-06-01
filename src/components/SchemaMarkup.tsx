import { Helmet } from "react-helmet-async";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/contact";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://fimd-ei.com/#organization",
      "name": "FIMD EI",
      "description": "Cabinet de conseil industriel spécialisé en performance, agroalimentaire et certifications en Afrique de l'Ouest et Centrale.",
      "url": "https://fimd-ei.com",
      "telephone": `+${WHATSAPP_NUMBER}`,
      "email": CONTACT_EMAIL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN"
      },
      "areaServed": [
        { "@type": "Country", "name": "Sénégal" },
        { "@type": "Country", "name": "Guinée" },
        { "@type": "Country", "name": "Mali" },
        { "@type": "Country", "name": "Burkina Faso" },
        { "@type": "Country", "name": "Gambie" },
        { "@type": "Country", "name": "Cameroun" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "knowsLanguage": ["fr"],
      "sameAs": []
    },
    {
      "@type": "Service",
      "serviceType": "Performance Industrielle",
      "provider": { "@id": "https://fimd-ei.com/#organization" },
      "description": "Optimisation des lignes de production, réduction des coûts opérationnels et amélioration de la productivité.",
      "areaServed": { "@type": "Place", "name": "Afrique de l'Ouest et Centrale" }
    },
    {
      "@type": "Service",
      "serviceType": "Développement Produits Agroalimentaires",
      "provider": { "@id": "https://fimd-ei.com/#organization" },
      "description": "Formulation de recettes bouillons et boissons, optimisation des coûts matières et industrialisation."
    },
    {
      "@type": "Service",
      "serviceType": "QHSE & Certifications ISO HACCP",
      "provider": { "@id": "https://fimd-ei.com/#organization" },
      "description": "Mise en conformité ISO / HACCP, sécurité industrielle et audits réglementaires."
    },
    {
      "@type": "Service",
      "serviceType": "Projets Industriels Greenfield Brownfield",
      "provider": { "@id": "https://fimd-ei.com/#organization" },
      "description": "Conception et suivi d'usines Greenfield & Brownfield, gestion de projets complexes."
    },
    {
      "@type": "Service",
      "serviceType": "Expertise Judiciaire Industrielle",
      "provider": { "@id": "https://fimd-ei.com/#organization" },
      "description": "Rapports techniques pour tribunaux, analyse de litiges industriels."
    }
  ]
};

const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  </Helmet>
);

export default SchemaMarkup;
