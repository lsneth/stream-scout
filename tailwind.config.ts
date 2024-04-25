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
        'home-design': 'url(/defaultBackdrop.jpg)',
      },
      colors: {
        black: '#09162E',
        accent1: '#921D54',
        accent2: '#24B6D0',
      },
      spacing: {
        '108': '27rem',
      },
    },
  },
  plugins: [],
}
export default config
