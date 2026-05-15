import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight, Mic, FileText, GitBranch, ListChecks, BarChart3,
  Search, ShieldCheck, Sparkles, Plug, Quote, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minuta — Reuniões presenciais que viram decisões" },
      { name: "description", content: "Grave, transcreva e transforme reuniões presenciais em atas, fluxogramas e planos de ação com IA." },
      { property: "og:title", content: "Minuta — Reuniões que viram decisões" },
      { property: "og:description", content: "IA que transforma reuniões em ata, fluxograma e roadmap automaticamente." },
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
            Novo · Gravação presencial com diarização
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight mt-6 text-balance">
            Reuniões presenciais que viram <em className="italic font-light">decisões</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            Coloque o celular na mesa. A Minuta grava, transcreve e entrega ata, fluxograma e plano de ação enquanto você ainda está saindo da sala.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <Button asChild size="lg" className="h-12 px-6 text-base group">
              <Link to="/dashboard">
                Começar grátis
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-4 text-base">
              <Link to="/precos">Ver preços <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-8 text-xs text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> LGPD compliant</span>
            <span>· 10 reuniões grátis / mês</span>
            <span>· Sem cartão de crédito</span>
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
          <span>Gravando · 00:24:18</span>
          <span className="ml-3 font-mono">Sala C — Planejamento Q2</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono">5 participantes</div>
      </div>
      <div className="grid md:grid-cols-[1.2fr_1fr]">
        <div className="p-6 space-y-4 border-r hairline min-h-[320px]">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Transcrição ao vivo</p>
          <div className="space-y-3 text-sm">
            <Line who="Lucas" text="A integração com o ERP precisa estar pronta antes do go-live de junho." />
            <Line who="Marina" text="Concordo. Vou levantar os endpoints e mando até sexta." />
            <Line who="Pedro" text="Risco: dependemos da API do parceiro. Plano B?" />
            <Line who="Lucas" text="Boa. Marina, inclui um fallback no escopo." />
            <div className="flex items-center gap-2 text-muted-foreground italic">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" />
              Marina está falando…
            </div>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2"><Sparkles className="h-3 w-3" /> Insights detectados</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-muted-foreground">·</span> Decisão: integração com ERP até junho</li>
              <li className="flex gap-2"><span className="text-muted-foreground">·</span> Risco: dependência da API do parceiro</li>
              <li className="flex gap-2"><span className="text-muted-foreground">·</span> Tópico recorrente: <em>go-live</em></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tarefas geradas</p>
            <div className="space-y-2">
              <Task to="Marina" what="Levantar endpoints do ERP" when="Sex, 14h" />
              <Task to="Pedro" what="Escrever plano de contingência" when="Próx. semana" />
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
      <div className="flex items-center gap-2"><div className="h-5 w-5 rounded-full bg-foreground text-background grid place-items-center text-[9px]">{to[0]}</div><span>{what}</span></div>
      <span className="text-muted-foreground font-mono">{when}</span>
    </div>
  );
}

function LogosStrip() {
  const logos = ["Volpe", "Northwind", "Aether", "Helio", "Cardinal", "Brunello", "Atomic", "Verbo"];
  return (
    <section className="border-y hairline py-8 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Times que substituíram a ata manual pela Minuta
      </p>
      <div className="marquee">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="text-2xl font-display tracking-tight text-muted-foreground/80 whitespace-nowrap">{l}</span>
        ))}
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const items = [
    { icon: FileText, t: "Ata automática", d: "Resumo estruturado com decisões, owners e prazos. Pronto para enviar." },
    { icon: ListChecks, t: "Plano de ação", d: "Tarefas extraídas com responsável, deadline e contexto da fala." },
    { icon: GitBranch, t: "Roadmap & SOPs", d: "Fluxos e procedimentos derivados das discussões." },
    { icon: BarChart3, t: "Dashboard de produtividade", d: "Tempo em reuniões, decisões tomadas, sessões improdutivas." },
    { icon: Search, t: "Busca semântica", d: "Pergunte em linguagem natural sobre tudo que já foi discutido." },
    { icon: ShieldCheck, t: "Compliance & LGPD", d: "Criptografia em repouso, retenção configurável, SSO no Business." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Capacidades</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight font-semibold text-balance">
          Tudo o que sai de uma reunião — sem ninguém ter que digitar.
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground">IA que entende contexto</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold">
            De fala para fluxograma <span className="italic font-light">em segundos</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A Minuta detecta decisões, dependências e processos. Em vez de você abrir o Lucid depois da reunião, ela já gera o BPMN e o roadmap da entrega.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex gap-3"><span className="font-mono text-muted-foreground">01</span> Detecção automática de tópicos e responsáveis</li>
            <li className="flex gap-3"><span className="font-mono text-muted-foreground">02</span> Fluxograma editável (BPMN/Mermaid)</li>
            <li className="flex gap-3"><span className="font-mono text-muted-foreground">03</span> Sincroniza com Notion, Jira, Trello</li>
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
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">workflow.bpmn — gerado às 14:32</div>
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
          <text x="115" y="143">Levantar API</text>
          <text x="258" y="98">Decisão</text>
          <text x="290" y="218">Plano B</text>
        </g>
      </svg>
    </div>
  );
}

function SemanticSearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border hairline bg-card p-10 md:p-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Busca semântica</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold max-w-2xl text-balance">
          Pergunte qualquer coisa sobre meses de reuniões.
        </h2>
        <div className="mt-10 max-w-2xl">
          <div className="border hairline rounded-xl bg-background p-4 flex items-start gap-3">
            <Search className="h-4 w-4 mt-1 text-muted-foreground" />
            <div>
              <p className="text-sm">"Mostre reuniões que falaram sobre integração com ERP."</p>
              <div className="mt-4 space-y-2">
                {[
                  { t: "Planejamento Q2", d: "12 mai · 47 min · 3 menções" },
                  { t: "Sync de produto", d: "28 abr · 32 min · 2 menções" },
                  { t: "Kickoff parceiro", d: "14 abr · 1h 12min · 5 menções" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center justify-between border-t hairline pt-2 text-xs">
                    <span>{r.t}</span><span className="font-mono text-muted-foreground">{r.d}</span>
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
    { n: "01", t: "Coloque na mesa", d: "Inicie a gravação pelo app. Funciona offline." },
    { n: "02", t: "Conduza normalmente", d: "Diarização identifica cada participante automaticamente." },
    { n: "03", t: "Receba os artefatos", d: "Ata, fluxograma e tarefas chegam em segundos." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="border-t hairline pt-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Como funciona</p>
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
    { v: "2.4h", l: "economizadas por pessoa, por semana" },
    { v: "97%", l: "de precisão na transcrição PT-BR" },
    { v: "31%", l: "menos reuniões improdutivas" },
    { v: "<60s", l: "para gerar ata e fluxograma" },
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
  const tools = ["Slack", "Notion", "Jira", "Microsoft Teams", "Trello", "Google Calendar", "Linear", "Asana"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Integrações</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight font-semibold">Conecta onde seu time já trabalha.</h2>
        </div>
        <Plug className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border hairline">
        {tools.map((t) => (
          <div key={t} className="bg-background p-8 flex items-center justify-between hover-lift">
            <span className="font-medium">{t}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { q: "Saímos da reunião com a ata pronta no Notion. Mudou nosso jeito de trabalhar.", a: "Camila Souza", r: "Head de Operações, Helio" },
          { q: "O fluxograma automático elimina 2h de retrabalho por sprint. Pagou-se em uma semana.", a: "Bruno Tavares", r: "Eng. Manager, Aether" },
        ].map((t) => (
          <div key={t.a} className="border hairline rounded-2xl p-10 bg-card hover-lift">
            <Quote className="h-5 w-5 text-muted-foreground" />
            <p className="mt-6 text-lg leading-relaxed text-balance">"{t.q}"</p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <div className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-xs font-medium">{t.a.split(" ").map(s=>s[0]).join("")}</div>
              <div><div className="font-medium">{t.a}</div><div className="text-muted-foreground text-xs">{t.r}</div></div>
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
          Sua próxima reunião pode ser a última que você anota à mão.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
            <Link to="/dashboard">Começar grátis <ArrowUpRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-12 px-4 text-base text-background hover:bg-background/10 hover:text-background">
            <Link to="/precos">Ver planos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
