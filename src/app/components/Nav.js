export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">MG</a>
        <a href="#contact" className="inline-flex items-center rounded-full bg-foreground text-background px-3 py-1.5 text-sm">Let’s Connect</a>
      </nav>
    </header>
  );
}


