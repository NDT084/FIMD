import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/fondateur.jpeg";

const stats = [
  { value: 15, suffix: "%", label: "Réduction des coûts" },
  { value: 25, suffix: " pts", label: "Gain de productivité" },
  { value: 50, suffix: "%", label: "Réduction des rebuts" },
  { value: 40, suffix: "%", label: "Réduction des arrêts" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>Jusqu'à {val}{suffix}</span>;
}

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Usine industrielle moderne — FIMD GROUP"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/85 to-hero/50" />
      </div>

      <div className="relative container-narrow px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Excellence Opérationnelle Industrielle
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-hero-foreground mt-6 mb-5 text-balance"
          >
            FIMD <span className="text-primary">GROUP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-hero-foreground/90 mb-6 max-w-2xl leading-snug font-heading"
          >
            Transformez votre performance industrielle en avantage compétitif durable.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-hero-foreground/70 mb-10 max-w-2xl grid sm:grid-cols-2 gap-x-6 gap-y-2 text-base"
          >
            {[
              "Réduire les coûts",
              "Augmenter la productivité (TRS/OEE)",
              "Éliminer les pertes",
              "Développer les compétences",
              "Pérenniser les résultats",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="hero" className="text-base px-8 py-6" onClick={() => scrollTo("#contact")}>
              Demander un Diagnostic Gratuit
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="hero-outline" className="text-base px-8 py-6" onClick={() => scrollTo("#blog")}>
              <Download size={18} />
              Télécharger notre brochure
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs md:text-sm text-hero-foreground/60 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
