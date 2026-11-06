import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Sections";
import { pageHead } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Book a Service | Contact Sir Integral", "Book tutoring, writing, MC, performances or collaborations with Sir Integral (Minister GDK) via WhatsApp or email.", "/contact/"),
  component: PageContact,
});

function PageContact() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
