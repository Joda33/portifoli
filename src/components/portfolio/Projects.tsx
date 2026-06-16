import { motion } from "framer-motion";
import { ArrowUpRight, Image } from "lucide-react";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Algumas coisas que construí."
      description="Projetos selecionados que mostram minha forma de pensar: simplicidade, robustez e clareza."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Project image area */}
            {p.image ? (
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`Preview do projeto ${p.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            ) : (
              <div className="relative w-full aspect-video bg-muted/30 flex flex-col items-center justify-center gap-2 border-b border-border/40">
                <Image className="h-8 w-8 text-muted-foreground/40" />
                <span className="text-xs text-muted-foreground/60">Adicione a imagem do projeto em data.ts</span>
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-card/40 px-2 py-1 text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Botão adicionado de forma limpa abaixo das tecnologias */}
              <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-2 text-xs font-medium text-white bg-[#0077B5]/10 group-hover:bg-[#0077B5]/20 px-3 py-2 rounded-xl transition-colors w-fit">
                <svg className="h-3.5 w-3.5 fill-current text-[#0077B5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Ver demonstração no LinkedIn</span>
              </div>

            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
