import type { Config } from 'tailwindcss';
import TailwindCSSMotion from 'tailwindcss-motion';

const config: Config = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#b60821',
      },
    },
  },
  plugins: [TailwindCSSMotion],
};

export default config;
