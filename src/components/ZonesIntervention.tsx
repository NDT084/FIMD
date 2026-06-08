import { motion } from "framer-motion";

const countries = [
  { code: "sn", name: "Sénégal" },
  { code: "gn", name: "Guinée" },
  { code: "ml", name: "Mali" },
  { code: "bf", name: "Burkina Faso" },
  { code: "gm", name: "Gambie" },
  { code: "cm", name: "Cameroun" },
  { code: "ng", name: "Nigeria" },
];

const FlagCard = ({ country }: { country: (typeof countries)[0] }) => (
  <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 shrink-0 select-none">
    <img
      src={`https://flagcdn.com/w160/${country.code}.png`}
      srcSet={`https://flagcdn.com/w320/${country.code}.png 2x`}
      width={96}
      height={64}
      alt={`Drapeau ${country.name}`}
      loading="lazy"
      className="w-24 h-16 object-cover rounded-md shadow-md ring-1 ring-border"
      draggable={false}
    />
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
