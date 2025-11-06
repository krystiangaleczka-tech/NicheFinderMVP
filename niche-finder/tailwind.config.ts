import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          cream: '#f4f1de',
          orange: '#ff6b35',
          teal: '#00bfb3',
          purple: '#9d4edd',
          pink: '#ff006e',
          yellow: '#ffbe0b',
          blue: '#3a86ff',
          green: '#06ffa5',
          brown: '#8b4513',
          dark: '#1a1a2e',
        },
        bg: {
          primary: '#f4f1de',
          secondary: '#ffffff',
          tertiary: '#ffe8d6',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#4a4a4a',
          tertiary: '#8b8b8b',
        },
        accent: {
          DEFAULT: '#ff6b35',
          hover: '#e55a2b',
        },
        border: {
          DEFAULT: '#d4a574',
          light: '#e8d5c4',
        },
      },
      fontFamily: {
        'press-start': ['var(--font-press-start-2p)'],
        'vt323': ['var(--font-vt323)'],
        'ibm-plex': ['var(--font-ibm-plex-mono)'],
      },
      boxShadow: {
        'retro-card': '8px 8px 0 rgba(0, 0, 0, 0.1), -2px -2px 0 rgba(255, 255, 255, 0.5) inset, 2px 2px 0 rgba(0, 0, 0, 0.1) inset',
        'retro-card-hover': '12px 12px 0 rgba(0, 0, 0, 0.15), -2px -2px 0 rgba(255, 255, 255, 0.6) inset, 2px 2px 0 rgba(0, 0, 0, 0.15) inset',
        'retro-button': '4px 4px 0 var(--retro-dark), -1px -1px 0 rgba(255, 255, 255, 0.3) inset',
        'retro-button-active': '2px 2px 0 var(--retro-dark), -1px -1px 0 rgba(255, 255, 255, 0.3) inset',
        'retro-stats': '5px 5px 0 rgba(0, 0, 0, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.5) inset',
        'retro-stats-hover': '7px 7px 0 rgba(0, 0, 0, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.5) inset',
      },
      animation: {
        'scanline-1': 'scanline1 6.3s linear infinite',
        'scanline-2': 'scanline2 6.3s linear infinite',
        'scanline-3': 'scanline3 6.3s linear infinite',
        'scanline-4': 'scanline4 6.3s linear infinite',
        'scanline-5': 'scanline5 6.3s linear infinite',
        'scanline-6': 'scanline6 6.3s linear infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'press': 'press 0.1s ease-out',
      },
      keyframes: {
        scanline1: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline2: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline3: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline4: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline5: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline6: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0.7' },
        },
        press: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;