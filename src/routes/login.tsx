import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Minuta" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex bg-foreground text-background p-12 flex-col justify-between grain">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-background text-foreground grid place-items-center text-[11px] font-semibold">
            M
          </div>
          <span className="font-semibold">Minuta</span>
        </Link>
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-widest opacity-60">Welcome back</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight font-semibold text-balance">
            "We left the meeting with the notes ready. No going back."
          </h1>
          <p className="mt-6 text-sm opacity-70">— Camila Souza, Head of Operations at Helio</p>
        </div>
        <div className="text-xs opacity-60 font-mono">© Minuta Labs · 2026</div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm fade-up">
          <Link to="/" className="md:hidden flex items-center gap-2 mb-12">
            <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-semibold">
              M
            </div>
            <span className="font-semibold">Minuta</span>
          </Link>
          <h2 className="font-display text-3xl tracking-tight font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">Continue where you left off.</p>

          <div className="mt-8 space-y-2">
            <Button variant="outline" className="w-full justify-center h-11">
              <GoogleIcon /> Continue with Google
            </Button>
            <Button variant="outline" className="w-full justify-center h-11">
              <LinkedinIcon /> Continue with LinkedIn
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> or with email{" "}
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-xs">
                Username or email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1.5 h-11"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <Label htmlFor="pwd" className="text-xs">
                  Password
                </Label>
                <a href="#" className="text-xs text-muted-foreground hover:underline">
                  Forgot?
                </a>
              </div>
              <Input id="pwd" type="password" placeholder="••••••••" className="mt-1.5 h-11" />
            </div>
            <Button asChild className="w-full h-11">
              <Link to="/dashboard">Sign in</Link>
            </Button>
          </form>

          <p className="mt-8 text-sm text-center text-muted-foreground">
            New here?{" "}
            <a href="#" className="text-foreground underline underline-offset-4">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4-5.5 4-3.3 0-6-2.7-6-6.1S8.7 5.9 12 5.9c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"
      />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-5.3c0-1.3-.5-2.2-1.7-2.2a1.8 1.8 0 00-1.7 1.2c-.1.2-.1.5-.1.8V19h-3V9h3v1.3a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4V19z" />
    </svg>
  );
}
