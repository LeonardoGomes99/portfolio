import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 -top-20 will-change-transform"
        style={{
          transform: `translate3d(0, ${offset * 0.4}px, 0) scale(1.1)`,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 text-center"
        style={{ transform: `translateY(${offset * -0.15}px)` }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary-glow text-xs uppercase tracking-[0.2em] mb-6">
          Portfólio · 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Desenvolvedor{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
            Full Stack
          </span>
          <br />
          <span className="text-foreground/90">/ Cycle</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Profissional altamente qualificado com experiência comprovada no
          desenvolvimento de ERPs, plataformas de BI e sistemas financeiros —
          combinando habilidades técnicas avançadas com conhecimento em
          segurança da informação.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projetos"
            onClick={(e) => handleScrollToSection(e, "#projetos")}
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            onClick={(e) => handleScrollToSection(e, "#contato")}
            className="px-7 py-3 rounded-full border border-border text-foreground hover:border-primary-glow hover:text-primary-glow transition-all"
          >
            Entrar em contato
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}