import { createFileRoute } from "@tanstack/react-router";
import { Hero, Services } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Sir Integral | Minister GDK | Official Website",
      "Official website of Sir Integral of FUTO, also known as Minister GDK: mathematics tutoring, campus media, writing, leadership and music. Book a service today.",
      "/",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
