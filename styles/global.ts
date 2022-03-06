import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    transition: all .5s ease-in-out;
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

  p {
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
`;
