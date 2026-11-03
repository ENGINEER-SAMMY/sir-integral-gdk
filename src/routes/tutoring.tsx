import { createFileRoute } from "@tanstack/react-router";
import { Tutoring } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/tutoring")({
  head: () => pageHead("Mathematics Tutoring", "Virtual mathematics tutoring and academic coaching that builds real concept clarity."),
  component: PageTutoring,
});

function PageTutoring() {
  return (
    <div className="pt-16">
      <Tutoring />
    </div>
  );
}
