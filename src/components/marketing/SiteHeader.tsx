import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <>
      {/* Fixed vertical margin lines that frame all marketing pages */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <div className="mx-auto max-w-7xl h-full relative">
          <span className="absolute left-0 top-0 bottom-0 border-l hairline" />
          <span className="absolute right-0 top-0 bottom-0 border-r hairline" />
        </div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b hairline">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-semibold">M</div>
            <span className="font-semibold tracking-tight">Minuta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Product</Link>
            <Link to="/precos" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/blog" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Blog</Link>
            <a href="#changelog" className="hover:text-foreground transition-colors">Changelog</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm"><Link to="/login">Sign in</Link></Button>
            <Button asChild size="sm"><Link to="/dashboard">Get started free</Link></Button>
          </div>
        </div>
      </header>
    </>
  );
}
