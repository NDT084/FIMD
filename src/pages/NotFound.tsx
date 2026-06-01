import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — Route inexistante :", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-hero flex-1 flex items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-hero-foreground text-[8rem] md:text-[12rem] leading-none tracking-tight">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-heading text-hero-foreground mt-4 mb-4">
              Cette page n'existe pas
            </p>
            <p className="text-hero-foreground/70 max-w-xl mx-auto mb-10">
              Le lien que vous avez suivi est peut-être obsolète ou la page a été déplacée. Retournez à l'accueil pour découvrir nos services.
            </p>
            <Button asChild size="lg" variant="hero" className="px-8">
              <Link to="/">
                <ArrowLeft size={18} />
                Retour à l'accueil
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
