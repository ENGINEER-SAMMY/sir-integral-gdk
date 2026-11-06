import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Sir Integral of FUTO | Minister GDK", "Who is Sir Integral? Sir Integral of FUTO, also known as Minister GDK, is a Mathematics undergraduate, tutor, campus media voice, Rotaract member and musician.", "/about/"),
  component: PageAbout,
});

function PageAbout() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
