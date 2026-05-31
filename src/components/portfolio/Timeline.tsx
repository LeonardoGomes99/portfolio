import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Item = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  description: string;
  tags?: string[];
};

const experience: Item[] = [
  {
    title: "Desenvolvedor Full Stack / Full Cycle (Senior/Tech Lead)",
    org: "Empresa atual",
    period: "10/2024 — Atual",
    current: true,
    description:
      "Liderança técnica e desenvolvimento full cycle de produtos com React, Django, Spring Boot e PostgreSQL, em ambiente containerizado com Docker.",
    tags: ["React JS", "Django", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "Desenvolvedor Full Stack / Full Cycle (Pleno)",
    org: "Empresa anterior",
    period: "11/2023 — 10/2024",
    description:
      "Atuação ponta-a-ponta em sistemas web, APIs e integrações, com ênfase em performance e qualidade.",
    tags: ["React JS", "Django", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "Desenvolvedor Full Stack / Full Cycle (Junior)",
    org: "Empresa anterior",
    period: "07/2022 — 11/2023",
    description:
      "Desenvolvimento de soluções completas, desde o frontend até o backend, com foco em qualidade e escalabilidade.",
    tags: ["React JS", "Django", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "Software Engineer (Junior)",
    org: "Consultoria",
    period: "06/2021 — 05/2022",
    description: "Desenvolvimento e manutenção de sistemas em Laravel + MySQL com Docker.",
    tags: ["Laravel", "MySQL", "Docker"],
  },
  {
    title: "Desenvolvedor Full Stack & Suporte (Junior)",
    org: "Equipe de produto",
    period: "08/2020 — 06/2021",
    description: "Frontend em Vue.js, backend Laravel e operação em MySQL e OracleDB.",
    tags: ["Laravel", "VueJS", "MySQL", "OracleDB", "Docker"],
  },
  {
    title: "Desenvolvedor Full Stack (Estagiário)",
    org: "Início da carreira",
    period: "04/2020 — 07/2020",
    description: "Primeiros projetos profissionais em Flask + PostgreSQL.",
    tags: ["Flask", "PostgreSQL"],
  },
];

const education: Item[] = [
  {
    title: "Especialização em Segurança da Informação",
    org: "SENAC Brasil",
    period: "2022 — 2023",
    description: "Pós-graduação com foco em criptografia, defesa de aplicações e governança de segurança.",
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Fatec Cruzeiro — Prof. Waldomiro May",
    period: "2018 — 2021",
    description: "Graduação com formação superior e base sólida em engenharia de software.",
  },
  {
    title: "Tecnologia da Informação",
    org: "Etec Cruzeiro — Prof. José Sant'Ana de Castro em Cruzeiro",
    period: "2015 — 2017",
    description: "Curso Técnico com fundamentos de redes, programação e banco de dados.",
  },
];

function TimelineList({ items }: { items: Item[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div
        className="absolute left-3 top-2 bottom-2 w-px"
        style={{
          background:
            "linear-gradient(to bottom, var(--primary), var(--primary-glow), transparent)",
        }}
      />
      <ul className="space-y-4">
        {items.map((item, i) => {
          const open = openIdx === i;
          return (
            <li key={i} className="relative">
              {/* Marker */}
              <span className="absolute -left-[1.65rem] top-5 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_18px_hsla(264,90%,68%,0.7)]" />
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className={`w-full text-left p-5 rounded-xl border bg-card transition-all ${
                  open
                    ? "border-primary-glow shadow-[var(--shadow-glow)]"
                    : "border-border hover:border-primary/60"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.org} · {item.period}
                    </p>
                  </div>
                  {item.current && (
                    <span className="shrink-0 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/20 text-primary-glow border border-primary/40">
                      Atual
                    </span>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2.5 py-1 rounded-md bg-primary/15 text-primary-glow border border-primary/30"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="trajetoria" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-primary-glow text-sm uppercase tracking-[0.25em] mb-4">
            Trajetória
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Profissional <span className="text-primary-glow">&</span> Acadêmica
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Uma linha do tempo do meu percurso. Clique nos cards para expandir
            detalhes de cada etapa.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-14">
          <Reveal delay={0.1}>
            <h3 className="text-xl font-semibold mb-8">Experiência Profissional</h3>
            <TimelineList items={experience} />
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-xl font-semibold mb-8">Formação Acadêmica</h3>
            <TimelineList items={education} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}