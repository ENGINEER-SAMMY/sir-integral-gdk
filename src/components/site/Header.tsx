import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["tutoring", "Tutoring"],
  ["integralglobals", "INTEGRALGlobals"],
  ["campus-chaos", "Campus Chaos"],
  ["writing", "Writing"],
  ["leadership", "Leadership"],
  ["music", "Music"],
  ["contact", "Contact"],
] as const;

export function Brand() {
  return (
    <span className="font-serif text-xl text-on-dark">
      Sir Integral <span className="text-teal italic">∫</span> FUTO
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-royal/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
          <a href="#home" onClick={() => setOpen(false)}>
            <Brand />
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={cn("text-sm transition-colors hover:text-teal", active === id ? "text-teal" : "text-on-dark/80")}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center text-on-dark xl:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 flex flex-col bg-royal px-6 pb-8 pt-6 transition-all duration-500 xl:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
          {NAV.map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
              className={cn(
                "font-serif text-3xl py-2 transition-all duration-500 hover:text-teal",
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                active === id ? "text-teal italic" : "text-on-dark",
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 flex min-h-14 w-full items-center justify-center rounded-full bg-teal font-semibold text-indigo"
        >
          Book a Service
        </a>
      </div>
    </>
  );
}
