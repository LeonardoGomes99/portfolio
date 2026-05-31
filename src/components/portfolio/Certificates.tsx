import { Reveal } from "./Reveal";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Django Celery Mastery: Python Asynchronous Task Processing",
    issuer: "Udemy",
    desc: "Curso focado no uso do Celery com Django para processamento assíncrono de tarefas em segundo plano, com envio de e-mails, geração de relatórios e integração com filas como Redis e RabbitMQ.",
    link: "https://www.udemy.com/certificate/UC-f03642bb-0500-4cb1-a61c-dbedeacfb0f2/",
  },
  {
    title: 'Professor do Curso "Construindo APIs Django com Docker Compose e o Django Rest Framework"',
    issuer: "FATEC",
    desc: "Atuei como instrutor neste curso que ensina a construir APIs robustas com Django Rest Framework, utilizando Docker Compose para orquestração de containers e PostgreSQL como banco de dados.",
    link: "https://www.linkedin.com/in/leonardo-gomes-63a2b717b/details/certifications/1707083772080/single-media-viewer/?profileId=ACoAACqUtc4BSCzlBIuFTS5-qIycDScK3iAoMpU",
  },
  {
    title: "Aprenda a Criar Servidores Virtuais com EC2 na Amazon AWS",
    issuer: "Udemy",
    desc: "Curso prático que ensina a configurar, acessar e gerenciar instâncias EC2 na AWS, incluindo criação de servidores, configurações de segurança e deploy de aplicações na nuvem.",
    link: "https://www.udemy.com/certificate/UC-30d69fc7-b57a-4c0b-bde1-55b4311df347/",
  },
  {
    title: "Descomplicando o Docker",
    issuer: "LinuxTips",
    desc: "Curso completo sobre Docker, abordando desde os conceitos básicos de containers até a criação de ambientes isolados para desenvolvimento, testes e produção de aplicações modernas.",
    link: "https://school.linuxtips.io/certificate_v2/634ffe2b3e60c56d9901655f/user/6429e529b9387e6ac308a5e9",
  },
  {
    title: "Criando poderosas API's RESTful com Django Rest Framework",
    issuer: "Udemy",
    desc: "Construção de APIs RESTful robustas e escaláveis com Django Rest Framework, abordando autenticação, controle de permissões, versionamento de endpoints e boas práticas no desenvolvimento backend moderno.",
    link: "https://www.udemy.com/certificate/UC-6f7596d5-2098-47bb-8107-16b05145615a/",
  },
  {
    title: "React Native Criando aplicativos do zero ao avançado",
    issuer: "Udemy",
    desc: "Curso que ensina a criar aplicações mobile nativas para Android e iOS com React Native, abordando navegação, consumo de APIs, persistência de dados e publicação nas lojas.",
    link: "https://www.udemy.com/certificate/UC-70a396ef-36fb-4028-a2b1-16c4e7065afe/",
  },
  {
    title: "React Js do zero ao avançado na prática",
    issuer: "Udemy",
    desc: "Curso prático de React.js, cobrindo desde os fundamentos da biblioteca até técnicas avançadas como gerenciamento de estado com Redux, hooks personalizados e integração com APIs.",
    link: "https://www.udemy.com/certificate/UC-c45a6db5-6ac2-474e-b591-09d53a7d17b0",
  },
];

export function Certificates() {
  return (
    <section id="certificados" className="py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-primary-glow text-sm uppercase tracking-[0.25em] mb-4">Aprendizado contínuo</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Certificados</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver certificado ${c.title}`}
                className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300 flex gap-5 block"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow group-hover:bg-primary/25 transition-colors">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-glow mb-1">
                    {c.issuer}
                  </p>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}