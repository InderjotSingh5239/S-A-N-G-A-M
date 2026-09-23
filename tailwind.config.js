/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1F2A',
        base: '#F4EFE6',
        indigo: {
          DEFAULT: '#22304F',
          dark: '#0E1526',
        },
        amber: '#D9A441',
        clay: '#B85C38',
        teal: '#2F6F62',
        card: '#EDE6D8',
        border: '#DED2B8',
      },
      spacing: {
        section: 'var(--section-spacing)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'mesh-drift': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '0.7' },
          '50%': { transform: 'rotate(180deg) scale(1.15)', opacity: '0.9' },
        },
        'mesh-drift-2': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1.1)', opacity: '0.6' },
          '50%': { transform: 'rotate(-170deg) scale(0.9)', opacity: '0.8' },
        },
        'mesh-drift-3': {
          '0%, 100%': { transform: 'rotate(0deg) scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'rotate(190deg) scale(1.2)', opacity: '0.75' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'mesh-1': 'mesh-drift 18s ease-in-out infinite',
        'mesh-2': 'mesh-drift-2 22s ease-in-out infinite',
        'mesh-3': 'mesh-drift-3 20s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
