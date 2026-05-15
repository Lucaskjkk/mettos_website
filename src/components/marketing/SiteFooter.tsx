import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-semibold">M</div>
            <span className="font-semibold">Minuta</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A inteligência que transforma reuniões em decisões, fluxos e ação.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Produto</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/precos" className="hover:underline">Preços</Link></li>
            <li><a href="#" className="hover:underline">Integrações</a></li>
            <li><a href="#" className="hover:underline">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Empresa</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><a href="#" className="hover:underline">Contato</a></li>
            <li><a href="#" className="hover:underline">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacidade</a></li>
            <li><a href="#" className="hover:underline">Termos</a></li>
            <li><a href="#" className="hover:underline">LGPD</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Minuta Labs. Todos os direitos reservados.</span>
          <span className="font-mono">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
