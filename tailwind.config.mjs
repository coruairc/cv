/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        noir: {
          bg: '#0a0e14',
          surface: '#0f1419',
          border: '#1a2332',
          muted: '#8b9cb3',
        },
        cyan: {
          accent: '#00e5ff',
        },
        amber: {
          accent: '#ffb020',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 229, 255, 0.15)',
        'glow-amber': '0 0 24px rgba(255, 176, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
