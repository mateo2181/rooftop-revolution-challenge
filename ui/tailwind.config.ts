import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      colors: {
        'primary': colors.green[700],
        'primary-dark': colors.green[900]
      }
    },
  },
  plugins: [],
}

