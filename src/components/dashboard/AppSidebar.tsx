import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";
import {
  PlayCircle, LayoutDashboard, Mic, GitBranch, ListChecks,
  Sparkles, Plug, Settings, Users, Code2, CreditCard,
} from "lucide-react";

const groups = [
  {
    label: "Ação",
    items: [
      { title: "Iniciar reunião", url: "/dashboard/inicio_reuniao", icon: PlayCircle, accent: true },
    ],
  },
  {
    label: "Visão geral",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, exact: true },
    ],
  },
  {
    label: "Reuniões",
    items: [
      { title: "Lista de reuniões", url: "/dashboard/lista_reunioes", icon: Mic },
      { title: "Fluxogramas", url: "/dashboard/fluxogramas", icon: GitBranch },
      { title: "Tarefas & Ações", url: "/dashboard/tarefas", icon: ListChecks },
    ],
  },
  {
    label: "Inteligência",
    items: [
      { title: "Insights IA", url: "/dashboard/insights_ia", icon: Sparkles },
      { title: "Integrações", url: "/dashboard/integracoes", icon: Plug },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "Configurações", url: "/dashboard/configuracoes", icon: Settings },
      { title: "Equipe", url: "/dashboard/equipe", icon: Users },
      { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
      { title: "API / Developers", url: "/dashboard/api", icon: Code2 },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-1.5">
          <div className="h-7 w-7 rounded-md bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center text-[11px] font-semibold shrink-0">M</div>
          {!collapsed && <span className="font-semibold text-sidebar-foreground">Minuta</span>}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            {!collapsed && <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-sidebar-foreground/50">{g.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((it) => {
                  const active = it.exact ? path === it.url : path.startsWith(it.url);
                  return (
                    <SidebarMenuItem key={it.url}>
                      <SidebarMenuButton asChild isActive={active} tooltip={it.title}
                        className={it.accent ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 data-[active=true]:bg-sidebar-primary" : ""}>
                        <Link to={it.url}>
                          <it.icon className="h-4 w-4" />
                          <span>{it.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
