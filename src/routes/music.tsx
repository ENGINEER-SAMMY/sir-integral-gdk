import { createFileRoute } from "@tanstack/react-router";
import { MusicSection } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/music")({
  head: () => pageHead("Music & Entertainment", "Music, acting, MC bookings, live performances and brand collaborations."),
  component: PageMusicSection,
});

function PageMusicSection() {
  return (
    <div className="pt-16">
      <MusicSection />
    </div>
  );
}
