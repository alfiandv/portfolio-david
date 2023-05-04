/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs' : '0px',
        
        'nv988' : '988px',
        'nv725' : '725px',
        'nv745' : '745px',
        'nv766' : '766px',
        'nv767' : '767px',
        'nv882' : '882px',
        'nv900' : '900px',
        'nv970' : '970px'
      },
      spacing:{
        '65%': '65%',
        '5%' : '5%',
        '10%' : '10%',
        '15%' : '15%'
      },
      padding:{
        '60px': '60px',
        '30' : '120px'
      },
      fontSize:{
        'display1' : ['61px', '120%'],
        'display2' : ['49px', '120%'],
        'heading1': ['39px', '120%'],
        'heading2': ['31px', '120%'],
        'heading3': ['25px', '120%'],
        'heading4': ['20px', '120%'],
        'heading5' : ['16px', '120%'],
        'heading6' : ['12px', '120%'],
      },
      colors: {
        'hijauA3B18A' : '#A3B18A',
        'hijau3A5A40' : '#3A5A40',
        'hijau344E41' : '#344E41',
        'hijauDAD7CD' : '#DAD7CD',
        'hijau588157' : '#588157',
        'merah2E2C2F' : '#2E2C2F',
        'abudad7cd' : '#dad7cd',
        'abu344e41' : '#344e41'
      },
      minHeight: {
        '84%' : '84.3vh'
      },
      height: {
        '660' : '41.25rem',
        '630' : '39.375rem'
      },
      fontFamily: {
        archivo : ['Archivo']
      }
    },
  },
  plugins: [],
}

// xs = dibawah 648px 
// sm = dibawah 768px
// md = dibawah 1024px
// lg = dibawah 1280px
// xl = dibawah 1536px
// 2xl = 1536px