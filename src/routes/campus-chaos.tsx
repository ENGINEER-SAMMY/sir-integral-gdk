import { createFileRoute } from "@tanstack/react-router";
import { CampusChaos } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/campus-chaos")({
  head: () => pageHead("Campus Chaos", "Campus Chaos — a WhatsApp channel sharing FUTO campus updates, tutorial announcements and useful information."),
  component: PageCampusChaos,
});

function PageCampusChaos() {
  return (
    <div className="pt-16">
      <CampusChaos />
    </div>
  );
}
