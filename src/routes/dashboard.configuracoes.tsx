import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/dashboard/configuracoes")({
  component: Configuracoes,
});

function Configuracoes() {
  return (
    <div className="p-8 max-w-3xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Workspace</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Configurações</h1>

      <div className="mt-10 space-y-px bg-border rounded-2xl border hairline overflow-hidden">
        <Section title="Perfil">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label className="text-xs">Nome</Label><Input className="mt-1.5" defaultValue="Ana Ribeiro" /></div>
            <div><Label className="text-xs">Email</Label><Input className="mt-1.5" defaultValue="ana@empresa.com" /></div>
          </div>
        </Section>
        <Section title="Workspace">
          <div><Label className="text-xs">Nome do workspace</Label><Input className="mt-1.5" defaultValue="Minuta Labs" /></div>
        </Section>
        <Section title="Preferências de IA">
          <Toggle label="Detecção automática de tarefas" defaultChecked />
          <Toggle label="Geração de fluxograma após cada reunião" defaultChecked />
          <Toggle label="Resumo enviado por email" />
        </Section>
        <div className="bg-card p-6 flex justify-end">
          <Button>Salvar alterações</Button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card p-6">
      <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm">{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
