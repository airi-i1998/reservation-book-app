// Styles
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { colorTheme } from '@/theme/colorTheme'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'colorTheme',
    themes: {
      colorTheme
    }
  }
})
