import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certificates } from "@/components/portfolio/Certificates";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonardo Gomes — Desenvolvedor Full Stack / Cycle" },
      { name: "description", content: "Portfólio de Leonardo Gomes: desenvolvedor Full Stack/Cycle com experiência em ERPs, BI, sistemas financeiros e segurança da informação." },
      { property: "og:title", content: "Leonardo Gomes — Desenvolvedor Full Stack / Cycle" },
      { property: "og:description", content: "Portfólio profissional de Leonardo Gomes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}
