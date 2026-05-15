import { createFileRoute } from "@tanstack/react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/dashboard/tarefas")({
  component: Tarefas,
});

const cols = [
  { name: "A fazer", items: [
    { t: "Levantar endpoints do ERP", who: "Marina", due: "Sex", from: "Planejamento Q2", prio: "Alta" },
    { t: "Plano de contingência API parceiro", who: "Pedro", due: "Próx. semana", from: "Planejamento Q2", prio: "Média" },
    { t: "Atualizar deck de vendas", who: "Lucas", due: "23 mai", from: "Sync de produto", prio: "Baixa" },
  ]},
  { name: "Em andamento", items: [
    { t: "Mockups do dashboard v2", who: "Bruno", due: "20 mai", from: "Roadmap produto", prio: "Alta" },
    { t: "Documentar SOP de incidente", who: "Camila", due: "18 mai", from: "Pós-mortem", prio: "Média" },
  ]},
  { name: "Concluído", items: [
    { t: "Aprovar orçamento Q2", who: "Ana", due: "10 mai", from: "Review trimestral", prio: "Alta" },
    { t: "Contratar dev sênior", who: "Camila", due: "08 mai", from: "Hiring panel", prio: "Média" },
  ]},
];

function Tarefas() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Ação</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Tarefas & Ações</h1>
      <p className="mt-2 text-sm text-muted-foreground">Tudo que foi decidido em reuniões — com responsável e prazo.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cols.map((c) => (
          <div key={c.name} className="border hairline rounded-2xl bg-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-sm">{c.name}</h2>
              <span className="text-xs text-muted-foreground font-mono">{c.items.length}</span>
            </div>
            <div className="space-y-3">
              {c.items.map((it) => (
                <div key={it.t} className="border hairline rounded-lg p-3 bg-background hover-lift">
                  <div className="flex items-start gap-2">
                    <Checkbox className="mt-0.5" defaultChecked={c.name === "Concluído"} />
                    <div className="flex-1">
                      <div className="text-sm">{it.t}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">de · {it.from}</div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <div className="h-5 w-5 rounded-full bg-foreground text-background grid place-items-center text-[9px]">{it.who[0]}</div>
                          {it.who}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge variant="outline" className="text-[10px] font-normal">{it.prio}</Badge>
                          <span className="text-[10px] text-muted-foreground font-mono">{it.due}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
