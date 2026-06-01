import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Liste des pays africains avec un path SVG simplifié (projection equirectangulaire approximative)
// Les paths sont des silhouettes simplifiées — suffisantes pour une carte indicative.
type Country = { code: string; name: string; covered: boolean; d: string };

// Carte simplifiée de l'Afrique — pays couverts mis en avant.
const countries: Country[] = [
  // ----- Pays couverts (vert) -----
  { code: "SN", name: "Sénégal", covered: true, d: "M118,168 L148,162 L162,174 L156,192 L132,196 L114,188 Z" },
  { code: "GM", name: "Gambie", covered: true, d: "M126,184 L150,182 L150,190 L126,192 Z" },
  { code: "GN", name: "Guinée", covered: true, d: "M140,196 L176,194 L188,212 L172,222 L144,218 L132,206 Z" },
  { code: "ML", name: "Mali", covered: true, d: "M150,138 L240,128 L256,168 L226,200 L188,196 L162,180 L152,160 Z" },
  { code: "BF", name: "Burkina Faso", covered: true, d: "M230,198 L278,196 L286,220 L254,232 L226,224 Z" },
  { code: "NG", name: "Nigeria", covered: true, d: "M298,224 L362,222 L378,248 L368,278 L322,286 L294,268 L290,242 Z" },
  { code: "CM", name: "Cameroun", covered: true, d: "M372,250 L408,244 L420,278 L408,316 L386,320 L370,294 L368,272 Z" },

  // ----- Autres pays (vert clair) -----
  { code: "MR", name: "Mauritanie", covered: false, d: "M118,100 L240,98 L246,138 L150,140 L120,128 Z" },
  { code: "MA", name: "Maroc", covered: false, d: "M150,52 L240,46 L256,82 L208,96 L160,92 L142,72 Z" },
  { code: "DZ", name: "Algérie", covered: false, d: "M212,52 L320,50 L340,116 L262,130 L218,118 L208,80 Z" },
  { code: "TN", name: "Tunisie", covered: false, d: "M312,46 L340,44 L344,84 L322,88 L308,68 Z" },
  { code: "LY", name: "Libye", covered: false, d: "M340,68 L450,66 L466,132 L348,138 L328,108 Z" },
  { code: "EG", name: "Égypte", covered: false, d: "M462,72 L548,72 L562,138 L470,142 L452,108 Z" },
  { code: "NE", name: "Niger", covered: false, d: "M256,138 L370,134 L386,200 L296,210 L260,182 Z" },
  { code: "TD", name: "Tchad", covered: false, d: "M376,138 L460,134 L470,210 L394,224 L376,192 Z" },
  { code: "SD", name: "Soudan", covered: false, d: "M464,140 L562,140 L578,224 L478,232 L466,196 Z" },
  { code: "SS", name: "Soudan du Sud", covered: false, d: "M488,238 L562,236 L574,278 L498,280 Z" },
  { code: "ET", name: "Éthiopie", covered: false, d: "M566,200 L640,210 L652,278 L578,286 L562,250 Z" },
  { code: "SO", name: "Somalie", covered: false, d: "M642,222 L700,238 L710,310 L658,300 L644,266 Z" },
  { code: "KE", name: "Kenya", covered: false, d: "M566,290 L646,288 L656,344 L582,348 Z" },
  { code: "UG", name: "Ouganda", covered: false, d: "M540,288 L572,290 L578,318 L548,322 Z" },
  { code: "TZ", name: "Tanzanie", covered: false, d: "M520,330 L612,330 L624,388 L530,392 Z" },
  { code: "CF", name: "Centrafrique", covered: false, d: "M414,224 L492,222 L502,276 L420,282 Z" },
  { code: "CD", name: "RD Congo", covered: false, d: "M410,290 L520,288 L536,386 L424,394 L406,346 Z" },
  { code: "CG", name: "Congo", covered: false, d: "M398,300 L418,300 L422,372 L398,374 Z" },
  { code: "GA", name: "Gabon", covered: false, d: "M376,310 L402,308 L406,358 L378,360 Z" },
  { code: "GQ", name: "Guinée éq.", covered: false, d: "M370,300 L390,300 L390,318 L370,318 Z" },
  { code: "AO", name: "Angola", covered: false, d: "M400,390 L508,388 L522,468 L408,470 Z" },
  { code: "ZM", name: "Zambie", covered: false, d: "M488,398 L580,398 L590,454 L500,456 Z" },
  { code: "ZW", name: "Zimbabwe", covered: false, d: "M508,458 L580,458 L588,500 L516,502 Z" },
  { code: "MZ", name: "Mozambique", covered: false, d: "M584,400 L632,400 L646,508 L596,512 Z" },
  { code: "MW", name: "Malawi", covered: false, d: "M580,400 L598,402 L606,456 L584,458 Z" },
  { code: "BW", name: "Botswana", covered: false, d: "M488,468 L572,468 L580,512 L496,514 Z" },
  { code: "NA", name: "Namibie", covered: false, d: "M410,470 L500,472 L508,544 L416,544 Z" },
  { code: "ZA", name: "Afrique du Sud", covered: false, d: "M428,540 L590,540 L600,594 L440,602 Z" },
  { code: "LS", name: "Lesotho", covered: false, d: "M548,560 L580,562 L580,580 L550,580 Z" },
  { code: "SZ", name: "Eswatini", covered: false, d: "M590,548 L606,550 L606,566 L592,566 Z" },
  { code: "MG", name: "Madagascar", covered: false, d: "M660,420 L692,440 L700,520 L672,530 L660,470 Z" },
  { code: "BJ", name: "Bénin", covered: false, d: "M286,224 L300,226 L306,278 L290,280 Z" },
  { code: "TG", name: "Togo", covered: false, d: "M274,228 L286,228 L290,278 L276,280 Z" },
  { code: "GH", name: "Ghana", covered: false, d: "M240,234 L274,232 L280,284 L252,290 L238,266 Z" },
  { code: "CI", name: "Côte d'Ivoire", covered: false, d: "M192,232 L240,230 L246,286 L208,294 L188,272 Z" },
  { code: "LR", name: "Libéria", covered: false, d: "M168,250 L196,250 L200,282 L172,284 Z" },
  { code: "SL", name: "Sierra Leone", covered: false, d: "M150,236 L172,236 L176,266 L154,268 Z" },
  { code: "GW", name: "Guinée-Bissau", covered: false, d: "M126,200 L148,198 L150,218 L128,220 Z" },
  { code: "ER", name: "Érythrée", covered: false, d: "M568,170 L612,170 L614,200 L572,200 Z" },
  { code: "DJ", name: "Djibouti", covered: false, d: "M616,202 L640,204 L640,218 L618,218 Z" },
  { code: "RW", name: "Rwanda", covered: false, d: "M516,316 L538,316 L540,328 L518,330 Z" },
  { code: "BI", name: "Burundi", covered: false, d: "M518,332 L540,332 L542,346 L520,346 Z" },
  { code: "EH", name: "Sahara occ.", covered: false, d: "M118,98 L160,96 L164,138 L120,140 Z" },
];

const ZonesIntervention = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Présence régionale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            7 pays en Afrique de l'Ouest et Centrale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une expertise terrain et une connaissance approfondie des marchés industriels africains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <TooltipProvider delayDuration={100}>
            <svg
              viewBox="80 30 650 590"
              className="w-full h-auto"
              role="img"
              aria-label="Carte de l'Afrique mettant en avant les 7 pays couverts par FIMD EI"
            >
              {countries.map((c) => (
                <Tooltip key={c.code}>
                  <TooltipTrigger asChild>
                    <path
                      d={c.d}
                      fill={c.covered ? "#1A6B3C" : "#E6F2EB"}
                      stroke="#FFFFFF"
                      strokeWidth={1.2}
                      className={`transition-all duration-300 cursor-pointer ${
                        c.covered ? "hover:opacity-80" : "hover:fill-[#C8E6D2]"
                      }`}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <span className="font-medium">
                      {c.name}
                      {c.covered && (
                        <span className="ml-2 text-primary text-xs">• Couvert</span>
                      )}
                    </span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </svg>
          </TooltipProvider>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary" />
              Pays couverts
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#E6F2EB] border border-border" />
              Autres pays
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZonesIntervention;
