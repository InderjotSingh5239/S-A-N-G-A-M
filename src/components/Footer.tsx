import { GatewayLogo } from './GatewayLogo';

export function Footer() {
  return (
    <footer className="bg-ink py-16 px-5 sm:px-8" aria-label="Site footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 text-base font-serif text-lg font-semibold">
              <span className="text-amber">
                <GatewayLogo className="w-6 h-6" />
              </span>
              <span>SANGAM</span>
            </div>
            <p className="mt-3 text-sm text-base/40 leading-relaxed">
              Scheme Access & National Gateway for ST Scholarship Management.
              One platform for every MoTA scholarship.
            </p>
            <p className="mt-4 text-sm text-base/50 leading-relaxed">
              SANGAM is an independent academic/prototype project and is not an official Ministry of Tribal Affairs platform.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {/* Placeholder social links */}
            {['Twitter', 'GitHub', 'LinkedIn'].map((label) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm text-base/40 hover:text-amber transition-colors"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-base/30">
            Phase 0 — Landing & Early Access · Student Project
          </p>
          <p className="font-mono text-xs text-base/30">
            © 2026 SANGAM. Not affiliated with MoTA — educational project.
          </p>
        </div>
      </div>
    </footer>
  );
}
