import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Preços — Minuta" },
      { name: "description", content: "Planos a partir de gratuito. Escolha o ideal para seu time." },
    ],
  }),
  component: Precos,
});

const plans = [
  {
    name: "Starter", price: "Grátis", per: "para sempre",
    desc: "Para começar a transformar reuniões em decisões.",
    features: ["10 reuniões / mês", "Transcrição com IA", "Resumo automático", "Export em PDF"],
    cta: "Começar grátis", to: "/dashboard", featured: false,
  },
  {
    name: "Medium", price: "$20", per: "por usuário / mês",
    desc: "Para times que querem fluxogramas e automação.",
    features: ["Tudo do Starter", "50 reuniões / mês", "Fluxogramas com IA", "Tarefas automáticas", "Notion, Trello, Jira"],
    cta: "Assinar Medium", to: "/dashboard", featured: true,
  },
  {
    name: "Business", price: "$99", per: "por usuário / mês",
    desc: "Para empresas que precisam de governança.",
    features: ["Tudo do Medium", "IA personalizada", "Templates customizados", "Dashboards & analytics", "API & SSO", "Compliance / LGPD", "Roadmap em planilha"],
    cta: "Falar com vendas", to: "/dashboard", featured: false,
  },
  {
    name: "Enterprise", price: "Custom", per: "anual",
    desc: "Para infraestrutura sob medida.",
    features: ["Tudo do Business", "Hospedagem privada", "On-premise", "Modelos customizados", "Suporte prioritário"],
    cta: "Entrar em contato", to: "/dashboard", featured: false,
  },
];

function Precos() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Preços</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight font-semibold text-balance">
            Simples. Por usuário. Cancele quando quiser.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Comece grátis e escale conforme o time cresce. Sem letras miúdas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border hairline">
          {plans.map((p) => (
            <div key={p.name}
              className={`p-8 flex flex-col ${p.featured ? "bg-foreground text-background" : "bg-background"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{p.name}</h3>
                {p.featured && <span className="text-[10px] uppercase tracking-widest opacity-70">Recomendado</span>}
              </div>
              <div className="mt-6">
                <div className="font-display text-5xl tracking-tight font-semibold">{p.price}</div>
                <div className={`text-xs mt-1 ${p.featured ? "opacity-70" : "text-muted-foreground"}`}>{p.per}</div>
              </div>
              <p className={`mt-4 text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-8 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}</li>
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
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Perguntas frequentes</p>
        <div className="divide-y hairline border-y hairline">
          {[
            { q: "Posso trocar de plano a qualquer momento?", a: "Sim. Faça upgrade ou downgrade pelo painel de billing." },
            { q: "Vocês são compatíveis com a LGPD?", a: "Sim. Plano Business inclui retenção configurável, DPA e SSO." },
            { q: "Funciona offline?", a: "A gravação funciona offline; a transcrição é processada ao reconectar." },
          ].map((f) => (
            <details key={f.q} className="py-5 group">
              <summary className="flex justify-between cursor-pointer list-none">
                <span className="font-medium">{f.q}</span>
                <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
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
