import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Minuta" },
      { name: "description", content: "Reflexões sobre reuniões, produtividade e IA aplicada." },
    ],
  }),
  component: Blog,
});

const posts = [
  { tag: "Produtividade", title: "Por que reuniões presenciais ainda vencem o remoto", date: "12 mai 2026", read: "6 min" },
  { tag: "IA", title: "Como a Minuta extrai decisões em tempo real", date: "02 mai 2026", read: "9 min" },
  { tag: "Casos", title: "Helio reduziu 31% das reuniões improdutivas", date: "18 abr 2026", read: "4 min" },
  { tag: "Engenharia", title: "Diarização em PT-BR: o que aprendemos", date: "01 abr 2026", read: "11 min" },
];

function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Diário</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight font-semibold">Blog.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Notas sobre o que descobrimos construindo a próxima geração de reuniões.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="border-t hairline">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex items-center justify-between gap-6 py-8 border-b hairline hover:bg-muted/30 -mx-4 px-4 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read} de leitura</span>
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl tracking-tight group-hover:underline underline-offset-4">
                  {p.title}
                </h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
