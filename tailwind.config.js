/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'gray': '#F0F0F0',
        'red': '#FF3333',
        'red-50': 'rgba(255, 51, 51, 0.1)'
      },
      screens: {
        'mobile': '375',
        'tablet': '575px', // Custom tablet breakpoint
        'desktop': '992px', // Custom desktop breakpoint
      }
    },
    fontFamily: {
      Poppins: 'Poppins, sans-serif',
      Lato: 'Lato, sans-serif'
    },
    container: {
      center: true,
      padding: '10rem'
    }

  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  }
}
