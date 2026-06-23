export default {
    content: ['./index.html', './src/**\/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          canvas: '#ECE1D1',
          mid: '#E3D5C1',
          deep: '#DCCBB3',
          shadow: '#B79A6E',
          highlight: '#F2E8D8',
          ink: '#111111',
          bronze: '#8A6A42',
          hairline: '#CBB89C',
        },
        fontFamily: {
          serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        letterSpacing: {
          widest2: '0.25em',
          widest3: '0.35em',
        },
      },
    },
    plugins: [],
  }