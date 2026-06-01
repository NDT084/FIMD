import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp, FlaskConical, ShieldCheck, Building2, Scale, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Industrielle",
    priority: "HAUTE",
    description: "Optimisation des lignes de production, réduction des coûts opérationnels et amélioration de la productivité.",
    details: [
      "Diagnostic complet des processus de production",
      "Identification et élimination des goulots d'étranglement",
      "Mise en place d'indicateurs de performance (KPIs)",
      "Formation des équipes aux méthodes Lean Manufacturing",
      "Suivi post-mission et mesure des résultats",
    ],
  },
  {
    icon: FlaskConical,
    title: "Développement Produits",
    priority: "HAUTE",
    description: "Formulation de recettes bouillons & boissons, optimisation des coûts matières et industrialisation.",
    details: [
      "Formulation et reformulation de recettes industrielles",
      "Optimisation des coûts matières premières",
      "Tests pilotes et mise à l'échelle industrielle",
      "Analyse sensorielle et panels consommateurs",
      "Documentation technique et fiches produits",
    ],
  },
  {
    icon: ShieldCheck,
    title: "QHSE & Certifications",
    priority: "HAUTE",
    description: "Mise en conformité ISO / HACCP, sécurité industrielle et audits réglementaires.",
    details: [
      "Audit de conformité et gap analysis",
      "Mise en place de systèmes HACCP",
      "Préparation aux certifications ISO 22000 / 9001",
      "Formation QHSE des équipes opérationnelles",
      "Accompagnement lors des audits de certification",
    ],
  },
  {
    icon: Building2,
    title: "Projets Industriels",
    priority: "MOYENNE",
    description: "Conception et suivi d'usines Greenfield & Brownfield, gestion de projets complexes.",
    details: [
      "Études de faisabilité technico-économiques",
      "Conception d'usines et dimensionnement des équipements",
      "Supervision de la construction et mise en service",
      "Gestion de projet et coordination des parties prenantes",
      "Optimisation des layouts et flux de production",
    ],
  },
  {
    icon: Scale,
    title: "Expertise Judiciaire",
    priority: "MOYENNE",
    description: "Rapports techniques pour tribunaux, analyse de litiges industriels.",
    details: [
      "Expertises techniques contradictoires",
      "Rapports d'expertise pour les juridictions",
      "Évaluation des dommages industriels",
      "Médiation technique entre parties",
      "Conseil pré-contentieux industriel",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              Des solutions complètes pour l'industrie
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              Cinq domaines d'expertise complémentaires pour accompagner votre transformation industrielle, de l'audit initial à la certification finale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <service.icon size={24} className="text-primary" />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      service.priority === "HAUTE"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      Priorité {service.priority.toLowerCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">
                      En savoir plus
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
                <div className="lg:col-span-3">
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
