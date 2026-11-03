import { createFileRoute } from "@tanstack/react-router";
import { Hero, Services } from "@/components/site/Sections";

const title = "Sir Integral ∫ FUTO — Mathematics, Media & Meaningful Impact";
const description = "Mathematics tutor, writer, journalist, musician and creative professional at the Federal University of Technology, Owerri.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
