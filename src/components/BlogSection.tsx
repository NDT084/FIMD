import { motion } from "framer-motion";
import { ArrowUpRight, FileText, BookOpen, Download } from "lucide-react";

const articles = [
  {
    title: "Comment réduire les coûts industriels de 10 %",
    date: "Juin 2025",
    excerpt: "Les leviers concrets pour identifier et éliminer les coûts cachés en production.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Les 8 pertes du Lean Manufacturing",
    date: "Mai 2025",
    excerpt: "Cartographier les pertes pour libérer la capacité existante de vos lignes.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "OEE : les erreurs à éviter",
    date: "Avril 2025",
    excerpt: "Pourquoi votre indicateur TRS ne reflète pas toujours la réalité du terrain.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=70",
  },
];

const resources = [
  { icon: BookOpen, type: "Livre Blanc", title: "10 leviers pour réduire les coûts industriels" },
  { icon: FileText, type: "Guide", title: "Comment augmenter son TRS de 10 points" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Blog</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Ressources & Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Méthodes, retours d'expérience et guides pratiques pour vos équipes industrielles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{a.date}</p>
                <h3 className="font-heading font-bold text-foreground mt-2 text-lg leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                  Lire l'article <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {resources.map(({ icon: Icon, type, title }) => (
            <a
              key={title}
              href="#contact"
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={22} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{type}</p>
                <p className="font-heading font-bold text-foreground">{title}</p>
              </div>
              <Download size={18} className="text-foreground/40" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
