import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";
import founder from "@/assets/fondateur.jpeg";

const expertise = [
  "Direction des opérations manufacturières",
  "Excellence opérationnelle",
  "Lean Manufacturing",
  "Déploiement du TPM",
  "Cost Deployment",
  "Amélioration du TRS / OEE",
  "Performance de la chaîne d'approvisionnement",
  "Management de la sécurité alimentaire",
  "Systèmes de management de la qualité",
  "Santé, Sécurité et Environnement (HSE)",
  "Développement des compétences",
];

const certs = [
  "Lean Six Sigma Master Black Belt",
  "Auditeur Principal ISO 9001:2015",
  "Auditeur Principal ISO 22000",
  "Auditeur Principal ISO 45001",
];

const FounderSection = () => {
  return (
    <section id="fondateur" className="section-padding bg-surface-dark">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fondateur</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-dark-foreground mt-3">
            Le mot du Fondateur
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-primary/30">
              <img
                src={founder.url}
                alt="Basile Kouamen — Fondateur de FIMD GROUP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/60 via-transparent to-transparent" />
            </div>
            <div className="mt-6">
              <p className="text-xl font-heading font-bold text-surface-dark-foreground">Basile Kouamen</p>
              <p className="text-sm text-surface-dark-foreground/60 mt-1">
                Fondateur & Directeur Général — FIMD GROUP
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="relative pl-6 border-l-2 border-primary">
              <Quote size={22} className="absolute -left-3 -top-1 text-primary bg-surface-dark p-0.5" />
              <p className="text-surface-dark-foreground/80 leading-relaxed">
                Basile Kouamen est un cadre dirigeant accompli en industrie manufacturière et en excellence opérationnelle, avec <strong className="text-surface-dark-foreground">plus de 38 ans d'expérience internationale</strong> dans la direction d'opérations industrielles, la transformation d'entreprises et les programmes d'excellence opérationnelle au sein d'organisations FMCG multinationales.
              </p>
              <p className="text-surface-dark-foreground/70 leading-relaxed mt-4">
                Il a dirigé avec succès des usines de production, des programmes de transformation régionaux et des initiatives d'excellence opérationnelle en Afrique, en Amérique du Nord et dans les marchés émergents.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-surface-dark-foreground mb-4">Domaines d'expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/15 text-surface-dark-foreground/90 border border-primary/30"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-surface-dark-foreground mb-4">Certifications professionnelles</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {certs.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Award size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-surface-dark-foreground/90">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
