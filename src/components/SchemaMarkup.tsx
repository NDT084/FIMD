import { Helmet } from "react-helmet-async";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/contact";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fimdgroup.com/#organization",
      "name": "FIMD GROUP",
      "description": "Cabinet d'excellence opérationnelle et de performance industrielle — Afrique, Portugal, Irlande.",
      "url": "https://fimdgroup.com",
      "telephone": `+${WHATSAPP_NUMBER}`,
      "email": CONTACT_EMAIL,
      "address": [
        { "@type": "PostalAddress", "addressLocality": "Dakar", "addressCountry": "SN" },
        { "@type": "PostalAddress", "addressLocality": "Porto", "addressCountry": "PT" },
        { "@type": "PostalAddress", "addressCountry": "IE" },
      ],
      "areaServed": [
        "Sénégal", "Côte d'Ivoire", "Ghana", "Cameroun", "Nigeria",
        "RD Congo", "Maroc", "Portugal", "Irlande",
      ].map((name) => ({ "@type": "Country", name })),
      "knowsLanguage": ["fr", "en"],
      "sameAs": [],
    },
    {
      "@type": "Service",
      "serviceType": "Diagnostic Industriel",
      "provider": { "@id": "https://fimdgroup.com/#organization" },
      "description": "Évaluation complète de la performance industrielle : productivité, qualité, maintenance, énergie, coûts, sécurité.",
    },
    {
      "@type": "Service",
      "serviceType": "Réduction des Coûts Industriels",
      "provider": { "@id": "https://fimdgroup.com/#organization" },
      "description": "Identification et élimination des coûts cachés : 5 à 15 % de réduction typiques.",
    },
    {
      "@type": "Service",
      "serviceType": "Amélioration TRS / OEE",
      "provider": { "@id": "https://fimdgroup.com/#organization" },
      "description": "Augmentation de la capacité sans investissement majeur : disponibilité, performance, qualité.",
    },
    {
      "@type": "Service",
      "serviceType": "Élimination des Pertes",
      "provider": { "@id": "https://fimdgroup.com/#organization" },
      "description": "Élimination systématique : arrêts, rebuts, surconsommations, attentes, changements de format.",
    },
    {
      "@type": "Service",
      "serviceType": "Transfert de Compétences",
      "provider": { "@id": "https://fimdgroup.com/#organization" },
      "description": "Former, accompagner, certifier, transférer — Lean, TPM, Kaizen, Cost Deployment.",
    },
  ],
};

const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
);

export default SchemaMarkup;
