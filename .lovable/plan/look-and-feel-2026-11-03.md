- Sir Integral ∫ FUTO — Portfolio Website

A single, long editorial page at `/` with smooth-scrolling sections, built mobile-first.

## Look and feel

- Headings: Playfair Display (with italic teal highlights); body: Manrope.
- Colours as specified: deep indigo/purple for hero, about, tutoring intro and footer; light gray for content sections; teal for buttons, lines and labels; gold only for the Music label.
- Small uppercase letter-spaced section labels, large serif headlines, generous whitespace.
- Subtle fade-and-rise as sections scroll into view, gentle hover lifts on cards and buttons.

## Sections (in order)

1. **Sticky purple header** — "Sir Integral ∫ FUTO" (∫ in teal), hamburger that turns into X, full-screen purple menu with all 9 links, active link in teal, full-width teal "Book a Service" button.
2. **Hero** — label, "Mathematics. Media. *Meaningful* Impact.", intro text, Book a Service + Learn About Me buttons, image 1 with rounded corners.
3. **Services overview** — 4 items (teal line, serif heading, slate text, "Learn more →" to the matching section).
4. **About** — "Hello, I'm Sir Integral.", image 3, the full write-up, "My Interests" boxes, "message me now" WhatsApp link.
5. **Mathematics Tutoring** — indigo intro, then light gray cards (Concept clarity; Tutoring & academic coaching).
6. **INTEGRALGlobals** — editorial heading, description and content blocks.
7. **Campus Chaos** — intro, what it shares (updates, tutorial announcements, info), "Join Channel" button to the given WhatsApp channel.
8. **Writing & Journalism** — intro plus cards for articles, reporting, written work.
9. **Leadership** — image 2, Leadership and Youth Development white cards with teal accents.
10. **Music & Entertainment** — gold label, "On stage and on screen.", 4 cards (YouTube, Acting & MC, Influencing, Performances) with WhatsApp prefilled enquiries to +2348024891975.
11. **Contact / booking** — target of all "Book a Service" buttons: WhatsApp and email options.
12. **Footer** — brand, tagline, availability, contact (mailto + tel), social links, divider and © 2026.

## Assumptions (tell me if wrong)

- Image order: image 1 = first uploaded (WA0003), image 2 = WA0005, image 3 = WA0002.
- I don't have links for YouTube (GDK Music Official), Instagram, LinkedIn or Facebook — I'll use search/profile placeholders you can replace. (Do Not provide any links. I'll do so later, just make sure they are clickable)
- No details were given for INTEGRALGlobals — I'll write short placeholder copy describing it as a brand/initiative for you to refine.

## Technical details

- Rewrite `src/routes/index.tsx` with section components in `src/components/site/`; fonts via `<link>` in `__root.tsx`; colour tokens in `src/styles.css`.
- Photos uploaded as CDN assets; IntersectionObserver for reveal animations and active nav highlighting; `scroll-behavior: smooth` with header offset.
- Proper page title/description metadata.