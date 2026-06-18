import { motion } from "framer-motion";
import { Database, Users, TrendingUp, ShieldCheck, Target, Eye, Sparkles } from "lucide-react";

const pillars = [
  { icon: Database, label: "Les données" },
  { icon: ShieldCheck, label: "La discipline opérationnelle" },
  { icon: Users, label: "Le développement des talents" },
  { icon: TrendingUp, label: "L'amélioration continue" },
];

const mvp = [
  {
    icon: Target,
    title: "Mission",
    text: "Aider les entreprises manufacturières à réduire leurs coûts, améliorer leur productivité et développer les compétences de leurs équipes grâce à une méthodologie d'exécution éprouvée.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Transformer la performance industrielle en résultats durables.",
  },
  {
    icon: Sparkles,
    title: "Notre Promesse",
    text: "Transformer l'expertise industrielle de terrain en un système d'exécution reproductible et transférable.",
  },
];

const AboutSection = () => {
  return (
    <section id="a-propos" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">À propos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">FIMD GROUP</strong> accompagne les entreprises industrielles dans leur transformation opérationnelle. Spécialisés dans les industries manufacturières, nous intervenons dans les secteurs des produits de grande consommation (FMCG), de l'agroalimentaire, de la chimie & cosmétique et de l'emballage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading font-semibold text-foreground mb-6">Notre approche est fondée sur :</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-muted border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {mvp.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-5">
                <Icon size={22} />
              </span>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
