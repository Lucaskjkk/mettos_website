import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/integracoes")({
  component: Integracoes,
});

const tools = [
  { t: "Slack", d: "Envia resumos e tarefas para canais.", on: true },
  { t: "Notion", d: "Sincroniza atas em uma database.", on: true },
  { t: "Jira", d: "Cria issues a partir de tarefas detectadas.", on: false },
  { t: "Microsoft Teams", d: "Notificações e bot oficial.", on: false },
  { t: "Trello", d: "Adiciona cards no board do projeto.", on: false },
  { t: "Google Calendar", d: "Importa eventos e linka reuniões.", on: true },
];

function Integracoes() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Conexões</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Integrações</h1>
      <p className="mt-2 text-sm text-muted-foreground">Conecte a Minuta às ferramentas onde seu time já trabalha.</p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {tools.map((t) => (
          <div key={t.t} className="bg-card p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-md bg-foreground text-background grid place-items-center font-medium">{t.t[0]}</div>
              {t.on && <span className="text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" /> Conectado
              </span>}
            </div>
            <h3 className="mt-6 font-medium">{t.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground flex-1">{t.d}</p>
            <Button variant={t.on ? "outline" : "default"} size="sm" className="mt-6 w-fit">
              {t.on ? "Gerenciar" : "Conectar"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
