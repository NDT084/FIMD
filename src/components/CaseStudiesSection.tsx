import { motion } from "framer-motion";
import { Factory, Package, ShoppingBasket, TrendingUp } from "lucide-react";

const cases = [
  {
    icon: Factory,
    sector: "Industrie Savonnière",
    before: "TRS 58 %",
    after: "TRS 76 %",
    gain: "+31 % de productivité",
  },
  {
    icon: ShoppingBasket,
    sector: "FMCG",
    before: "Coûts de production élevés",
    after: "Réduction des coûts de 11 %",
    gain: "Économie annuelle : 350 000 €",
  },
  {
    icon: Package,
    sector: "Packaging",
    before: "Taux de rebut élevé",
    after: "Réduction des pertes de 45 %",
    gain: "Marge restaurée",
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Études de cas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Résultats concrets chez nos clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border hover:shadow-xl transition-shadow"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-5">
                <c.icon size={22} />
              </span>
              <h3 className="text-lg font-heading font-bold text-foreground mb-4">{c.sector}</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground uppercase text-xs tracking-wider">Situation initiale</dt>
                  <dd className="font-medium text-foreground">{c.before}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground uppercase text-xs tracking-wider">Résultat</dt>
                  <dd className="font-medium text-foreground">{c.after}</dd>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="font-heading font-bold text-primary">{c.gain}</span>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
