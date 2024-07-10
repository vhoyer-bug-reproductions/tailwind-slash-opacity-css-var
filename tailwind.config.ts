import type { Config } from 'tailwindcss'

export default {
  content: [
    'index.html',
    'src/**/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
} satisfies Config

