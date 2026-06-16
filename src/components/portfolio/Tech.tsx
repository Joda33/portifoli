import { motion } from "framer-motion";
import { Section } from "./Section";
import { techCategories } from "./data";

export function Tech() {
  return (
    <Section
      id="tecnologias"
      eyebrow="Stack"
      title="Tecnologias que utilizo no dia a dia."
      description="Um conjunto pragmático de ferramentas para construir back-ends seguros, automatizar processos e extrair valor dos dados."
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,_auto)]">
        {techCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass glass-hover rounded-2xl p-6 flex flex-col ${cat.span ?? ""}`}
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-card/40 px-3 py-1.5 text-sm text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
