import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/fimd-ei.png" alt="FIMD EI" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-70 leading-relaxed">
              Cabinet de conseil industriel spécialisé en performance, agroalimentaire et certifications en Afrique de l'Ouest et Centrale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/services", label: "Services" },
                { href: "/expertise-produits", label: "Expertise Produits" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Services</h4>
            <ul className="space-y-3">
              {[
                "Performance Industrielle",
                "Développement Produits",
                "QHSE & Certifications",
                "Projets Industriels",
                "Expertise Judiciaire",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail size={16} />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone size={16} />
                <span>{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} FIMD EI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs opacity-50">Sénégal · Guinée · Mali · Burkina Faso · Gambie · Cameroun · Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
