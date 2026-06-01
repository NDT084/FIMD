import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

const CTASection = () => {
  return (
    <section className="section-padding bg-surface-dark">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-dark-foreground mb-6 text-balance">
            Prêt à transformer vos opérations industrielles ?
          </h2>
          <p className="text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto mb-10">
            Contactez-nous pour un diagnostic gratuit de votre site de production. Nos experts vous répondent sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="hero" className="text-base px-8 py-6">
              <Link to="/contact">
                Demander un diagnostic
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline" className="text-base px-8 py-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20FIMD%20EI`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Écrire sur WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
