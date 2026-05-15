import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, AlertTriangle, Repeat, TrendingDown, Lightbulb, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/dashboard/insights_ia")({
  component: InsightsIA,
});

const cards = [
  { i: Repeat, t: "Tópico recorrente", d: "“Integração com ERP” apareceu em 7 reuniões. Considere um workstream dedicado." },
  { i: AlertTriangle, t: "Risco detectado", d: "Dependência da API do parceiro foi mencionada como bloqueio em 3 reuniões." },
  { i: TrendingDown, t: "Reuniões improdutivas", d: "9% das reuniões terminaram sem decisão. Sugestão: aplicar template de pauta." },
  { i: Lightbulb, t: "Sugestão", d: "Marina e Bruno discutem temas similares isoladamente — proponha um sync semanal." },
];

function InsightsIA() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2">
        <Sparkles className="h-3 w-3" /> Inteligência
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Insights IA</h1>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        Padrões, gargalos e recomendações detectadas em todas as suas reuniões.
      </p>

      <div className="mt-10 border hairline rounded-2xl bg-card p-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Busca semântica</p>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder='Ex.: "Mostre reuniões que falaram sobre integração com ERP"' className="pl-11 h-12 text-base" />
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {cards.map((c) => (
          <div key={c.t} className="bg-background p-8 hover-lift">
            <c.i className="h-5 w-5" strokeWidth={1.5} />
            <h3 className="mt-6 font-medium">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
