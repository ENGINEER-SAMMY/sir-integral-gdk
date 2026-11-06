import { createFileRoute } from "@tanstack/react-router";
import { Tutoring } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/tutoring")({
  head: () => pageHead("Mathematics Tutoring with Sir Integral FUTO", "Virtual mathematics tutoring and academic coaching from Sir Integral of FUTO, building real concept clarity and confidence for students.", "/tutoring/"),
  component: PageTutoring,
});

function PageTutoring() {
  return (
    <div className="pt-16">
      <Tutoring />
    </div>
  );
}
