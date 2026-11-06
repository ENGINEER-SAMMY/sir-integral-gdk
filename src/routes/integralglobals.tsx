import { createFileRoute } from "@tanstack/react-router";
import { IntegralGlobals } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/integralglobals")({
  head: () => pageHead("INTEGRALGlobals | Sir Integral of FUTO", "INTEGRALGlobals is the umbrella for the educational, media and creative initiatives of Sir Integral.", "/integralglobals/"),
  component: PageIntegralGlobals,
});

function PageIntegralGlobals() {
  return (
    <div className="pt-16">
      <IntegralGlobals />
    </div>
  );
}
