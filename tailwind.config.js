/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primario: '#8BC0B4',
        secundario: '#9FF0E9',
        fondo:'#F1FCFB',
        Thead: '#ABE2DE',
        Tbody: '#D3F2EF',
        Tborder: '#7EACA2',
        texto:"#627C76",
        acordeon: '#D3F2EF',
        mostrar: '#AADBD7',
        MoElim:'#AAEADB',
        TextElim: '#357868',
        BotCan: '#7ED3BF',
        TextAten: '#0F4C3E',
        ModalSer: '#BBEEE3',
        InputSer: '#99D7CA',
        GrisBorde: '#AAAAAA',
        AzulBorde: '#85BEB1',


      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
        KiwiMaru: ['Kiwi Maru', 'serif'],
      },
      borderColor: {
        'busqueda': '#AAAAAA',
      },
    },
  },
  plugins: [],
}

