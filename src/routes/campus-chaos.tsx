import { createFileRoute } from "@tanstack/react-router";
import { CampusChaos } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/campus-chaos")({
  head: () => pageHead("Campus Chaos FUTO WhatsApp Channel | Sir Integral", "Campus Chaos by Sir Integral: a WhatsApp channel sharing FUTO campus updates, tutorial announcements and useful student information.", "/campus-chaos/"),
  component: PageCampusChaos,
});

function PageCampusChaos() {
  return (
    <div className="pt-16">
      <CampusChaos />
    </div>
  );
}
