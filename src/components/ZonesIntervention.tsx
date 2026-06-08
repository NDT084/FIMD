import { motion } from "framer-motion";

const countries = [
  { code: "SN", name: "Sénégal", flag: "🇸🇳" },
  { code: "GN", name: "Guinée", flag: "🇬🇳" },
  { code: "ML", name: "Mali", flag: "🇲🇱" },
  { code: "BF", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "GM", name: "Gambie", flag: "🇬🇲" },
  { code: "CM", name: "Cameroun", flag: "🇨🇲" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
];

const FlagCard = ({ country }: { country: (typeof countries)[0] }) => (
  <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 shrink-0 select-none">
    <span className="text-5xl md:text-6xl leading-none" role="img" aria-label={`Drapeau ${country.name}`}>
      {country.flag}
    </span>
    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
      {country.name}
    </span>
  </div>
);

const FlagRow = ({
  reverse = false,
  duration = 30,
}: {
  reverse?: boolean;
  duration?: number;
}) => {
  const items = [...countries, ...countries, ...countries];
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={`flex gap-6 w-max ${animationClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((c, i) => (
          <FlagCard key={`${c.code}-${i}`} country={c} />
        ))}
      </div>
    </div>
  );
};

const ZonesIntervention = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Présence régionale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            7 pays en Afrique de l'Ouest et Centrale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une expertise terrain et une connaissance approfondie des marchés industriels africains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <FlagRow reverse={false} duration={35} />
          <FlagRow reverse={true} duration={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default ZonesIntervention;
