import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "./data";

export function Certifications() {
  return (
    <Section
      id="certificacoes"
      eyebrow="Certificações"
      title="Formação contínua."
    >
      {/* Grid de Cards */}
      <div className="grid gap-3 sm:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-5 flex flex-col gap-4"
          >
            {/* Alinhamento superior do Ícone e Títulos */}
            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 translate="no" className="font-medium leading-snug text-sm">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>

            {/* Listagem interna dos cursos */}
            {c.items && c.items.length > 0 && (
              <ul className="pt-3 border-t border-border/30 flex flex-col gap-2 flex-1">
                {c.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full shrink-0 opacity-70" />
                    <span translate="no" className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* 🟢 Botão único e contínuo ocupando 100% da largura dos três blocos */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 w-full"
      >
        <a 
          href="https://www.linkedin.com/in/jo%C3%A3o-carlos-damacena-4724232aa/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-hover flex items-center justify-center gap-2.5 text-xs font-medium text-white/90 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/20 px-6 py-3.5 rounded-xl transition-all duration-300 w-full"
        >
          <svg className="h-4 w-4 fill-current text-[#0077B5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>Visualizar todas as credenciais no LinkedIn</span>
        </a>
      </motion.div>
    </Section>
  );
}
