import { motion } from "framer-motion";
import { Stethoscope, TrendingDown, Gauge, Trash2, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Stethoscope,
    title: "Programme 1 — Diagnostic Industriel",
    desc: "Évaluation complète de la performance industrielle.",
    points: [
      "Axes : Productivité, Qualité, Maintenance, Énergie, Coûts, Sécurité, Organisation",
      "Livrables : Rapport détaillé, cartographie des pertes, plan d'actions priorisé",
    ],
  },
  {
    icon: TrendingDown,
    title: "Programme 2 — Réduction des Coûts",
    desc: "Identifier et éliminer les coûts cachés.",
    points: [
      "Matières premières, énergie, main d'œuvre, maintenance, qualité, stocks",
      "Résultats typiques : 5 à 15 % de réduction, ROI rapide",
    ],
  },
  {
    icon: Gauge,
    title: "Programme 3 — Productivité (TRS/OEE)",
    desc: "Augmentation de la capacité sans investissement majeur.",
    points: [
      "Focus : Disponibilité · Performance · Qualité",
      "Réduction des arrêts, des rebuts, augmentation des capacités",
    ],
  },
  {
    icon: Trash2,
    title: "Programme 4 — Élimination des Pertes",
    desc: "Élimination systématique des pertes industrielles.",
    points: [
      "Arrêts · Rebuts · Surconsommations",
      "Attentes · Changements de format · Sous-performance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Programme 5 — Transfert de Compétences",
    desc: "Former les équipes pour pérenniser les résultats.",
    points: [
      "Approche : Former → Accompagner → Certifier → Transférer",
      "Lean, TPM, Kaizen, OEE/TRS, Cost Deployment, Leadership Opérationnel",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Nos Programmes
          </h2>
          <p className="text-lg text-muted-foreground">
            Cinq programmes complémentaires pour piloter votre transformation industrielle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-5">
                <p.icon size={22} />
              </span>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
