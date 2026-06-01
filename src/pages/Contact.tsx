import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_EMAIL, CONTACT_PHONE, FORMSPREE_ENDPOINT, WHATSAPP_NUMBER } from "@/lib/contact";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      company: formData.get("company")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Erreur réseau");
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons sous 24h. Merci pour votre intérêt.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Échec de l'envoi",
        description: "Une erreur est survenue. Réessayez ou contactez-nous via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              Contactez-nous pour un diagnostic gratuit ou une question sur nos services. Notre équipe vous répond sous 24 heures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom complet *</label>
                    <Input name="name" placeholder="Votre nom" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Entreprise</label>
                    <Input name="company" placeholder="Nom de l'entreprise" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                    <Input name="phone" type="tel" placeholder="+221 XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    placeholder="Décrivez votre projet ou votre besoin..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : (
                    <>
                      Envoyer le message
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted">
                  <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Téléphone</h4>
                    <p className="text-sm text-muted-foreground">{CONTACT_PHONE}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted">
                  <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-sm text-muted-foreground">Dakar, Sénégal</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20FIMD%20EI`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Réponse rapide — cliquez pour nous écrire</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
