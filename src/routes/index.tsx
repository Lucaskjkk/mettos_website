import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Mic,
  FileText,
  GitBranch,
  ListChecks,
  BarChart3,
  Search,
  ShieldCheck,
  Sparkles,
  Plug,
  Quote,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minuta — In-person meetings that become decisions" },
      {
        name: "description",
        content:
          "Record, transcribe and transform in-person meetings into minutes, flowcharts and action plans with AI.",
      },
      { property: "og:title", content: "Minuta — Meetings that become decisions" },
      {
        property: "og:description",
        content: "AI that automatically transforms meetings into minutes, flowcharts and roadmaps.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Hero />
      <LogosStrip />
      <FeaturesGrid />
      <ProductDemo />
      <SemanticSearch />
      <Workflow />
      <Metrics />
      <Integrations />
      <Testimonials />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28">
        <div className="fade-up max-w-3xl">
          <Badge variant="outline" className="rounded-full px-3 py-1 font-normal text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground mr-2 blink" />
            New · In-person recording with diarization
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight mt-6 text-balance">
            In-person meetings that become <em className="italic font-light">decisions</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            Place your phone on the table. Minuta records, transcribes, and delivers minutes,
            flowcharts, and action plans while you're still leaving the room.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <Button asChild size="lg" className="h-12 px-6 text-base group">
              <Link to="/dashboard">
                Get started free
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-4 text-base">
              <Link to="/precos">
                See pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-xs text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> Privacy compliant
            </span>
            <span>· 10 free meetings / month</span>
            <span>· No credit card required</span>
          </div>
        </div>

        <div className="mt-20 fade-up" style={{ animationDelay: ".15s" }}>
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative rounded-2xl border hairline bg-card overflow-hidden hover-lift shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between px-5 py-3 border-b hairline">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-destructive" />
          <span>Recording · 00:24:18</span>
          <span className="ml-3 font-mono">Room C — Q2 Planning</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono">5 participants</div>
      </div>
      <div className="grid md:grid-cols-[1.2fr_1fr]">
        <div className="p-6 space-y-4 border-r hairline min-h-[320px]">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Live transcription
          </p>
          <div className="space-y-3 text-sm">
            <Line
              who="Lucas"
              text="The ERP integration needs to be ready before the June go-live."
            />
            <Line who="Marina" text="Agreed. I'll map out the endpoints and send by Friday." />
            <Line who="Pedro" text="Risk: we depend on the partner API. Plan B?" />
            <Line who="Lucas" text="Good point. Marina, add a fallback to the scope." />
            <div className="flex items-center gap-2 text-muted-foreground italic">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" />
              Marina is speaking…
            </div>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Detected insights
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-muted-foreground">·</span> Decision: ERP integration by June
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground">·</span> Risk: dependency on partner API
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground">·</span> Recurring topic: <em>go-live</em>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Generated tasks
            </p>
            <div className="space-y-2">
              <Task to="Marina" what="Map ERP endpoints" when="Fri, 2pm" />
              <Task to="Pedro" what="Write contingency plan" when="Next week" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ who, text }: { who: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-xs text-muted-foreground w-16 shrink-0 mt-0.5">{who}</span>
      <span>{text}</span>
    </div>
  );
}
function Task({ to, what, when }: { to: string; what: string; when: string }) {
  return (
    <div className="flex items-center justify-between border hairline rounded-md px-3 py-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-foreground text-background grid place-items-center text-[9px]">
          {to[0]}
        </div>
        <span>{what}</span>
      </div>
      <span className="text-muted-foreground font-mono">{when}</span>
    </div>
  );
}

function LogosStrip() {
  const logos = [
    "Volpe",
    "Northwind",
    "Aether",
    "Helio",
    "Cardinal",
    "Brunello",
    "Atomic",
    "Verbo",
  ];
  return (
    <section className="border-y hairline py-8 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Teams that replaced manual meeting notes with Minuta
      </p>
      <div className="marquee">
        {[...logos, ...logos].map((l, i) => (
          <span
            key={i}
            className="text-2xl font-display tracking-tight text-muted-foreground/80 whitespace-nowrap"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const items = [
    {
      icon: FileText,
      t: "Automatic minutes",
      d: "Structured summary with decisions, owners and deadlines. Ready to send.",
    },
    {
      icon: ListChecks,
      t: "Action plan",
      d: "Tasks extracted with responsible person, deadline and speech context.",
    },
    { icon: GitBranch, t: "Roadmap & SOPs", d: "Flows and procedures derived from discussions." },
    {
      icon: BarChart3,
      t: "Productivity dashboard",
      d: "Time in meetings, decisions made, unproductive sessions.",
    },
    {
      icon: Search,
      t: "Semantic search",
      d: "Ask in natural language about everything that's been discussed.",
    },
    {
      icon: ShieldCheck,
      t: "Compliance & Privacy",
      d: "Encryption at rest, configurable retention, SSO on Business.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Capabilities</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight font-semibold text-balance">
          Everything that comes out of a meeting — without anyone having to type.
        </h2>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border hairline">
        {items.map((i) => (
          <div key={i.t} className="bg-background p-8 hover-lift">
            <i.icon className="h-5 w-5" strokeWidth={1.5} />
            <h3 className="mt-6 font-medium text-lg">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductDemo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            AI that understands context
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold">
            From speech to flowchart <span className="italic font-light">in seconds</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Minuta detects decisions, dependencies and processes. Instead of opening Lucid after the
            meeting, it already generates the BPMN and delivery roadmap.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="font-mono text-muted-foreground">01</span> Automatic detection of
              topics and owners
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-muted-foreground">02</span> Editable flowchart
              (BPMN/Mermaid)
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-muted-foreground">03</span> Syncs with Notion, Jira,
              Trello
            </li>
          </ul>
        </div>
        <FlowDiagram />
      </div>
    </section>
  );
}

function FlowDiagram() {
  return (
    <div className="rounded-2xl border hairline bg-card p-8 hover-lift">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
        workflow.bpmn — generated at 14:32
      </div>
      <svg viewBox="0 0 400 280" className="w-full h-auto">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="40" cy="140" r="14" />
          <rect x="90" y="115" width="90" height="50" rx="8" />
          <path d="M250 90 l30 -30 l30 30 l-30 30 z" />
          <rect x="270" y="190" width="90" height="50" rx="8" />
          <circle cx="380" cy="140" r="14" />
          <path d="M54 140 H90" />
          <path d="M180 140 H250" />
          <path d="M280 120 V190 H310" />
          <path d="M310 120 H366" markerEnd="url(#arr)" />
          <path d="M360 215 C 380 180, 380 160, 380 154" />
        </g>
        <g fill="currentColor" fontSize="9" fontFamily="Inter">
          <text x="115" y="143">
            Gather API
          </text>
          <text x="258" y="98">
            Decision
          </text>
          <text x="290" y="218">
            Plan B
          </text>
        </g>
      </svg>
    </div>
  );
}

function SemanticSearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border hairline bg-card p-10 md:p-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Semantic search</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold max-w-2xl text-balance">
          Ask anything about months of meetings.
        </h2>
        <div className="mt-10 max-w-2xl">
          <div className="border hairline rounded-xl bg-background p-4 flex items-start gap-3">
            <Search className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <p className="text-sm">"Show meetings that discussed ERP integration."</p>
              <div className="mt-4 space-y-2">
                {[
                  { t: "Q2 Planning", d: "May 12 · 47 min · 3 mentions" },
                  { t: "Product sync", d: "Apr 28 · 32 min · 2 mentions" },
                  { t: "Partner kickoff", d: "Apr 14 · 1h 12min · 5 mentions" },
                ].map((r) => (
                  <div
                    key={r.t}
                    className="flex items-center justify-between border-t hairline pt-2 text-xs"
                  >
                    <span>{r.t}</span>
                    <span className="font-mono text-muted-foreground">{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { n: "01", t: "Place on the table", d: "Start recording from the app. Works offline." },
    { n: "02", t: "Run it normally", d: "Diarization identifies each participant automatically." },
    { n: "03", t: "Receive the artifacts", d: "Minutes, flowcharts and tasks arrive in seconds." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="border-t hairline pt-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">How it works</p>
        <div className="mt-10 grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const m = [
    { v: "2.4h", l: "saved per person, per week" },
    { v: "97%", l: "transcription accuracy" },
    { v: "31%", l: "fewer unproductive meetings" },
    { v: "<60s", l: "to generate minutes and flowchart" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-4 gap-8 border-t hairline pt-16">
        {m.map((x) => (
          <div key={x.l}>
            <div className="font-display text-5xl tracking-tight font-semibold">{x.v}</div>
            <p className="mt-2 text-sm text-muted-foreground max-w-[18ch]">{x.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  const group1 = [
    { img: "https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png" },
    {  img: "https://get.site/wp-content/uploads/2021/10/notion-logo.png" },
    {  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/3840px-Jira_Logo.svg.png" },
    {  img: "https://logos-world.net/wp-content/uploads/2021/04/Microsoft-Teams-Emblem.png" },
  ];
  const group2 = [
    {  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/3840px-Trello-logo-blue.svg.png" },
    {  img: "https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-calendar-calendar-platform-icon-vector-png-image_9183258.png" },
    {  img: "https://us-east-1-shared-usea1-02.graphassets.com/AjoDK24gSS52c8TDqE4MVz/unrRMgGzTruLtweIazbP" },
    {  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png" },
  ];
  
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between mb-10 text-center md:text-left md:flex-row flex-col items-center md:items-end">
        <div className="w-full">
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">Integrations</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold text-center">
            Connects where your team already works.
          </h2>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Companies that have been using our product from the very start.
          </p>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden min-h-[140px] md:min-h-[100px] flex items-center justify-center">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 animate-swap-1 items-center justify-items-center">
          {group1.map((t) => (
            <div key={t.name} className="flex items-center justify-center p-4">
              <img src={t.img} alt={`${t.name} logo`} className="h-12 max-w-[140px] object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 animate-swap-2 items-center justify-items-center">
          {group2.map((t) => (
            <div key={t.name} className="flex items-center justify-center p-4">
              <img src={t.img} alt={`${t.name} logo`} className="h-12 max-w-[140px] object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            q: "We left the meeting with the notes ready in Notion. Changed the way we work.",
            a: "Camila Souza",
            r: "Head of Operations, Helio",
          },
          {
            q: "The automatic flowchart eliminates 2h of rework per sprint. Paid for itself in one week.",
            a: "Bruno Tavares",
            r: "Eng. Manager, Aether",
          },
        ].map((t) => (
          <div key={t.a} className="border hairline rounded-2xl p-10 bg-card hover-lift">
            <Quote className="h-5 w-5 text-muted-foreground" />
            <p className="mt-6 text-lg leading-relaxed text-balance">"{t.q}"</p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <div className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-xs font-medium">
                {t.a
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div>
                <div className="font-medium">{t.a}</div>
                <div className="text-muted-foreground text-xs">{t.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl bg-foreground text-background p-12 md:p-20 grain">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold max-w-3xl text-balance">
          Your next meeting could be the last one you take notes on by hand.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
            <Link to="/dashboard">
              Get started free <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="h-12 px-4 text-base text-background hover:bg-background/10 hover:text-background"
          >
            <Link to="/precos">See plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
