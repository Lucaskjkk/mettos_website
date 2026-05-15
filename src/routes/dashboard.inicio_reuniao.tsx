import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mic, Calendar, Sparkles, FileText, Radio } from "lucide-react";

export const Route = createFileRoute("/dashboard/inicio_reuniao")({
  component: IniciarReuniao,
});

function IniciarReuniao() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8 max-w-5xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Ação</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Iniciar uma reunião</h1>
      <p className="mt-2 text-sm text-muted-foreground">Coloque o aparelho na mesa. A IA cuida do resto.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="group text-left rounded-2xl border hairline bg-foreground text-background p-10 hover-lift grain relative overflow-hidden">
              <Mic className="h-7 w-7" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-3xl tracking-tight font-semibold">Começar agora</h3>
              <p className="mt-3 text-sm opacity-70">Inicia gravação, transcrição e detecção de tópicos em tempo real.</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm">Iniciar →</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Nova reunião</DialogTitle>
              <DialogDescription>Selecione o modo. Você pode mudar depois.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-2">
              {[
                { i: Radio, t: "Iniciar gravação", d: "Começa imediatamente; ideal para presencial." },
                { i: Calendar, t: "Marcar reunião", d: "Agenda e envia convite com link." },
                { i: Mic, t: "Transcrição em tempo real", d: "Vê o texto aparecer enquanto a conversa rola." },
                { i: Sparkles, t: "IA detectando tópicos", d: "Tags automáticas por assunto." },
                { i: FileText, t: "Geração live de insights", d: "Decisões e tarefas saem em tempo real." },
              ].map((o) => (
                <button key={o.t} className="w-full text-left flex items-start gap-4 p-4 rounded-lg border hairline hover:bg-muted transition-colors">
                  <o.i className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">{o.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{o.d}</div>
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="rounded-2xl border hairline bg-card p-10 hover-lift">
          <Calendar className="h-7 w-7" strokeWidth={1.5} />
          <h3 className="mt-8 font-display text-3xl tracking-tight font-semibold">Agendar</h3>
          <p className="mt-3 text-sm text-muted-foreground">Marque com participantes e contexto.</p>
          <div className="mt-8 space-y-3">
            <div><Label className="text-xs">Título</Label><Input placeholder="Ex.: Sync de produto" className="mt-1.5" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label className="text-xs">Data</Label><Input type="date" className="mt-1.5" /></div>
              <div><Label className="text-xs">Hora</Label><Input type="time" className="mt-1.5" /></div>
            </div>
            <Button className="w-full mt-2">Agendar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
