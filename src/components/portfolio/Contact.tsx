import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Section } from "./Section";
import { profile } from "./data";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mjgdldzk", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok || response.status === 200) {
        setSubmitStatus("success");
        formRef.current?.reset();
        setTimeout(() => setSubmitStatus("idle"), 4000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("success");
      formRef.current?.reset();
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contato" eyebrow="Contato" title="Vamos conversar." description="Aberto a oportunidades em back-end, segurança e dados. Me mande uma mensagem.">
      <div className="grid gap-6 md:grid-cols-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass rounded-2xl p-6 md:col-span-2 flex flex-col gap-5">
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="text-xs text-muted-foreground">Localização</p><p className="text-sm font-medium">{profile.location}</p></div></div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="text-xs text-muted-foreground">Email</p><p className="text-sm font-medium">{profile.email}</p></div></div>
          <div className="flex gap-3 pt-2"><a href={profile.github} target="_blank" rel="noreferrer" className="glass glass-hover inline-flex items-center justify-center h-10 w-10 rounded-lg"><Github className="h-4 w-4" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass glass-hover inline-flex items-center justify-center h-10 w-10 rounded-lg"><Linkedin className="h-4 w-4" /></a></div>
        </motion.div>

        {/* 🟢 Formulário com layout centralizado */}
        <motion.form 
          ref={formRef} 
          onSubmit={onSubmit} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.1 }} 
          className="glass rounded-2xl p-6 md:col-span-3 flex flex-col gap-4 w-full"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome" name="name" type="text" placeholder="Seu nome" />
            <Field label="Email" name="email" type="email" placeholder="voce@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs text-muted-foreground">Mensagem</label>
            <textarea id="message" name="message" required rows={5} placeholder="Escreva sua mensagem..." className="w-full resize-none rounded-lg bg-background/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" />
          </div>

          {/* 🟢 Container de controle para centralização total */}
          <div className="flex flex-col items-center w-full">
            <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed">
              <span>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</span>
              <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
            </button>

            <div className="mt-4 min-h-[1.5rem] w-full flex justify-center">
              <AnimatePresence mode="wait">
                {submitStatus === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-emerald-400 font-medium text-center">
                    Mensagem enviada com sucesso!
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-red-400 font-medium text-center">
                    Ocorreu um erro ao enviar. Tente novamente.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string; }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-xs text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder} className="w-full rounded-lg bg-background/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" />
    </div>
  );
}