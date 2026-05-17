import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
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
    name: "Medium",
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
    cta: "Subscribe to Medium",
    to: "/dashboard",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    per: "per user / month",
    desc: "For companies that need governance.",
    features: [
      "Everything in Medium",
      "Custom AI",
      "Custom templates",
      "Dashboards & analytics",
      "API & SSO",
      "Compliance / Privacy",
      "Spreadsheet roadmap",
    ],
    cta: "Talk to sales",
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
    <div className="min-h-screen flex flex-col">
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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border hairline">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-8 flex flex-col ${p.featured ? "bg-foreground text-background" : "bg-background"}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{p.name}</h3>
                {p.featured && (
                  <span className="text-[10px] uppercase tracking-widest opacity-70">
                    Recommended
                  </span>
                )}
              </div>
              <div className="mt-6">
                <div className="font-display text-5xl tracking-tight font-semibold">{p.price}</div>
                <div
                  className={`text-xs mt-1 ${p.featured ? "opacity-70" : "text-muted-foreground"}`}
                >
                  {p.per}
                </div>
              </div>
              <p className={`mt-4 text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className="mt-8 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" variant={p.featured ? "secondary" : "default"}>
                <Link to={p.to}>{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Frequently asked questions
        </p>
        <div className="divide-y hairline border-y hairline">
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
            <details key={f.q} className="py-5 group">
              <summary className="flex justify-between cursor-pointer list-none">
                <span className="font-medium">{f.q}</span>
                <span className="text-muted-foreground group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
