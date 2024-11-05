/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primario: '#8BC0B4',
        secundario: '#9FF0E9',
        fondo:'#F1FCFB',
        azul700: '#156E70',
        texto:"#627C76",
        acordeon: '#D3F2EF',
        mostrar: '#AADBD7',


      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
      },
      borderColor: {
        'busqueda': '#AAAAAA',
      },
    },
  },
  plugins: [],
}

