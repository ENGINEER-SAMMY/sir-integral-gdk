import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About", "Meet Sir Integral — Mathematics undergraduate at FUTO, tutor, campus media voice, Rotaract member and musician."),
  component: PageAbout,
});

function PageAbout() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
