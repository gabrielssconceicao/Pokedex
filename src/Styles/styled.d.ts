import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      teal: string;
      cyan: string;
      blue: string;
      indigo: string;
      purple: string;
      pink: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      primary: string;
      secondary: string;
      darkPrimary: string;
      darkSecundary: string;
      tertiary: string;
    };

    fontSize: {
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };

    components: {
      nav: {
        height: string;
      };
      pagination: {
        height: string;
      };
      pokemonNavDetails: {
        width: string;
        mediaHeight: string;
        mediaWidth: string;
      };

      pokemonContainer: {
        width: string;
        height: string;
        borderRadius: string;
        backgroundColor: string;
        mediaWidth: string;
      };

      pokeTitle: {
        height: string;
        mediaHeight: string;
      };

      pokemonInfo: {
        pokeImg: {
          height: string;
          maxHeight: string;
          width: string;
          mobileWidth: string;
          imgWidth: string;
          mobileImgWidth: string;
        };
        pokeDescription: {
          height: string;
          width: string;
        };
        pokeAbilities: {
          height: string;
          width: string;
          ability: {
            abitilyDescWidth: string;
            abitilyNameWidth: string;
          };
        };
        pokeStatus: {
          height: string;
          width: string;
        };
      };
    };

    deviceSize: {
      tablet: string;
    };
  }
}
