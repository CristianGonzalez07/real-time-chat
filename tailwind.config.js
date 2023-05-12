import scrollbar from 'tailwind-scrollbar';

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bg-primary':"#232C33",
        'bg-secondary':"#323F49"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [scrollbar],
}
