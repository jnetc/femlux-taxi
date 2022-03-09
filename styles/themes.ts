declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bg: string;
      primary: string;
      secondary: string;
      txtPrimaryClr: string;
      txtSecondaryClr: string;

      primaryTransparant25: string;
      primaryTransparant15: string;
      darkShadowTransparant15: string;

      txtSelectedLang: string;
      borderClr: string;
      cardShadow: string;
    };
  }
}

const themes = {
  light: {
    borderRadius: '15px',
    colors: {
      bg: 'hsl(0, 0%, 96%)',
      primary: 'hsl(315, 100%, 70%)',
      secondary: 'hsl(251, 35%, 56%)',
      txtPrimaryClr: 'hsl(75, 12%, 7%)',
      txtSecondaryClr: 'hsl(0, 0%, 32%)',
      txtSelectedLang: 'hsl(75, 12%, 7%)',

      primaryTransparant25: 'hsla(315, 100%, 70%, .25)',
      primaryTransparant15: 'hsla(315, 100%, 70%, .15)',
      darkShadowTransparant15: 'hsla(0,0,0, .15)',

      borderClr: 'hsl(233, 17%, 90%)',
      cardShadow: 'hsl(240, 40%, 89%)',
    },
  },

  dark: {
    borderRadius: '50px',
    colors: {
      bg: 'hsl(76, 13%, 17%)',
      primary: 'hsl(315, 100%, 70%)',
      secondary: 'hsl(251, 35%, 56%)',
      txtPrimaryClr: 'hsl(0, 0%, 96%)',
      txtSecondaryClr: 'hsl(0, 0%, 75%)',
      txtSelectedLang: 'hsl(75, 12%, 7%)',

      primaryTransparant25: 'hsla(315, 100%, 70%, .25)',
      primaryTransparant15: 'hsla(315, 100%, 70%, .15)',
      darkShadowTransparant15: 'hsla(0,0,0, .15)',

      borderClr: 'hsl(241, 30%, 52%)',
      cardShadow: 'hsl(240, 26%, 17%)',
    },
  },
};

export { themes };
