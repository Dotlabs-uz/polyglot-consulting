import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Instrument Serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
