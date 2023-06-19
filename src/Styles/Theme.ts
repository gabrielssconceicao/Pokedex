import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#0C0D0F',
    red: '#E03131',
    orange: '#E8590C',
    yellow: '#FCC419',
    green: '#23DB42',
    teal: '#89DD13',
    cyan: '#3BC9DB',
    blue: '#25BEFF',
    indigo: '#4263Eb',
    purple: '#7E5CEF',
    pink: '#FE5895',
    gray100: '#FAFAFA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#A4ACB4',
    gray600: '#64666B',
    gray700: '#424449',
    gray800: '#1D1E21',
    gray900: '#141518',

    primary: '#c00',
    darkPrimary: '#f00',

    secondary: '#ffde00',
    darkSecundary: '#b3a125',

    tertiary: '#3b4cca',
  },

  fontSize: {
    xs: '1.5rem',
    sm: '2rem',
    md: '2.5rem',
    base: '3rem',
    lg: '3.5rem',
    xl: '4rem',
    '2xl': '4.5rem',
    '3xl': '5rem',
    '4xl': '5.5rem',
    '5xl': '6rem',
  },

  components: {
    pokemonNavDetails: {
      width: '7rem',
      mediaHeight: '6rem',
      mediaWidth: '100vw',
    },

    pokemonContainer: {
      width: '40%',
      height: '16rem',
      borderRadius: '2rem',
      backgroundColor: '#ddd',

      mediaWidth: '100%',
    },
  },
};
