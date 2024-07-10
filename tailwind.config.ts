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
      backgroundColor: ({ theme }) => ({
        // this is the workaround
        primary: `color-mix(in oklab, ${theme('colors.primary')} calc(100% * var(--tw-bg-opacity, 1)), transparent)`,
      }),
    },
  },
  plugins: [],
} satisfies Config

