import { motion } from "framer-motion";

const clients = [
  "Nestlé", "Diageo", "Godrej CP", "Senico SA", "Printpadix",
  "Groupe Sapou", "Mitchimie", "Freshco Sarl", "Brasaf",
];

const ClientsBand = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Partenaires</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3">
            Ils nous font confiance
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-3 md:gap-4">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-[5/3] flex items-center justify-center rounded-xl bg-card border border-border text-foreground/50 hover:text-primary hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="text-xs md:text-sm font-heading font-bold tracking-tight px-2 text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsBand;
