import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Timeline } from "./components/portfolio/Timeline";
import { Certificates } from "./components/portfolio/Certificates";
import { Projects } from "./components/portfolio/Projects";
import { Contact } from "./components/portfolio/Contact";

const queryClient = new QueryClient();

function App() {
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>
);
