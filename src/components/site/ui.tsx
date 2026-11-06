import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const PHONE = "2348024891975";
export const EMAIL = "godwindaniel632@gmail.com";
export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Label({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "gold" }) {
  return (
    <p className={cn("label-caps mb-5 flex items-center gap-3", tone === "gold" ? "text-gold" : "text-teal")}>
      <span className={cn("h-px w-8", tone === "gold" ? "bg-gold" : "bg-teal")} />
      {children}
    </p>
  );
}

type BtnProps = {
  href?: string;
  to?: SitePath;
  children: ReactNode;
  variant?: "teal" | "outline" | "outlineDark";
  external?: boolean;
  className?: string;
};
export function Btn({ href, to, children, variant = "teal", external, className }: BtnProps) {
  const styles = {
    teal: "bg-teal text-indigo hover:brightness-110 hover:shadow-[0_10px_30px_-10px_var(--teal)]",
    outline: "border border-on-dark/70 text-on-dark hover:bg-on-dark hover:text-indigo",
    outlineDark: "border border-indigo text-indigo hover:bg-indigo hover:text-on-dark",
  }[variant];
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5",
    styles,
    className,
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cls}>
      {children}
    </a>
  );
}

export type SitePath =
  | "/"
  | "/about/"
  | "/tutoring/"
  | "/integralglobals/"
  | "/campus-chaos/"
  | "/writing/"
  | "/leadership/"
  | "/music/"
  | "/contact/";

export const SITE_URL = "https://sir-integral.com";

export function pageHead(title: string, description: string, path: SitePath) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: path === "/" ? "website" : "profile" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Sir Integral ∫ FUTO" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-10", className)}>{children}</div>;
}
