import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 — Route inexistante :", location.pathname);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center bg-hero">
      <div className="container-narrow px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading font-bold text-hero-foreground text-[8rem] md:text-[12rem] leading-none tracking-tight">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-heading text-hero-foreground mt-4 mb-4">Cette page n'existe pas</p>
          <p className="text-hero-foreground/70 max-w-xl mx-auto mb-10">
            Retournez à l'accueil pour découvrir FIMD GROUP et nos programmes.
          </p>
          <Button asChild size="lg" variant="hero" className="px-8">
            <Link to="/"><ArrowLeft size={18} /> Retour à l'accueil</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
