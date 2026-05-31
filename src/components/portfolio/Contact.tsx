import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <Reveal>
          <p className="text-primary-glow text-sm uppercase tracking-[0.25em] mb-4 text-center">Vamos conversar</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
            Entre em <span className="text-primary-glow">contato</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Aberto a novas oportunidades, colaborações e bate-papos sobre tecnologia.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          <Reveal>
            <a
              href="mailto:leonardo.gomes16477@gmail.com"
              className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary-glow hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-medium text-foreground group-hover:text-primary-glow transition-colors">
                  leonardo.gomes16477@gmail.com
                </p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://wa.me/5512987081018"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary-glow hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                <p className="font-medium text-foreground group-hover:text-primary-glow transition-colors">
                  +55 (12) 987081018
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/leonardo-gomes-63a2b717b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary-glow transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/LeonardoGomes99"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary-glow transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground relative">
        <p>© {new Date().getFullYear()} Leonardo Gomes. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}