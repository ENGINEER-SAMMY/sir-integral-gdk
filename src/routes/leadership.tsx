import { createFileRoute } from "@tanstack/react-router";
import { Leadership } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/leadership")({
  head: () => pageHead("Leadership & Community | Sir Integral FUTO", "Leadership, community service, Rotaract and youth development with Sir Integral of FUTO.", "/leadership/"),
  component: PageLeadership,
});

function PageLeadership() {
  return (
    <div className="pt-16">
      <Leadership />
    </div>
  );
}
