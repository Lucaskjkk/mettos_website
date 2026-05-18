import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { AnimatedGrid } from "@/components/marketing/AnimatedGrid";
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
  Bot,
  Database,
  CheckCircle2,
  AlertCircle,
  Clock,
  Check,
  Square,
  Command,
  CornerDownLeft,
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
    <div className="min-h-screen flex flex-col relative">
      <AnimatedGrid />
      <div className="z-10 flex flex-col">
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
    <div className="relative rounded-2xl border hairline bg-background/95 backdrop-blur-xl overflow-hidden hover-lift shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] ring-1 ring-foreground/5 flex flex-col font-sans">
      {/* Top App Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b hairline bg-muted/20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-destructive"></span>
            </span>
            REC 00:24:18
          </div>
          <div className="h-4 w-px bg-border"></div>
          <div className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
            <span className="text-muted-foreground">Dashboards</span>
            <span className="text-muted-foreground/50">/</span>
            <span>Q2 Planning</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 mr-2">
            {["L", "M", "P", "A"].map((i, idx) => (
              <div
                key={idx}
                className="h-6 w-6 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[9px] font-semibold text-muted-foreground shadow-sm"
              >
                {i}
              </div>
            ))}
            <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[9px] font-semibold text-muted-foreground shadow-sm">
              +1
            </div>
          </div>
          <Badge
            variant="outline"
            className="h-7 text-xs font-normal border-foreground/10 hover:bg-foreground/5 cursor-pointer gap-1.5 hidden sm:flex"
          >
            <Square className="w-3 h-3 text-muted-foreground fill-current" /> Stop
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] flex-1">
        {/* Left: Transcription Feed */}
        <div className="p-0 flex flex-col min-h-[360px] bg-background">
          <div className="px-5 py-3 border-b hairline flex justify-between items-center bg-muted/5">
            <span className="text-xs font-semibold text-foreground/80 flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-blue-500" />
              Live Transcript
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">EN-US</span>
          </div>

          <div className="p-5 space-y-5 overflow-hidden flex-1 relative">
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

            <div className="fade-up" style={{ animationDelay: "0.2s" }}>
              <Line
                who="Lucas"
                time="14:30"
                text="The ERP integration needs to be ready before the June go-live."
              />
            </div>
            <div className="fade-up" style={{ animationDelay: "1.0s" }}>
              <Line
                who="Marina"
                time="14:31"
                text="Agreed. I'll map out the endpoints and send by Friday."
              />
            </div>
            <div className="fade-up" style={{ animationDelay: "1.8s" }}>
              <Line
                who="Pedro"
                time="14:31"
                text="Risk: we depend on the partner API. What is our Plan B?"
              />
            </div>
            <div className="fade-up" style={{ animationDelay: "2.6s" }}>
              <Line
                who="Lucas"
                time="14:32"
                text="Good point. Marina, please add a fallback to the scope so we are covered."
              />
            </div>

            <div
              className="flex items-start gap-3 mt-4 fade-up relative z-20"
              style={{ animationDelay: "3.4s" }}
            >
              <div className="h-7 w-7 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-semibold shrink-0">
                M
              </div>
              <div className="flex items-center gap-1.5 h-7">
                <div
                  className="w-1 bg-blue-500 rounded-full animate-wave"
                  style={{ animationDelay: "0.0s", height: "12px" }}
                ></div>
                <div
                  className="w-1 bg-blue-500 rounded-full animate-wave"
                  style={{ animationDelay: "0.2s", height: "8px" }}
                ></div>
                <div
                  className="w-1 bg-blue-500 rounded-full animate-wave"
                  style={{ animationDelay: "0.4s", height: "16px" }}
                ></div>
                <div
                  className="w-1 bg-blue-500 rounded-full animate-wave"
                  style={{ animationDelay: "0.1s", height: "6px" }}
                ></div>
                <span className="text-xs text-muted-foreground italic ml-2">
                  Marina is speaking...
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Insights Sidebar */}
        <div className="border-l hairline bg-muted/10 relative overflow-hidden flex flex-col">
          <div className="px-5 py-3 border-b hairline flex items-center gap-2 bg-muted/20">
            <Bot className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-semibold text-foreground/80">Minuta Copilot</span>
            <span className="ml-auto flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          <div className="p-5 space-y-6">
            <div className="fade-up" style={{ animationDelay: "1.4s" }}>
              <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-3">
                Detected Insights
              </p>
              <div className="space-y-2">
                <div className="flex border hairline rounded p-2 gap-2.5 bg-background shadow-sm items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-0.5">
                      Decision
                    </span>
                    <span className="text-xs text-foreground/90 leading-tight">
                      ERP integration mandated for June go-live.
                    </span>
                  </div>
                </div>
                <div
                  className="flex border hairline rounded p-2 gap-2.5 bg-background shadow-sm items-start fade-up"
                  style={{ animationDelay: "2.2s" }}
                >
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider block mb-0.5">
                      Risk Factor
                    </span>
                    <span className="text-xs text-foreground/90 leading-tight">
                      Dependency on external partner API identified.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up pt-1" style={{ animationDelay: "3.0s" }}>
              <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-3 flex items-center justify-between">
                Extracting Tasks
                <Sparkles className="w-3 h-3 text-muted-foreground" />
              </p>
              <div className="space-y-2 relative">
                <Task to="Marina" what="Map ERP endpoints" when="Fri, 2pm" />
                <div className="fade-up" style={{ animationDelay: "3.8s" }}>
                  <Task to="Marina" what="Write API contingency plan" when="Next week" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ who, time, text }: { who: string; time: string; text: string }) {
  return (
    <div className="flex gap-3 items-start group">
      <div className="h-7 w-7 rounded-full bg-secondary border hairline flex items-center justify-center text-[10px] font-semibold shrink-0 text-muted-foreground">
        {who[0]}
      </div>
      <div>
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="text-xs font-semibold text-foreground/90">{who}</span>
          <span className="text-[9px] text-muted-foreground font-mono">{time}</span>
        </div>
        <p className="text-sm text-foreground/80 leading-snug">{text}</p>
      </div>
    </div>
  );
}

function Task({ to, what, when }: { to: string; what: string; when: string }) {
  return (
    <div className="flex items-start gap-3 border hairline bg-background shadow-sm rounded-lg p-2.5 text-xs hover-lift transition-colors cursor-default">
      <div className="mt-0.5 min-w-4 flex justify-center">
        <div className="w-4 h-4 rounded border hairline flex items-center justify-center text-muted-foreground/30">
          <Check className="w-3 h-3 opacity-0" />
        </div>
      </div>
      <div className="flex-1">
        <span className="font-medium text-foreground/90 block mb-1">{what}</span>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[8px] font-bold">
              {to[0]}
            </div>
            <span className="text-[10px] text-muted-foreground">{to}</span>
          </div>
          <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {when}
          </span>
        </div>
      </div>
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
    <section className="mx-auto max-w-7xl border-y hairline py-10 overflow-hidden relative bg-transparent">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8 px-6">
        Teams that replaced manual meeting notes with Minuta
      </p>
      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee w-max select-none">
          {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-2xl font-display tracking-tight text-muted-foreground/80 whitespace-nowrap px-4"
            >
              {l}
            </span>
          ))}
        </div>
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
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((i) => (
          <div
            key={i.t}
            className="group relative flex flex-col overflow-hidden rounded-3xl border hairline bg-card/30 p-8 hover-lift items-start"
          >
            {/* Subtle inner hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon wrapper */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border hairline bg-background shadow-sm ring-1 ring-foreground/[0.02] group-hover:scale-110 transition-transform duration-500 mb-6">
              <i.icon className="h-5 w-5 text-foreground/70" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground/90">
              {i.t}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{i.d}</p>

            {/* Learn more arrow - appears on hover */}
            <div className="mt-6 flex items-center text-xs font-medium text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Explore feature <ArrowRight className="ml-1 h-3 w-3" />
            </div>
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
    <div className="relative rounded-2xl border hairline bg-background hover-lift overflow-hidden h-[340px] flex-shrink-0 w-full shadow-sm">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_10%,transparent)_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b hairline bg-background/50 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border hairline bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full border hairline bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full border hairline bg-green-400"></div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            workflow.bpmn
          </span>
        </div>
        <Badge
          variant="outline"
          className="text-[9px] h-5 bg-emerald-500/10 font-mono tracking-widest text-emerald-500 border-emerald-500/20 px-2 rounded-full"
        >
          LIVE
        </Badge>
      </div>

      <div className="relative z-10 w-full h-full overflow-hidden flex items-center justify-center">
        <div className="w-[520px] h-[340px] relative shrink-0">
          {/* SVG Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-muted-foreground/40"
            >
              <path
                d="M 56 190 L 84 190"
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="animate-flow-line"
              />
              <path
                d="M 224 190 C 250 190 250 110 280 110"
                strokeDasharray="4 4"
                className="animate-flow-line"
              />
              <path
                d="M 224 190 C 250 190 250 270 280 270"
                strokeDasharray="4 4"
                className="animate-flow-line"
              />
              <path
                d="M 410 110 C 440 110 440 190 470 190"
                strokeDasharray="4 4"
                className="animate-flow-line"
              />
              <path
                d="M 410 270 C 440 270 440 190 470 190"
                strokeDasharray="4 4"
                className="animate-flow-line"
              />
            </g>
          </svg>

          {/* Nodes */}
          {/* Node 1: Mic */}
          <div className="absolute top-[174px] left-[24px] w-[32px] h-[32px] rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background z-20">
            <Mic className="w-4 h-4 text-primary-foreground" />
          </div>

          {/* Node 2: NLP Engine */}
          <div className="absolute top-[153px] left-[84px] w-[140px] rounded-xl border hairline bg-background shadow-xl z-20 overflow-hidden">
            <div className="px-3 py-2 border-b hairline bg-muted/30 text-xs font-medium flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-blue-500" />
              Minuta AI
            </div>
            <div className="p-3 bg-card/50">
              <div className="h-1.5 w-full bg-muted rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-blue-500 w-[60%] animate-pulse"></div>
              </div>
              <p className="text-[9px] text-muted-foreground">Extracting intents...</p>
            </div>
          </div>

          {/* Node 3: Flowchart / Action */}
          <div className="absolute top-[69px] left-[280px] w-[130px] rounded-xl border hairline bg-background shadow-xl z-20 overflow-hidden">
            <div className="px-3 py-2 border-b hairline bg-muted/30 text-xs font-medium flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-emerald-500" />
              Decision Tree
            </div>
            <div className="p-3 bg-card/50 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Update Specs
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auth Flow
              </div>
            </div>
          </div>

          {/* Node 4: Tasks / External */}
          <div className="absolute top-[225px] left-[280px] w-[130px] rounded-xl border hairline bg-background shadow-xl z-20 overflow-hidden">
            <div className="px-3 py-2 border-b hairline bg-muted/30 text-xs font-medium flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-amber-500" />
              Jira Tickets
            </div>
            <div className="p-3 bg-card/50 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-mono">
                <span className="bg-amber-500/20 text-amber-600 px-1 rounded">PROJ-12</span>
                Assigned
              </div>
              <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-mono">
                <span className="bg-amber-500/20 text-amber-600 px-1 rounded">PROJ-13</span>
                Created
              </div>
            </div>
          </div>

          {/* Node 5: End Sync */}
          <div className="absolute top-[174px] left-[470px] w-[32px] h-[32px] rounded-full border hairline bg-background flex items-center justify-center shadow-lg z-20">
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SemanticSearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative rounded-3xl border hairline bg-card p-10 md:p-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
            <Search className="w-3.5 h-3.5" /> Semantic search
          </p>
          <h2 className="font-display text-4xl tracking-tight font-semibold max-w-2xl text-balance">
            Ask anything about months of meetings.
          </h2>
          <div className="mt-10 max-w-2xl">
            {/* Spotlight Search UI */}
            <div className="relative rounded-2xl border hairline bg-background/50 backdrop-blur-xl shadow-xl overflow-hidden hover-lift ring-1 ring-foreground/5">
              {/* Search bar */}
              <div className="flex items-center gap-3 px-5 py-4 border-b hairline bg-background/80">
                <Search className="h-5 w-5 text-primary animate-pulse" />
                <div className="flex-1 flex items-center">
                  <span className="text-foreground/90 font-medium whitespace-nowrap">
                    Show meetings that discussed ERP integration
                  </span>
                  <span className="inline-block w-0.5 h-5 bg-primary ml-px animate-blink"></span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 opacity-50">
                  <kbd className="h-6 px-1.5 flex items-center justify-center rounded border hairline bg-muted text-[10px] font-mono">
                    <Command className="w-3 h-3" />
                  </kbd>
                  <kbd className="h-6 px-1.5 flex items-center justify-center rounded border hairline bg-muted text-[10px] font-mono">
                    K
                  </kbd>
                </div>
              </div>

              {/* Results list */}
              <div className="bg-muted/10 p-2">
                {[
                  { t: "Q2 Planning", d: "May 12", dur: "47 min", m: "3 mentions", active: true },
                  { t: "Product sync", d: "Apr 28", dur: "32 min", m: "2 mentions", active: false },
                  {
                    t: "Partner kickoff",
                    d: "Apr 14",
                    dur: "1h 12m",
                    m: "5 mentions",
                    active: false,
                  },
                ].map((r, i) => (
                  <div
                    key={r.t}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-default ${r.active ? "bg-background border hairline shadow-sm ring-1 ring-primary/10" : "hover:bg-muted/50 border border-transparent"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center border hairline ${r.active ? "bg-primary/10 text-primary border-primary/20" : "bg-background text-muted-foreground"}`}
                      >
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span
                          className={`text-sm font-medium block ${r.active ? "text-foreground" : "text-foreground/80"}`}
                        >
                          {r.t}
                        </span>
                        <div className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5 font-mono">
                          <span>{r.d}</span>
                          <span className="opacity-50">•</span>
                          <span>{r.dur}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`text-[9px] h-5 px-2 font-mono ${r.active ? "bg-primary/5 text-primary border-primary/20" : "bg-background text-muted-foreground"}`}
                      >
                        {r.m}
                      </Badge>
                      {r.active && (
                        <div className="hidden sm:flex h-6 w-6 rounded border hairline bg-muted/50 items-center justify-center text-muted-foreground">
                          <CornerDownLeft className="w-3 h-3" />
                        </div>
                      )}
                    </div>
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
    {
      n: "01",
      t: "Place on the table",
      d: "Start recording from the app. Works offline.",
      icon: Mic,
    },
    {
      n: "02",
      t: "Run it normally",
      d: "Diarization identifies each participant automatically.",
      icon: Sparkles,
    },
    {
      n: "03",
      t: "Receive artifacts",
      d: "Minutes, flowcharts and tasks arrive in seconds.",
      icon: FileText,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative border hairline rounded-3xl bg-card/30 p-10 md:p-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -mt-20 -ml-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          How it works
        </p>

        <div className="mt-16 relative">
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((s, i) => (
              <div key={s.n} className="relative group">
                {/* Animated Connector Segment */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[27px] left-[72px] w-[calc(100%-40px)] h-[2px] z-0">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, currentColor 50%, transparent 50%)",
                        backgroundSize: "12px 2px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />
                    <div
                      className={`absolute inset-y-0 left-0 overflow-hidden ${i === 0 ? "animate-seg-1" : "animate-seg-2"}`}
                    >
                      <div
                        className="h-full w-[800px] text-primary"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, currentColor 50%, transparent 50%)",
                          backgroundSize: "12px 2px",
                          backgroundRepeat: "repeat-x",
                          filter: "drop-shadow(0 0 4px rgba(var(--primary), 0.5))",
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border hairline bg-background shadow-sm ring-1 ring-foreground/[0.02] group-hover:scale-110 transition-transform duration-500 shrink-0 z-10">
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <s.icon className="h-5 w-5 text-foreground/70 relative z-20" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground/90">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">{s.d}</p>
              </div>
            ))}
          </div>
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
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-4 gap-4 md:gap-6">
        {m.map((x, i) => (
          <div
            key={x.l}
            className="relative rounded-3xl border hairline bg-card/30 p-8 hover-lift overflow-hidden group flex flex-col justify-center min-h-[200px]"
          >
            {/* Subtle hover gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="font-display text-5xl tracking-tight font-semibold text-foreground/90 mb-3">
              {x.v}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{x.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  const group1 = [
    { name: "Slack", img: "https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png" },
    { name: "Notion", img: "https://get.site/wp-content/uploads/2021/10/notion-logo.png" },
    {
      name: "Jira",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/3840px-Jira_Logo.svg.png",
    },
    { name: "Microsoft Teams", img: "https://logos-world.net/wp-content/uploads/2021/04/Microsoft-Teams-Emblem.png" },
  ];
  const group2 = [
    {
      name: "Trello",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/3840px-Trello-logo-blue.svg.png",
    },
    {
      name: "Google Calendar",
      img: "https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-calendar-calendar-platform-icon-vector-png-image_9183258.png",
    },
    {
      name: "Zoom",
      img: "https://us-east-1-shared-usea1-02.graphassets.com/AjoDK24gSS52c8TDqE4MVz/unrRMgGzTruLtweIazbP",
    },
    {
      name: "Asana",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between mb-10 text-center md:text-left md:flex-row flex-col items-center md:items-end">
        <div className="w-full">
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
            Integrations
          </p>
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
              <img
                src={t.img}
                alt={`${t.name} logo`}
                className="h-12 max-w-[140px] object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 animate-swap-2 items-center justify-items-center">
          {group2.map((t) => (
            <div key={t.name} className="flex items-center justify-center p-4">
              <img
                src={t.img}
                alt={`${t.name} logo`}
                className="h-12 max-w-[140px] object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
          <div
            key={t.a}
            className="relative group overflow-hidden border hairline rounded-3xl p-10 bg-card/30 hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Quote className="h-6 w-6 text-foreground/20 relative z-10" fill="currentColor" />
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/90 font-medium relative z-10 text-balance">
              "{t.q}"
            </p>
            <div className="mt-10 flex items-center gap-4 relative z-10">
              <div className="h-10 w-10 rounded-full bg-foreground text-background grid place-items-center text-xs font-bold shadow-sm ring-2 ring-background">
                {t.a
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.a}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{t.r}</div>
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
    <section className="mx-auto max-w-7xl px-6 py-24 mb-12">
      <div className="relative rounded-[2.5rem] bg-zinc-950 text-zinc-50 p-12 md:p-20 overflow-hidden shadow-2xl ring-1 ring-zinc-800">
        {/* Abstract background gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-800/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

        {/* Grain overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold max-w-3xl text-balance leading-[1.1]">
            Your next meeting could be the last one you take notes on by hand.
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-zinc-50 text-zinc-950 hover:bg-zinc-200 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all"
            >
              <Link to="/dashboard">
                Get started free <ArrowUpRight className="ml-2 h-4 w-4 text-zinc-500" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-14 px-6 text-base text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50 rounded-2xl transition-colors"
            >
              <Link to="/precos">See plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
