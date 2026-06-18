import { Mail, MapPin, Linkedin, Youtube, Facebook } from "lucide-react";
import { CONTACT_EMAIL, OFFICES, SOCIAL_LINKS } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#fondateur", label: "Le Fondateur" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handle = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <span className="inline-flex bg-white rounded-md px-2 py-1 mb-4">
              <img src={logo} alt="FIMD GROUP" className="h-9 w-auto" />
            </span>
            <p className="text-sm opacity-70 leading-relaxed">
              Cabinet d'excellence opérationnelle. Nous transformons la performance industrielle en résultats durables — Afrique, Portugal, Irlande.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => handle(e, l.href)} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Programmes</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li>Diagnostic Industriel</li>
              <li>Réduction des Coûts</li>
              <li>Productivité TRS / OEE</li>
              <li>Élimination des Pertes</li>
              <li>Transfert de Compétences</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail size={16} /> <span>{CONTACT_EMAIL}</span>
              </li>
              {OFFICES.map((o) => (
                <li key={o.city} className="flex items-start gap-2 text-sm opacity-70">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{o.city}{o.country ? `, ${o.country}` : ""}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} FIMD GROUP. Tous droits réservés.</p>
          <p className="text-xs opacity-50">Sénégal · Côte d'Ivoire · Ghana · Cameroun · Nigeria · RD Congo · Maroc · Portugal · Irlande</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
