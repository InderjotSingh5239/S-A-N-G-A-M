import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Integration {
  name: string;
  description: string;
}

const integrations: Integration[] = [
  { name: 'DigiLocker', description: 'Identity & certificate verification, document wallet' },
  { name: 'UIDAI', description: 'Identity verification' },
  { name: 'AISHE / UDISE+', description: 'Institution & enrollment records' },
  { name: 'APAAR', description: 'Academic record matching, coverage-gap data' },
  { name: 'State e-District', description: 'Income & domicile certificates' },
  { name: 'UGC-NTA', description: 'NET / JRF qualification' },
  { name: 'NSP · SFMP · NOS', description: 'Source application & disbursement data' },
  { name: 'Manual Review', description: 'Handles flagged exceptions only' },
];

export function Verification() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="integrations"
      className="bg-indigo-dark py-section px-5 sm:px-8"
      aria-label="Verification and integrations"
    >
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-amber/80">
            Verification & Integration Layer
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-base leading-tight">
            Seven systems. One verification pipeline.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-base/60 leading-relaxed">
            Every application is automatically checked against the government databases below.
            Mismatches route to manual review — applications are never blocked.
          </p>
        </div>

        {/* Infinite marquee — cards duplicated once for a seamless -50% loop */}
        <div className="marquee-mask">
          <div className="marquee-track gap-4">
            {integrations.map((integration) => (
              <IntegrationBadge
                key={integration.name}
                integration={integration}
              />
            ))}
            {integrations.map((integration) => (
              <IntegrationBadge
                key={`${integration.name}-dup`}
                integration={integration}
                decorative
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationBadge({
  integration,
  decorative = false,
}: {
  integration: Integration;
  decorative?: boolean;
}) {
  return (
    <div
      className="integration-card shrink-0 w-64 sm:w-72 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:border-amber/30 hover:bg-white/8"
      aria-hidden={decorative || undefined}
    >
      <span className="live-dot" aria-hidden="true" />
      <p className="font-mono text-sm font-medium text-amber pr-5">{integration.name}</p>
      <p className="mt-1.5 text-xs text-base/50 leading-relaxed">{integration.description}</p>
    </div>
  );
}
