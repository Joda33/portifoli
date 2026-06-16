import { motion } from "framer-motion";

export function TechTransition() {
  // Gerando pequenos pontos/nós de rede aleatórios
  const dots = Array.from({ length: 12 });

  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden pointer-events-none my-[-32px]">
      {/* Linha principal de dados */}
      <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent flex justify-around">
        {dots.map((_, i) => (
          <motion.div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-primary/40 shadow-[0_0_8px_var(--primary)]"
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Pulso de dados correndo pela linha */}
      <motion.div
        className="absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ left: "-10%" }}
        animate={{ left: "110%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}