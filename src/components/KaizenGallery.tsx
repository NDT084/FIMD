import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70", caption: "Gemba Walk — ligne de conditionnement" },
  { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=70", caption: "Chantier Kaizen — réduction des changements de format" },
  { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=70", caption: "Formation Lean Manufacturing" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70", caption: "Management visuel Obeya" },
  { src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=70", caption: "Atelier 5S — zone production" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70", caption: "Revue de performance hebdomadaire" },
];

const KaizenGallery = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="realisations" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Réalisations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Nos chantiers Kaizen en images
          </h2>
          <p className="text-lg text-muted-foreground">
            Une expertise de terrain au plus près des opérateurs et des équipes de production.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted text-left"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-sm font-medium text-hero-foreground">{p.caption}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {active !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
              onClick={() => setActive(null)}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
            <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={photos[active].src} alt={photos[active].caption} className="w-full rounded-xl" />
              <figcaption className="text-center text-white/80 mt-4 text-sm">{photos[active].caption}</figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  );
};

export default KaizenGallery;
