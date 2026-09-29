export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { paper:'#eceef5', card:'#fafafa', line:'#e4e4ea', ink:'#2b2b2e', mute:'#66666f', accent1:'#ff5f7e', accent2:'#ffa14a' },
    fontFamily: { display:['Fredoka','sans-serif'], sans:['Inter','system-ui','sans-serif'], deva:['"Noto Sans Devanagari"','sans-serif'], hand:['"Patrick Hand"','cursive'], script:['"Caveat Brush"','cursive'] },
    backgroundImage: { brand:'linear-gradient(90deg,#ff5f7e,#ffa14a)' },
    boxShadow: { soft:'0 6px 22px rgba(60,60,90,.13)', lift:'0 18px 40px rgba(40,40,70,.28)' }
  } },
  plugins: []
};
