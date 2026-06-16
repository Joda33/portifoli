import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, User } from "lucide-react";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Disponível para novos projetos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              {profile.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient">
                {profile.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {profile.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90 transition shadow-[0_0_30px_-8px_var(--primary)]"
              >
                Ver Projetos
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex items-center justify-center h-12 w-12 rounded-xl"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex items-center justify-center h-12 w-12 rounded-xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <div className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </div>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Brilho verde suave de fundo */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
              
              {/* Container da foto redondo e com borda sutil */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
                <img 
                  src="/FotoPerfil.png" 
                  alt="Foto de João Carlos Damacena" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder');
                    if (placeholder) placeholder.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback caso a imagem falhe */}
                <div className="placeholder absolute inset-0 hidden flex items-center justify-center">
                  <User className="h-12 w-12 text-primary/60" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}