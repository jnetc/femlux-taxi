declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bg: string;
      primary: string;
      secondary: string;
      textClr: string;
      borderClr: string;
      cardShadow: string;
    };
  }
}

const themes = {
  light: {
    borderRadius: '15px',
    colors: {
      bg: 'hsl(240, 4%, 95%)',
      primary: 'hsl(315, 100%, 70%)',
      secondary: 'hsl(59, 94%, 57%)',
      textClr: 'hsl(75, 12%, 7%)',
      borderClr: 'hsl(233, 17%, 90%)',
      cardShadow: 'hsl(240, 40%, 89%)',
    },
  },

  dark: {
    borderRadius: '50px',
    colors: {
      bg: 'hsl(240, 26%, 22%)',
      primary: 'hsl(241, 30%, 52%)',
      secondary: 'hsl(241, 52%, 52%)',
      textClr: 'hsl(240, 69%, 90%)',
      borderClr: 'hsl(241, 30%, 52%)',
      cardShadow: 'hsl(240, 26%, 17%)',
    },
  },
};

export { themes };
