import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { AnimatedGrid } from "@/components/marketing/AnimatedGrid";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Pricing — Minuta" },
      { name: "description", content: "Plans starting from free. Choose the best for your team." },
    ],
  }),
  component: Precos,
});

const plans = [
  {
    name: "Starter",
    price: "Free",
    per: "forever",
    desc: "To start transforming meetings into decisions.",
    features: ["10 meetings / month", "AI Transcription", "Automatic summary", "PDF export"],
    cta: "Get started free",
    to: "/dashboard",
    featured: false,
  },
  {
    name: "Pro",
    price: "$20",
    per: "per user / month",
    desc: "For teams that want flowcharts and automation.",
    features: [
      "Everything in Starter",
      "50 meetings / month",
      "AI Flowcharts",
      "Automatic tasks",
      "Notion, Trello, Jira",
    ],
    cta: "Subscribe to Pro",
    to: "/dashboard",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    per: "per user / month",
    desc: "For companies that need governance.",
    features: [
      "Everything in Pro",
      "Custom AI",
      "Custom templates",
      "Dashboards & analytics",
      "API & SSO",
      "Compliance / Privacy",
      "Spreadsheet roadmap",
    ],
    cta: "Subscribe to Business",
    to: "/dashboard",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "annual",
    desc: "For custom infrastructure.",
    features: [
      "Everything in Business",
      "Private hosting",
      "On-premise",
      "Custom models",
      "Priority support",
    ],
    cta: "Contact us",
    to: "/dashboard",
    featured: false,
  },
];

function Precos() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedGrid />
      <div className="z-10 flex flex-col">
        <SiteHeader />
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Pricing</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight font-semibold text-balance">
              Simple. Per user. Cancel anytime.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Start free and scale as your team grows. No fine print.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden ring-1 ring-border shadow-xl">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-8 lg:p-10 flex flex-col relative group transition-all duration-500 ${
                  p.featured ? "bg-zinc-950 text-zinc-50 z-10" : "bg-card hover:bg-card/50"
                }`}
              >
                {p.featured && (
                  <>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                    <div
                      className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "4px 4px",
                      }}
                    />
                  </>
                )}
                {!p.featured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="flex items-baseline justify-between mb-8">
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      {p.featured && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full ring-1 ring-primary/20">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <div className="font-display text-5xl tracking-tight font-semibold">
                        {p.price}
                      </div>
                      <div
                        className={`text-sm mt-3 font-medium ${p.featured ? "text-zinc-400" : "text-muted-foreground"}`}
                      >
                        {p.per}
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${p.featured ? "text-zinc-300" : "text-muted-foreground"}`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div className="my-8 h-[1px] w-full bg-border opacity-50" />

                  <ul className="space-y-4 text-sm flex-1 font-medium">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 items-center">
                        <div
                          className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${p.featured ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </div>
                        <span className={p.featured ? "text-zinc-200" : "text-foreground/90"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`mt-10 h-14 rounded-2xl text-base w-full relative z-10 transition-all ${p.featured ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]" : ""}`}
                    variant={p.featured ? "default" : "secondary"}
                  >
                    <Link to={p.to}>{p.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <LogosStrip />

        <section className="mx-auto max-w-3xl px-6 pb-32">
          <div className="text-center mb-12">
            <p className="text-xs uppercase font-bold tracking-widest text-primary mb-3">FAQ</p>
            <h2 className="font-display text-3xl font-semibold">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Can I change plans at any time?",
                a: "Yes. Upgrade or downgrade from the billing panel.",
              },
              {
                q: "Are you privacy/GDPR compliant?",
                a: "Yes. Business plan includes configurable retention, DPA and SSO.",
              },
              {
                q: "Does it work offline?",
                a: "Recording works offline; transcription is processed upon reconnecting.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group border hairline rounded-2xl bg-card/30 hover:bg-card/50 transition-colors overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 font-medium text-lg">
                  <span>{f.q}</span>
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-300 transform origin-center text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>
        <SiteFooter />
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
    <section className="mx-auto max-w-7xl border-y hairline py-16 overflow-hidden relative bg-transparent mb-24">
      <p className="text-center text-xs uppercase font-bold tracking-widest text-primary mb-10 px-6">
        Teams that replaced manual meeting notes with Minuta
      </p>
      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee w-max select-none">
          {[...logos, ...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-3xl font-display tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors whitespace-nowrap px-8"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
