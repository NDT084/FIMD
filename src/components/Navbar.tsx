import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import logo from "@/assets/logo.jpeg";
=======
import logoAsset from "@/assets/logo.jpeg";
>>>>>>> e9a2ef4cca705eeea93f40b5c1c507e74fd90367

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#fondateur", label: "Le Fondateur" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-6">
        <a
          href="#accueil"
          onClick={(e) => handleAnchor(e, "#accueil")}
          className="flex items-center gap-2"
          aria-label="FIMD GROUP — Accueil"
        >
          <span className="inline-flex items-center justify-center bg-white rounded-md px-2 py-1 shadow-sm">
            <img src={logo} alt="FIMD GROUP" className="h-7 md:h-9 w-auto" />
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" variant={scrolled ? "default" : "hero"}>
            <a href="#contact" onClick={(e) => handleAnchor(e, "#contact")}>
              Demander un Diagnostic Gratuit
            </a>
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="text-base font-medium py-2 text-foreground/80 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#contact" onClick={(e) => handleAnchor(e, "#contact")}>
                  Demander un Diagnostic Gratuit
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
