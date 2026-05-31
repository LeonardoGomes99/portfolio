import { Reveal } from "./Reveal";

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "20+", label: "Projetos entregues" },
  { value: "10+", label: "Tecnologias" },
  { value: "100%", label: "Dedicação" },
];

export function About() {
  return (
    <section id="sobre" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <p className="text-primary-glow text-sm uppercase tracking-[0.25em] mb-4">Sobre mim</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Construindo software que{" "}
            <span className="text-primary-glow">resolve problemas reais</span>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sou desenvolvedor Full Stack com foco em arquiteturas escaláveis,
              APIs robustas e interfaces modernas. Atuo em todo o ciclo de
              desenvolvimento — do levantamento de requisitos ao deploy —
              integrando backend, frontend e práticas sólidas de DevOps.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Especializado em segurança da informação, trago boas práticas e
              padrões de qualidade para cada projeto.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/60 transition-all">
                  <div className="text-4xl font-bold text-primary-glow">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}