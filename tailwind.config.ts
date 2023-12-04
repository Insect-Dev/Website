import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-d': '100dvh',
      },
      colors: {
        primary: {
          100: '#e7f6f8',
          200: '#cfeef1',
          300: '#b8e5eb',
          400: '#a0dde4',
          500: '#88d4dd',
          600: '#6daab1',
          700: '#527f85',
          800: '#365558',
          900: '#1b2a2c',
        },
        secondary: {
          100: '#d8e4ea',
          200: '#b1c9d5',
          300: '#8aaec0',
          400: '#6393ab',
          500: '#3c7896',
          600: '#306078',
          700: '#24485a',
          800: '#18303c',
          900: '#0c181e',
        },
        gray: {
          100: '#dfe1e1',
          200: '#bfc3c3',
          300: '#a0a4a4',
          400: '#808686',
          500: '#606868',
          600: '#4d5353',
          700: '#3a3e3e',
          800: '#262a2a',
          900: '#131515',
        },
      },
    },
  },
  plugins: [],
}
export default config
