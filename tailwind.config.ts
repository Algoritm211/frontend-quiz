import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'telegram-bg': 'var(--telegram-bg-color)',
        'telegram-text': 'var(--telegram-text-color)',
        'telegram-hint': 'var(--telegram-hint-color)',
        'telegram-link': 'var(--telegram-link-color)',
        'telegram-button': 'var(--telegram-button-color)',
        'telegram-button-text': 'var(--telegram-button-text-color)',
        'telegram-bg-secondary': 'var(--telegram-secondary-bg-color)',
        'telegram-header-bg': 'var(--telegram-header-bg-color)',
        'telegram-accent-text': 'var(--telegram-accent-text-color)',
        'telegram-section-bg': 'var(--telegram-section-bg-color)',
        'telegram-section-header-text': 'var(--telegram-section-header-text-color)',
        'telegram-section-separator': 'var(--telegram-section-separator-color)',
        'telegram-subtitle-text': 'var(--telegram-subtitle-text-color)',
        'telegram-destructive-text': 'var(--telegram-destructive-text-color)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
