import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    size-adjust: 100%;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    size-adjust: 100%;
  }
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
  :root {
    --theme-button-width-height: 30px;
    --lang-button-height-width: 3.125rem;
    --lang-button-space: 0.5rem;
    --gradient: linear-gradient( to right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary})
  }
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    transition: all .3s ease-in-out;
  }
  html, body, #__next {
    /* height: max(800px, 100%); */
    height: 100%;
  }
  body {
    max-width: 1920px;
    min-height: 100vh;
    position: relative;
    padding: 2rem 2.5rem;
    margin: 0 auto;
  }
  #__next {

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  h1, h2, h3, h4, a, li {
    font-family: 'Roboto';
    font-weight: bold;
  }

  .main-title {
    font-size: 6em;
    line-height: 1.1;
  }
  .title {
    font-size: 2em;
  }

  p, span {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.txtSecondaryClr};
  }
  .description {
    font-size: 1.5em;
    line-height: 1.3;

  }
  .paragraph {
    font-size: 1.125em;
    line-height: 1.4;
  }

  html[data-theme='light'] .theme-switcher,
  html[data-theme='dark'] .theme-switcher {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.txtPrimaryClr};
    border-radius: 50%;
     transition: all 0.3s ease-in-out;
  }
  html[data-theme='light'] .theme-switcher::after,
  html[data-theme='dark'] .theme-switcher::after {
    content: '';
    width: calc(var(--theme-button-width-height) / 1.5);
    height: calc(var(--theme-button-width-height) / 1.5);
    position: absolute;
    top: calc(-1 * var(--theme-button-width-height) / 4);
    right: calc(-1 * var(--theme-button-width-height) / 4);
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    z-index: 3;
  }

  html[data-theme='light'] .theme-switcher {
    width: calc(var(--theme-button-width-height) / 1.7);
    height: calc(var(--theme-button-width-height) / 1.7);
    transform: translate(-50%, -50%) rotate(-55deg);
    box-shadow: 14px 0 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      -14px 0 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      0 14px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      0 -14px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      10px 10px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      -10px -10px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      -10px 10px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr},
      10px -10px 0 -6.5px ${({ theme }) => theme.colors.txtPrimaryClr};
    }
  html[data-theme='light'] .theme-switcher::after {
    transform: translateX(100px);
  }
  html[data-theme='dark'] .theme-switcher::after {
    transform: translateX(0);
  }
  html[data-theme='dark'] .theme-switcher {
    width: calc(var(--theme-button-width-height) / 1.7);
    height: calc(var(--theme-button-width-height) / 1.7);
    transform: translate(-50%, -50%) rotate(0);
    box-shadow: 0px 0 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      -0px 0 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      0 0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      0 -0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      0px 0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      -0px -0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      -0px 0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr},
      0px -0px 0 -0px ${({ theme }) => theme.colors.txtPrimaryClr};
  }

`;
