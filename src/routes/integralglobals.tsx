import { createFileRoute } from "@tanstack/react-router";
import { IntegralGlobals } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/integralglobals")({
  head: () => pageHead("INTEGRALGlobals", "INTEGRALGlobals — the umbrella for Sir Integral's educational, media and creative initiatives."),
  component: PageIntegralGlobals,
});

function PageIntegralGlobals() {
  return (
    <div className="pt-16">
      <IntegralGlobals />
    </div>
  );
}
