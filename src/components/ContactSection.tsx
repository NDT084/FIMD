import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT, OFFICES, WHATSAPP_NUMBER } from "@/lib/contact";
import CountriesStrip from "./CountriesStrip";

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // honeypot
    if ((fd.get("_hp") as string)?.length) return;
    const payload = Object.fromEntries(fd.entries());
    if (!payload.name || !payload.company || !payload.email || !payload.country || !payload.message) {
      toast({ title: "Champs requis", description: "Veuillez remplir tous les champs marqués d'un *.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("net");
      toast({ title: "Message envoyé !", description: "Notre équipe vous répond sous 24h." });
      form.reset();
    } catch {
      toast({ title: "Échec de l'envoi", description: "Réessayez ou contactez-nous via WhatsApp.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Réservez un entretien stratégique
          </h2>
          <p className="text-lg text-muted-foreground">Demandez votre diagnostic industriel gratuit.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-7 md:p-10 rounded-3xl bg-card border border-border shadow-md space-y-5"
          >
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Nom *</label>
                <Input name="name" placeholder="Votre nom" required />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Entreprise *</label>
                <Input name="company" placeholder="Nom de l'entreprise" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Fonction</label>
                <Input name="role" placeholder="Votre poste" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Téléphone</label>
                <Input name="phone" type="tel" placeholder="+221 ..." />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Email *</label>
                <Input name="email" type="email" placeholder="vous@entreprise.com" required />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Pays *</label>
                <Input name="country" placeholder="Sénégal, Portugal, ..." required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Message *</label>
              <Textarea name="message" placeholder="Décrivez votre besoin ou votre projet..." rows={5} required />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto px-8">
              {submitting ? "Envoi en cours..." : (<>Envoyer ma demande <Send size={16} /></>)}
            </Button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-muted hover:bg-primary/5 transition-colors"
            >
              <Mail size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>
            {OFFICES.map((o) => (
              <div key={o.city} className="flex items-start gap-4 p-5 rounded-2xl bg-muted">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{o.city}</h4>
                  <p className="text-sm text-muted-foreground">{o.country || "Présence"}</p>
                </div>
              </div>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20FIMD%20GROUP`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-primary/10 border border-primary/30 hover:bg-primary/15 transition-colors"
            >
              <MessageCircle size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Réponse rapide — cliquez pour nous écrire</p>
              </div>
            </a>
          </motion.aside>
        </div>

        <div className="mt-20">
          <CountriesStrip />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
