import { ArrowRight, BookOpen, Brain, Feather, Globe, GraduationCap, Mail, Megaphone, Mic, Music, Newspaper, PenLine, Phone, Radio, Sparkles, Users, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import heroSrc from "@/assets/hero-portrait.jpg";
import aboutSrc from "@/assets/about-portrait.jpg";
import leaderSrc from "@/assets/leadership.jpg";
import acting1Src from "@/assets/acting-1.jpg";
import acting2Src from "@/assets/acting-2.jpg";
import acting3Src from "@/assets/acting-3.jpg";
import { Brand } from "./Header";
import { Btn, Container, EMAIL, Label, PHONE, Reveal, wa } from "./ui";

const CHANNEL = "https://whatsapp.com/channel/0029VbBhLsGDJ6H9Y4lQKJ1H";
const YOUTUBE = "https://www.youtube.com/@GDK_MUSIC_OFFICIAL";
const H2 = "font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl";

function Card({ icon, title, children, action }: { icon?: ReactNode; title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
      {icon && <div className="mb-6 grid h-11 w-11 place-items-center rounded-full bg-accent text-teal">{icon}</div>}
      <span className="mb-5 block h-0.5 w-10 bg-teal" />
      <h3 className="mb-3 text-2xl text-indigo">{title}</h3>
      <p className="flex-1 leading-relaxed text-muted-foreground">{children}</p>
      {action && <div className="mt-7">{action}</div>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-indigo pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <Reveal>
          <Label>Sir Integral of FUTO</Label>
          <h1 className="text-[2.9rem] leading-[1] text-on-dark sm:text-7xl lg:text-[7.5rem]">
            Mathematics.<br />Media.<br />
            <em className="text-teal">Meaningful</em><br />Impact.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-dark-muted">
            Mathematics undergraduate at the Federal University of Technology, Owerri — mathematics tutor, writer, journalist, musician and creative professional.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Btn to="/contact/">Book a Service</Btn>
            <Btn to="/about/" variant="outline">Learn About Me</Btn>
          </div>
        </Reveal>
        <Reveal delay={150} className="mt-16">
          <img src={heroSrc} alt="Sir Integral of FUTO" className="aspect-[4/5] w-full rounded-3xl object-cover object-top sm:aspect-[16/10]" />
        </Reveal>
      </Container>
    </section>
  );
}

export function Services() {
  const items = [
    ["Mathematics & Tutoring", "Academic mathematics instruction and educational support.", "/tutoring/"],
    ["Journalism & Writing", "Articles, reporting and written work.", "/writing/"],
    ["Leadership & Community", "Initiatives, service and youth development.", "/leadership/"],
    ["Music & Entertainment", "Music, YouTube, acting and creative activities.", "/music/"],
  ];
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label>What I do</Label>
          <h2 className={`${H2} max-w-3xl text-indigo`}>A practice built across <em className="text-teal">many</em> disciplines.</h2>
        </Reveal>
        <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20">
          {items.map(([t, d, h], i) => (
            <Reveal key={t} delay={i * 80}>
              <span className="mb-6 block h-0.5 w-12 bg-teal" />
              <h3 className="mb-3 text-3xl text-indigo">{t}</h3>
              <p className="mb-5 text-lg text-muted-foreground">{d}</p>
              <Link to={h as "/tutoring/"} className="group inline-flex items-center gap-2 font-semibold text-indigo underline underline-offset-4 decoration-teal">
                Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function About() {
  const interests = ["Mathematics Tutor", "Mathematics Undergraduate at FUTO", "Campus Media & Student Information", "Student Journalist", "Rotaract Member"];
  const paras = [
    "I am Sir Integral of FUTO, also known as Minister GDK. I am a Mathematics undergraduate at the Federal University of Technology, Owerri (FUTO), with a strong interest in teaching, student development, campus media, and community engagement.",
    "As a Mathematics tutor, I help fellow students understand mathematical concepts and approach their studies with greater confidence. Through my mathematics tutorial community on WhatsApp, I create a space where students can learn, ask questions, and support one another academically.",
    "I also run Campus Chaos, a WhatsApp channel focused primarily on FUTO. The channel shares campus updates, useful information, tutorial announcements, and other developments relevant to students.",
    "Beyond academics and campus media, I am involved in Rotaract, campus journalism, and student advocacy. I also play the guitar and participate in band performances, which allow me to express my creative side.",
    "I enjoy connecting with people, sharing useful information, teaching, and contributing to my campus community.",
    "I am always open to meaningful connections, learning opportunities, collaborations, and conversations around mathematics education, student engagement, media, leadership, and creativity.",
  ];
  return (
    <section id="about" className="bg-indigo py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label>About</Label>
          <h2 className="text-5xl leading-[1.05] text-on-dark sm:text-6xl lg:text-7xl">Hello, I'm <em className="text-teal">Sir Integral</em> a.k.a <em className="text-teal">Minister GDK</em></h2>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <Reveal>
            <img src={aboutSrc} alt="Sir Integral of FUTO (Minister GDK) portrait" className="aspect-[4/5] w-full rounded-3xl object-cover lg:sticky lg:top-24" />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed text-on-dark-muted">
              {paras.map((p, i) => (
                <p key={i} className={i === 0 ? "font-serif text-2xl leading-snug text-on-dark" : ""}>{p}</p>
              ))}
            </div>
            <h3 className="mt-14 mb-6 text-3xl text-on-dark">My Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((t) => (
                <span key={t} className="rounded-full border border-on-dark/20 px-5 py-2.5 text-sm text-on-dark transition-colors hover:border-teal hover:text-teal">{t}</span>
              ))}
            </div>
            <a href={wa("Hello Sir Integral, I'd love to connect with you.")} target="_blank" rel="noopener noreferrer" className="group mt-12 inline-flex items-center gap-2 font-serif text-2xl italic text-teal underline underline-offset-8">
              message me now <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Tutoring() {
  return (
    <section id="tutoring">
      <div className="bg-indigo py-24 sm:py-32">
        <Container>
          <Reveal>
            <Label>Mathematics Tutoring</Label>
            <h2 className={`${H2} max-w-3xl text-on-dark`}>Making mathematics <em className="text-teal">make sense.</em></h2>
            <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-on-dark-muted">
              "I help students understand mathematical concepts — not just memorise steps, but see why they work."
            </p>
          </Reveal>
        </Container>
      </div>
      <div className="bg-secondary py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card icon={<Brain size={20} />} title="Concept clarity" action={<Btn href={wa("Hello Sir Integral, I'm interested in mathematics tutoring for concept clarity.")} external>Enquire on WhatsApp</Btn>}>
              Break down difficult topics into clear, intuitive ideas so you understand the reasoning behind every step and build lasting confidence.
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card icon={<GraduationCap size={20} />} title="Mathematics tutoring & academic coaching" action={<Btn href={wa("Hello Sir Integral, I'd like to book mathematics tutoring / academic coaching.")} external>Book a Session</Btn>}>
              Structured, virtual one-on-one and group sessions, exam preparation and study guidance — plus access to a supportive WhatsApp tutorial community.
            </Card>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

export function IntegralGlobals() {
  const pillars = [
    [<Globe size={20} />, "Vision", "A growing brand built around learning, information and creativity — connecting students and young people beyond campus."],
    [<BookOpen size={20} />, "Education", "Resources, tutorials and initiatives that make knowledge accessible and approachable."],
    [<Sparkles size={20} />, "Creativity", "Media, content and collaborations that celebrate ideas and the people behind them."],
  ] as const;
  return (
    <section id="integralglobals" className="bg-background py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Label>The Brand</Label>
            <h2 className={`${H2} text-indigo`}>INTEGRAL<em className="text-royal">Globals</em></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-charcoal">
              INTEGRALGlobals is the umbrella under which Sir Integral's educational, media and creative initiatives come together — an evolving platform for impact that starts at FUTO and looks outward.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(([icon, t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <Card icon={icon} title={t}>{d}</Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CampusChaos() {
  const items = [
    [<Radio size={20} />, "Campus updates", "Timely news and developments from around FUTO."],
    [<Megaphone size={20} />, "Tutorial announcements", "Never miss a class, session or study group."],
    [<Newspaper size={20} />, "Useful information", "Practical info every FUTO student should know."],
  ] as const;
  return (
    <section id="campus-chaos" className="bg-royal py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label>WhatsApp Channel</Label>
          <h2 className="font-serif text-6xl leading-none text-on-dark sm:text-8xl">Campus <em className="text-teal">Chaos.</em></h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-dark-muted">
            A WhatsApp channel focused primarily on FUTO — sharing campus updates, useful information, tutorial announcements, and other developments relevant to students.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-on-dark/15 md:grid-cols-3">
          {items.map(([icon, t, d], i) => (
            <Reveal key={t} delay={i * 80} className="bg-royal p-8">
              <div className="mb-5 text-teal">{icon}</div>
              <h3 className="mb-2 text-2xl text-on-dark">{t}</h3>
              <p className="text-on-dark-muted">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Btn href={CHANNEL} external className="w-full sm:w-auto">Join Channel</Btn>
        </Reveal>
      </Container>
    </section>
  );
}

export function Writing() {
  const cards = [
    [<Feather size={20} />, "Articles", "Opinion pieces and features on education, student life and the ideas shaping young people."],
    [<Newspaper size={20} />, "Reporting", "Campus journalism — covering events, issues and stories that matter to the FUTO community."],
    [<PenLine size={20} />, "Written work", "Essays, creative writing and commissioned pieces crafted with clarity and care."],
  ] as const;
  return (
    <section id="writing" className="bg-secondary py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label>Journalism & Writing</Label>
          <h2 className={`${H2} max-w-3xl text-indigo`}>Words that <em className="text-teal">inform</em> and inspire.</h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">As a student journalist and advocate, I write to inform, to question and to give students a voice.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map(([icon, t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <Card icon={icon} title={t} action={<a href={wa(`Hello Sir Integral, I'd like to enquire about ${t.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo underline decoration-teal underline-offset-4">Enquire →</a>}>{d}</Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img src={leaderSrc} alt="Sir Integral in leadership" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <Label>Leadership & Community</Label>
              <h2 className={`${H2} text-indigo`}>Leading by <em className="text-teal">serving.</em></h2>
            </Reveal>
            <div className="mt-10 space-y-6">
              <Reveal><Card icon={<Users size={20} />} title="Leadership">"Committed to growing as a leader and inspiring others."</Card></Reveal>
              <Reveal delay={100}><Card icon={<Sparkles size={20} />} title="Youth Development">"Passionate about helping young people reach their potential."</Card></Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MusicSection() {
  const cards = [
    [<Youtube size={20} />, "Music", "Original music shared on the GDK Music Official YouTube channel.", "Watch on YouTube", YOUTUBE],
    [<Megaphone size={20} />, "Social Influencing & Collaborations", "Brand promotion and creative campaigns.", "Enquire on WhatsApp", wa("Hello Sir Integral, I'd like to discuss a brand collaboration.")],
    [<Music size={20} />, "Music Performances", "Live guitar and band performances for events, shows and celebrations.", "Book a Performance", wa("Hello Sir Integral, I'd like to book a music performance.")],
  ] as const;
  const actingPhotos = [
    [acting1Src, "Integral Act House performing a stage drama in traditional costume"],
    [acting2Src, "Sir Integral acting on stage with Integral Act House"],
    [acting3Src, "Integral Act House stage performance"],
  ] as const;
  return (
    <section id="music" className="bg-indigo py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label tone="gold">Music & Entertainment</Label>
          <h2 className={`${H2} text-on-dark`}>On stage and <em className="text-teal">on screen.</em></h2>
          <p className="mt-6 max-w-xl text-lg text-on-dark-muted">Music, acting and professional Master of Ceremonies services.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {cards.map(([icon, t, d, cta, href], i) => (
            <Reveal key={t} delay={i * 80}>
              <Card icon={icon} title={t} action={<Btn href={href} external>{cta}</Btn>}>{d}</Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <Container>
        <Reveal>
          <Label>Book a Service</Label>
          <h2 className={`${H2} max-w-3xl text-indigo`}>Let's create something <em className="text-teal">meaningful.</em></h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Tutoring, writing, MC bookings, performances or collaborations — reach out and I'll respond promptly. Virtual · Monday to Saturday.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <a href={wa("Hello Sir Integral, I'd like to book a service.")} target="_blank" rel="noopener noreferrer" className="lift flex items-center gap-5 rounded-2xl border border-border bg-card p-7">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal text-indigo"><Phone size={20} /></div>
              <div className="min-w-0"><p className="label-caps text-muted-foreground">WhatsApp</p><p className="truncate font-serif text-2xl text-indigo">+{PHONE}</p></div>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Service Enquiry")}`} className="lift flex items-center gap-5 rounded-2xl border border-border bg-card p-7">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal text-indigo"><Mail size={20} /></div>
              <div className="min-w-0"><p className="label-caps text-muted-foreground">Email</p><p className="truncate font-serif text-xl text-indigo sm:text-2xl">{EMAIL}</p></div>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  const socials: [string, string, boolean][] = [
    ["Instagram", "https://www.instagram.com/sir_integral_of_futo?xtok=MWhhMDNscGZ5azZhNg==", true],
    ["TikTok", "https://tiktok.com/@sir_integral_of_futo", true],
    ["YouTube", YOUTUBE, true],
    ["WhatsApp Channel", CHANNEL, true],
    ["LinkedIn", "https://www.linkedin.com/in/sir-integral-of-futo-959553445?utm_source=share_via&utm_content=profile&utm_medium=member_android", true],
    ["Facebook", "https://www.facebook.com/godwindaniel632", true],
  ];
  return (
    <footer className="bg-indigo pt-20 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="label-caps mb-5 text-teal">Sir Integral of FUTO</p>
            <p className="text-on-dark-muted">Mathematics. Media. <em className="font-serif text-teal">Meaningful</em> Impact.</p>
            <p className="mt-2 text-on-dark-muted">Virtual · Monday to Saturday</p>
          </div>
          <div>
            <p className="label-caps mb-5 text-teal">Contact</p>
            <a href={`mailto:${EMAIL}`} className="block break-all text-on-dark hover:text-teal">{EMAIL}</a>
            <a href={`tel:+${PHONE}`} className="mt-2 block text-on-dark hover:text-teal">+{PHONE}</a>
          </div>
          <div>
            <p className="label-caps mb-5 text-teal">Follow</p>
            <ul className="space-y-2">
              {socials.map(([n, h, ext]) => (
                <li key={n}><a href={h} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-on-dark transition-colors hover:text-teal">{n}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-on-dark/15 pt-8 text-sm text-on-dark-muted">© 2026 Sir Integral of FUTO</div>
      </Container>
    </footer>
  );
}
