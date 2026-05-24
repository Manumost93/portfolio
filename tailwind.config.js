/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fondos oscuros tipo acero
        steel: {
          950: '#060709',
          900: '#080a0d',
          800: '#0d1018',
          700: '#141820',
          600: '#1e2535',
        },
        // Plata/cromo para acentos metálicos
        chrome: {
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        metal: '0 1px 0 rgba(203,213,225,0.06) inset, 0 -1px 0 rgba(0,0,0,0.3) inset, 0 4px 32px rgba(0,0,0,0.45)',
        'metal-hover': '0 1px 0 rgba(203,213,225,0.12) inset, 0 -1px 0 rgba(0,0,0,0.35) inset, 0 8px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
