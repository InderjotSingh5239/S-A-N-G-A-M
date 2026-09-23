/**
 * Gateway/arch logo mark — a simple abstract arch rendered as inline SVG.
 * Uses currentColor for stroke so it adapts to light/dark contexts.
 */
export function GatewayLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 28V16a10 10 0 0 1 20 0v12" />
      <path d="M3 28h26" />
      <path d="M12 28v-8a4 4 0 0 1 8 0v8" />
    </svg>
  );
}

/**
 * Larger decorative arch illustration for the gateway diagram band.
 */
export function ArchIllustration({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M30 150V80a70 70 0 0 1 140 0v70" opacity="0.4" />
      <path d="M50 150V88a50 50 0 0 1 100 0v62" opacity="0.6" />
      <path d="M70 150V96a30 30 0 0 1 60 0v54" opacity="0.8" />
      <path d="M90 150v-42a10 10 0 0 1 20 0v42" />
      <path d="M20 150h160" opacity="0.3" />
      <circle cx="100" cy="38" r="3" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}
