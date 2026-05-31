import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import imgDocker from "@/assets/project-docker.jpg";
import imgDjango from "@/assets/project-django.jpg";
import imgAi from "@/assets/project-ai.jpg";
import imgAgenda from "@/assets/project-agenda.jpg";
import imgTickets from "@/assets/project-tickets.jpg";
import imgLinux from "@/assets/project-linux.jpg";
import imgUpscale from "@/assets/project-upscale.jpg";
import imgGithub from "@/assets/project-github.jpg";

const projects = [
  {
    img: imgDocker,
    title: "Bancos de Dados Docker",
    desc: "Dockerfile e Docker Compose configuráveis para subir containers de vários bancos de dados diferentes.",
    tags: ["Docker", "PostgreSQL", "MySQL", "MongoDB"],
    link: "https://github.com/LeonardoGomes99/docker-databases",
  },
  {
    img: imgDjango,
    title: "Django API · PostgreSQL & Docker",
    desc: "API RESTful desenvolvida com Django, conectada a PostgreSQL e empacotada em container Docker pronto para deploy.",
    tags: ["Django", "PostgreSQL", "Docker", "REST"],
    link: "https://github.com/LeonardoGomes99/django-api-exemplo",
  },
  {
    img: imgAi,
    title: "Algoritmos IA",
    desc: "Projeto acadêmico com algoritmos de inteligência artificial em JavaScript para um jogo de tabuleiro.",
    tags: ["JavaScript", "IA", "Algoritmos"],
    link: "https://github.com/LeonardoGomes99/Game.Busca",
  },
  {
    img: imgAgenda,
    title: "Sistema de Agenda · Laravel",
    desc: "Agenda completa com autenticação, gestão de eventos e ambiente Docker rodando MySQL.",
    tags: ["Laravel", "PHP", "MySQL", "Docker"],
    link: "https://github.com/LeonardoGomes99/Agenda-VEX",
  },
  {
    img: imgTickets,
    title: "API Chamados · React + Spring Boot + S3",
    desc: "Gerenciamento de chamados com Spring Boot no backend, React no frontend e anexos no Amazon S3.",
    tags: ["React", "Spring Boot", "AWS S3", "Java"],
    link: "https://github.com/LeonardoGomes99/springboot-sistema-chamados-s3",
  },
  {
    img: imgLinux,
    title: "Scripts de Configuração para Linux",
    desc: "Scripts focados em Arch Linux para drivers de vídeo, otimização e configuração de KDE e GNOME.",
    tags: ["Bash", "Arch Linux", "KDE", "GNOME"],
    link: "https://github.com/LeonardoGomes99/archlinux-for-gaming",
  },
  {
    img: imgUpscale,
    title: "Leitor & Upscale de Imagens PNG",
    desc: "Aplicação Python para leitura e aprimoramento de imagens, com foco em melhoria de resolução e qualidade visual.",
    tags: ["Python", "AI", "Image Processing"],
    link: "https://github.com/LeonardoGomes99/archlinux-for-gaming",
  },
  {
    img: imgGithub,
    title: "Veja mais no GitHub",
    desc: "Repositórios públicos com experimentos, libs e projetos open-source.",
    tags: ["Open Source"],
    link: "https://github.com/LeonardoGomes99?tab=repositories",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-primary-glow text-sm uppercase tracking-[0.25em] mb-4">Trabalhos selecionados</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Projetos</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Uma seleção de projetos pessoais e profissionais — de APIs em produção
            a experimentos com IA.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary-glow hover:shadow-[var(--shadow-glow)] hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/15 text-primary-glow border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-foreground transition-colors group/btn"
                  >
                    Ver mais
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}