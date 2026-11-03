import { createFileRoute } from "@tanstack/react-router";
import { Writing } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/writing")({
  head: () => pageHead("Writing & Journalism", "Articles, campus reporting and written work by student journalist Sir Integral."),
  component: PageWriting,
});

function PageWriting() {
  return (
    <div className="pt-16">
      <Writing />
    </div>
  );
}
