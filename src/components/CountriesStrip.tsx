import { motion } from "framer-motion";

const countries = [
  { code: "sn", name: "Sénégal" },
  { code: "ci", name: "Côte d'Ivoire" },
  { code: "gh", name: "Ghana" },
  { code: "cm", name: "Cameroun" },
  { code: "ng", name: "Nigeria" },
  { code: "cd", name: "RD Congo" },
  { code: "ma", name: "Maroc" },
  { code: "gn", name: "Guinée" },
  { code: "ml", name: "Mali" },
  { code: "bf", name: "Burkina Faso" },
  { code: "gm", name: "Gambie" },
  { code: "pt", name: "Portugal" },
  { code: "ie", name: "Irlande" },
];

const Flag = ({ code, name }: { code: string; name: string }) => (
  <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all shrink-0">
    <img
      src={`https://flagcdn.com/w160/${code}.png`}
      srcSet={`https://flagcdn.com/w320/${code}.png 2x`}
      width={80}
      height={54}
      alt={`Drapeau ${name}`}
      loading="lazy"
      className="w-20 h-14 object-cover rounded-md shadow-sm ring-1 ring-border"
      draggable={false}
    />
    <span className="text-xs font-semibold text-foreground whitespace-nowrap">{name}</span>
  </div>
);

const Row = ({ reverse = false, duration = 40 }: { reverse?: boolean; duration?: number }) => {
  const items = [...countries, ...countries];
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((c, i) => <Flag key={`${c.code}-${i}`} {...c} />)}
      </div>
    </div>
  );
};

const CountriesStrip = () => {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-heading font-bold text-foreground text-xl md:text-2xl mb-6"
      >
        Les pays dans lesquels nous intervenons
      </motion.h3>
      <Row duration={45} />
      <Row reverse duration={55} />
    </div>
  );
};

export default CountriesStrip;
