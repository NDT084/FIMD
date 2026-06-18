import { motion } from "framer-motion";
import { Search, BarChart3, ListChecks, Hammer, Anchor, Share2 } from "lucide-react";

const phases = [
  { n: "01", icon: Search, name: "Diagnostic", desc: "Diagnostic industriel complet" },
  { n: "02", icon: BarChart3, name: "Quantification", desc: "Mesure des pertes et opportunités" },
  { n: "03", icon: ListChecks, name: "Priorisation", desc: "Sélection des projets à fort impact" },
  { n: "04", icon: Hammer, name: "Exécution", desc: "Déploiement des chantiers terrain" },
  { n: "05", icon: Anchor, name: "Pérennisation", desc: "Standardisation des gains" },
  { n: "06", icon: Share2, name: "Transfert", desc: "Transfert de compétences — autonomie des équipes" },
];

const MethodologySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Méthodologie</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Notre Méthodologie d'Intervention
          </h2>
          <p className="text-lg text-muted-foreground">Comment nous travaillons — six phases, un système.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative inline-flex w-16 h-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md mb-4">
                  <p.icon size={22} />
                  <span className="absolute -top-2 -right-2 inline-flex w-7 h-7 items-center justify-center rounded-full bg-card border border-border text-xs font-bold text-primary">
                    {p.n}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
