import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/dashboard/lista_reunioes")({
  component: ListaReunioes,
});

const meetings = [
  { t: "Planejamento Q2", date: "12 mai", who: ["AR","LM","PD"], dur: "47m", status: "Concluída", tags: ["Estratégia","ERP"] },
  { t: "Sync de produto", date: "10 mai", who: ["AR","BT"], dur: "32m", status: "Concluída", tags: ["Produto"] },
  { t: "1:1 Camila", date: "09 mai", who: ["AR","CS"], dur: "24m", status: "Concluída", tags: ["Pessoas"] },
  { t: "Kickoff parceiro", date: "07 mai", who: ["AR","LM","PD","JS"], dur: "1h12", status: "Em revisão", tags: ["Vendas","ERP"] },
  { t: "Retrospectiva sprint 23", date: "03 mai", who: ["AR","BT","JS","MR"], dur: "55m", status: "Concluída", tags: ["Engenharia"] },
  { t: "Hiring panel", date: "02 mai", who: ["AR","CS","BT"], dur: "40m", status: "Rascunho", tags: ["Hiring"] },
];

function ListaReunioes() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Histórico</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Reuniões</h1>
        </div>
        <div className="relative w-72">
          <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Filtrar por título, tag, pessoa…" className="pl-8" />
        </div>
      </div>

      <div className="mt-10 border hairline rounded-2xl bg-card overflow-hidden">
        <div className="grid grid-cols-[1.5fr_0.6fr_1fr_0.6fr_1fr_0.6fr] px-6 py-3 text-[10px] uppercase tracking-widest text-muted-foreground border-b hairline">
          <span>Reunião</span><span>Data</span><span>Participantes</span><span>Duração</span><span>Tags</span><span>Status</span>
        </div>
        {meetings.map((m) => (
          <div key={m.t} className="grid grid-cols-[1.5fr_0.6fr_1fr_0.6fr_1fr_0.6fr] px-6 py-4 items-center border-b hairline last:border-b-0 hover:bg-muted/40 transition-colors">
            <span className="font-medium text-sm">{m.t}</span>
            <span className="text-sm text-muted-foreground font-mono">{m.date}</span>
            <div className="flex -space-x-1.5">
              {m.who.map((w) => (
                <div key={w} className="h-6 w-6 rounded-full bg-foreground text-background grid place-items-center text-[9px] font-medium ring-2 ring-card">{w}</div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-mono">{m.dur}</span>
            <div className="flex flex-wrap gap-1">
              {m.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px] font-normal">{t}</Badge>)}
            </div>
            <span className="text-xs">{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
