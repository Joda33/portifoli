import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechTransition } from "@/components/portfolio/TechTransition"; // Importando a nova animação
import { About } from "@/components/portfolio/About";
import { Tech } from "@/components/portfolio/Tech";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { profile } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col items-center">
      <Navbar />
      
      <main className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col transition-all duration-300">
        <Hero />
        
        {/* A animação inserida perfeitamente no gap entre os dois blocos */}
        <TechTransition />
        
        {/* O restante do espaçamento (gap-24) foi movido para as seções abaixo para não empurrar a animação */}
        <div className="flex flex-col gap-24 mt-12">
          <About />
          <Tech />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </main>

      <footer className="w-full border-t border-border py-8 text-center text-sm text-muted-foreground mt-20">
        © {new Date().getFullYear()} João Carlos. Construído com foco e disciplina.
      </footer>
    </div>
  );
}