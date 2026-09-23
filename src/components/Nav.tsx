import { useEffect, useState } from 'react';
import { GatewayLogo } from './GatewayLogo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur py-3' : 'bg-transparent py-5'
      }`}
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-indigo font-serif text-lg font-semibold tracking-tight"
        >
          <span className="text-amber">
            <GatewayLogo className="w-6 h-6" />
          </span>
          <span>SANGAM</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          <a href="#problem" className="hover:text-indigo transition-colors">Problem</a>
          <a href="#features" className="hover:text-indigo transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-indigo transition-colors">How it works</a>
          <a href="#integrations" className="hover:text-indigo transition-colors">Integrations</a>
        </div>

        <a
          href="#signup"
          className="btn-primary inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-indigo-dark hover:bg-amber"
        >
          <span>Join Early Access</span>
        </a>
      </div>
    </nav>
  );
}
