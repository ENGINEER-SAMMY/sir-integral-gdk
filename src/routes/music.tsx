import { createFileRoute } from "@tanstack/react-router";
import { MusicSection } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/music")({
  head: () => pageHead("Music & Entertainment | Minister GDK", "Music by Minister GDK (Sir Integral): GDK Music, acting, MC bookings, live performances and brand collaborations.", "/music/"),
  component: PageMusicSection,
});

function PageMusicSection() {
  return (
    <div className="pt-16">
      <MusicSection />
    </div>
  );
}
