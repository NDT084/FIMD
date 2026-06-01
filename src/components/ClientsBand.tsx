import { motion } from "framer-motion";

const clients = [
  { name: "Nestlé", logo: "Nestlé" },
  { name: "Patisen", logo: "Patisen" },
  { name: "SOBOA", logo: "SOBOA" },
  { name: "GMD", logo: "GMD" },
  { name: "SEDIMA", logo: "SEDIMA" },
  { name: "Olam", logo: "Olam" },
];

const ClientsBand = () => {
  return (
    <section className="bg-background border-y border-border py-16 overflow-hidden">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Ils nous font confiance
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3">
            Des acteurs majeurs de l'industrie africaine
          </h2>
        </motion.div>

        {/* Desktop: grille statique */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center h-16 px-4 rounded-xl border border-border bg-card grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-heading font-bold text-lg text-foreground tracking-wide">
                {c.logo}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: défilement automatique */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center justify-center h-14 px-6 rounded-xl border border-border bg-card grayscale opacity-70 shrink-0"
              >
                <span className="font-heading font-bold text-base text-foreground tracking-wide">
                  {c.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBand;
