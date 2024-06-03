/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'colossus-140': ['140px', { lineHeight: '144px' }],
      'uber-112': ['112px', { lineHeight: '120px' }],
      'hero-80': ['80px', { lineHeight: '96px' }],
      'display-64': ['64px', { lineHeight: '80px' }],
      'headline-48': ['48px', { lineHeight: '60px' }],
      'headline-37': ['37px', { lineHeight: '44px' }],
      'headline-31': ['31px', { lineHeight: '48px' }],
      'headline-26': ['26px', { lineHeight: '40px' }],
      'headline-21': ['21px', { lineHeight: '32px' }],
      'lead-24': ['24px', { lineHeight: '36px' }],
      'body-18': ['18px', { lineHeight: '32px' }],
      'small-16': ['16px', { lineHeight: '28px' }],
      'caption-14': ['14px', { lineHeight: '20px' }],
      'XSmall-12': ['12px', { lineHeight: '20px' }],
      'tiny-10': ['10px', { lineHeight: '16px' }],
      'input-18': ['18px', { lineHeight: '28px' }],
      'input-16': ['16px', { lineHeight: '24px' }],
      'button-21': ['21px', { lineHeight: '32px' }],
      'button-16': ['16px', { lineHeight: '28px' }],
      'button-14': ['14px', { lineHeight: '20px' }],
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      primary: {
        950: '#180F00',
        900: '#492C01',
        800: '#925901',
        700: '#AB6801',
        600: '#CC7B00',
        500: '#F8B41D',
        400: '#F59F1B',
        300: '#F6A935',
        200: '#F8BF67',
        100: '#FCDFB3',
        50: '#FEF4E6'

      },
      secondary: {
        50: '#FCEDE7',
        100: '#F9DBD0',
        200: '#F3B7A1',
        300: '#EE9271',
        400: '#E86E42',
        500: '#E24A13',
        600: '#CB4311',
        700: '#B53B0F',
        800: '#71250A',
        900: '#441606',
        950: '#170702',

      },
      tertiary: {
        50: '#FFFBE8',
        100: '#FFF8D1',
        200: '#FFF4BA',
        300: '#FFED8C',
        400: '#FFE55E',
        500: '#FFDA19',
        600: '#E6C417',
        700: '#CCAE14',
        800: '#99830F',
        900: '#4C4107',
        950: '#191602',

      },
      bg: {
        'black': '#000000',
        '500': '#18162B',

        '400': '#201E34',
        '300': '#2E2C47',

        '50': '#e8e8ea'
      },
      success: {
        '100': '#E8F6EE',
        '200': '#D1EEDD',
        '300': '#A3DDBC',
        '400': '#5DC389',
        '500': '#18A957',
        '600': '#11763D',
        '700': '#0A4423',
        '800': '#052211',
        '900': '#021109',
      },
      warning: {
        '100': '#FFF8EB',
        '200': '#FFF1D7',
        '300': '#FFE4AF',
        '400': '#FFCF74',
        '500': '#FFBB38',
        '600': '#B38327',
        '700': '#664B16',
        '800': '#33250B',
        '900': '#191306',
      },
      error: {
        '100': '#FCE8EC',
        '200': '#F9D0D9',
        '300': '#F2A2B3',
        '400': '#E95C7B',
        '500': '#DF1642',
        '600': '#9C0F2E',
        '700': '#59091A',
        '800': '#2D040D',
        '850': '#150F10',
        '900': '#160207',
      },
      grey: {
        '50': '#FCFCFC',
        '100': '#F5F5F5',
        '200': '#EEEEEE',
        '300': '#E0E0E0',
        '400': '#BDBDBD',
        '500': '#9E9E9E',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#323232',
        '950': '#212121',
        'black': '#171717',
      },
      white: '#FFF',
    },


    extend: {
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },

      boxShadow: {
        'light-20': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 3px rgba(48, 49, 51, 0.1)',
        'light-40': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
        'light-60': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
        'light-80': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
        'light-100': '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',

        'dark-20': '0px 0px 1px rgba(13, 13, 13, 0.9), 0px 1px 3px #0D0D0D',
        'dark-40': '0px 0px 1px rgba(13, 13, 13, 0.9), 0px 2px 4px #0D0D0D',
        'dark-60': '0px 0px 1px rgba(13, 13, 13, 0.9), 0px 4px 8px #0D0D0D',
        'dark-80': '0px 0px 1px rgba(13, 13, 13, 0.9), 0px 8px 16px #0D0D0D',
        'dark-100': '0px 0px 1px rgba(13, 13, 13, 0.9), 0px 16px 24px #0D0D0D',

        'glow': '0px 0px 20px rgba(255, 218, 25, 0.24)'

      },
      fontFamily: {
        sans: ['Agrandir', 'sans-serif'],
        teko: ['Teko', 'sans-serif']
      },

      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      transitionDuration: {
        '400': '400ms',
        '450': '450ms',
        '350': '350ms',

      },
      aspectRatio: {
        '4/3': '4 / 3',

      },
      screens: {
        'xs': '1px',        // Extra small devices (phones, portrait)
        'sm': '481px',      // Small devices (phones, landscape)
        'md': '768px',      // Medium devices (tablets, portrait)
        'lg': '992px',      // Large devices (tablets, landscape)
        'xl': '1200px',     // Extra large devices (laptops/desktops)
        '2xl': '1600px',
        '3xl': '1920px'
      },
      backgroundImage: {
        'hero-bg': "url('../assets/hero-bg-1.png')",
      },

    },


  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
