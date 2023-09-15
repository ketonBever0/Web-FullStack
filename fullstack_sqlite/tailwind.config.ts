import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      themes: [
        {
          oldal: {
            "primary": "#068D9D",
            "secondary": "#53599A",
            "accent": "#B3001B",
            "neutral": "#BFB48F",
            "base-100": "#CFD11A",
          }
        }
      ]
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue_munsell': { DEFAULT: '#068d9d', 100: '#011c1f', 200: '#02393f', 300: '#03555e', 400: '#05727e', 500: '#068d9d', 600: '#08cbe0', 700: '#36e4f8', 800: '#79edfa', 900: '#bcf6fd' }, 'ultra_violet': { DEFAULT: '#53599a', 100: '#10121e', 200: '#21233d', 300: '#31355b', 400: '#42467a', 500: '#53599a', 600: '#7075b2', 700: '#9498c5', 800: '#b7bad8', 900: '#dbddec' }, 'cornell_red': { DEFAULT: '#b3001b', 100: '#240005', 200: '#47000b', 300: '#6b0010', 400: '#8f0015', 500: '#b3001b', 600: '#f50025', 700: '#ff3856', 800: '#ff7a8e', 900: '#ffbdc7' }, 'ecru': { DEFAULT: '#bfb48f', 100: '#2a2618', 200: '#544c30', 300: '#7e7249', 400: '#a69664', 500: '#bfb48f', 600: '#cbc2a4', 700: '#d8d1bb', 800: '#e5e0d2', 900: '#f2f0e8' }, 'pear': { DEFAULT: '#cfd11a', 100: '#292a05', 200: '#52540a', 300: '#7b7d0f', 400: '#a5a715', 500: '#cfd11a', 600: '#e4e73b', 700: '#ebed6c', 800: '#f1f39d', 900: '#f8f9ce' }
    }

  },
  plugins: [require("daisyui")],
}
export default config
