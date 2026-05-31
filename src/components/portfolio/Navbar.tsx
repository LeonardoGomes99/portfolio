import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#trajetoria", label: "Trajetória Profissional e Acadêmica" },
  { href: "#certificados", label: "Certificações" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          Leonardo<span className="text-primary">.</span>Gomes
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-primary-glow transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-foreground"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-primary mb-1.5" />
          <span className="block w-6 h-0.5 bg-primary mb-1.5" />
          <span className="block w-4 h-0.5 bg-primary" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary-glow"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}