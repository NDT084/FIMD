import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Dans quels pays FIMD EI intervient-il ?",
    a: "Nous accompagnons des industriels au Sénégal, en Guinée, au Mali, au Burkina Faso, en Gambie, au Cameroun et au Nigeria. Nos consultants se déplacent sur site et combinent missions terrain et accompagnement à distance.",
  },
  {
    q: "Combien de temps dure une mission type ?",
    a: "Un diagnostic initial dure généralement de 1 à 3 semaines. Les missions de transformation (performance, certification, projet industriel) s'étendent sur 3 à 18 mois selon la complexité et le périmètre.",
  },
  {
    q: "Proposez-vous un diagnostic gratuit ?",
    a: "Oui. Le premier échange et le pré-diagnostic à distance sont offerts. Ils permettent de cadrer votre besoin, d'identifier les leviers prioritaires et de construire une proposition d'intervention adaptée.",
  },
  {
    q: "Êtes-vous habilités à accompagner les certifications ISO et HACCP ?",
    a: "Oui. Notre équipe QHSE accompagne la mise en conformité, la documentation, la formation des équipes et la préparation aux audits ISO 9001, ISO 22000 et HACCP avec les organismes certificateurs.",
  },
  {
    q: "Comment démarrer une collaboration avec FIMD EI ?",
    a: "Contactez-nous via le formulaire ou WhatsApp en décrivant brièvement votre projet. Nous revenons vers vous sous 24h pour planifier un échange de cadrage et formaliser un plan d'intervention.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground mt-4">
            L'essentiel à savoir avant de démarrer une mission avec nous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
