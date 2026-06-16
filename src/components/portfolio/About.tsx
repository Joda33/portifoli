import { motion } from "framer-motion";
import { Trophy, Target, Flame, Users, Brain, Image } from "lucide-react";
import { Section } from "./Section";
import { profile } from "./data";

const pillars = [
  { icon: Trophy, title: "Disciplina", text: "Rotina de alta performance forjada nos treinos diários." },
  { icon: Target, title: "Foco em resultado", text: "Mentalidade de competição aplicada à entrega de software." },
  { icon: Flame, title: "Resiliência", text: "Capacidade de aprender rápido e seguir mesmo sob pressão." },
  { icon: Users, title: "Trabalho em equipe", text: "Sinergia de quadra aplicada à colaboração em squads e projetos técnicos." },
  { icon: Brain, title: "Evolução contínua", text: "Mindset educacional ao aprendizado constante de novas tecnologias e segurança." },
];

export function About() {
  const hasPhoto = profile.photo && profile.photo.trim().length > 0;

  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="De atleta de alto rendimento a desenvolvedor."
      description="Iniciei minha trajetória como atleta de alto rendimento na S.E. Palmeiras, onde aprendi que excelência é construída em cima de disciplina, repetição e clareza de objetivo. Hoje, levo essa mesma mentalidade para a tecnologia — desenvolvendo back-end robusto, estudando segurança da informação e graduando-me em Ciência da Computação."
    >
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* Photo area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 h-full"
        >
          {hasPhoto ? (
            <div className="relative h-full">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/30 blur-xl" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative w-full h-full aspect-[4/5] rounded-2xl object-cover border border-border/50 shadow-xl"
              />
            </div>
          ) : (
            <div className="relative h-full">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/30 blur-xl" />
              <div className="relative w-full aspect-[4/5] h-full rounded-2xl glass flex flex-col items-center justify-center gap-3 border border-border/50 shadow-xl text-muted-foreground">
                <Image className="h-10 w-10 text-primary/60" />
                <span className="text-sm">Adicione sua foto in data.ts</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Pillars */}
        <div className="order-1 md:order-2 flex flex-col h-full gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-1 items-center gap-5" 
            >
              <p.icon className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-base text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}