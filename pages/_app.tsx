import type { AppProps } from 'next/app';
import Head from 'next/head';
// import { Provider, atom, useAtom } from 'jotai';
// Context
import { ThemeStore } from '@Store/themeStore';
// Hook
import { useThemeSwitcher } from '@Hooks/useThemeSwitcher';
// Styling
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@Styles/global';
import { themes } from '@Styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useThemeSwitcher();

  // console.log('__app', theme);

  return (
    // <Provider>
    <ThemeProvider theme={themes[theme]}>
      {/* <ThemeStore.Provider value={{ theme, setTheme }}> */}
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        <meta name="application-name" content="devan.fi" />
        <meta name="author" content="Anton" />
        <meta name="format-detection" content="address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
        <meta
          name="keywords"
          content="UI/UX Designer, UI Designer, Web Designer, UI Developer, FronEnd Developer, Fullstack Developer, React Developer, Javascript Developer, Javascript, Typescript, HTML5, CSS3"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#F3F3F4"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#18171c"
          /> */}

        {/* <link rel="alternate" href="https://devan.fi/ru" hrefLang="ru" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" /> */}
        {/* Apple */}
        {/* <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="devan.fi" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        /> */}
      </Head>
      <Component {...pageProps} />
      {/* </ThemeStore.Provider> */}
    </ThemeProvider>
    // </Provider>
  );
}

export default MyApp;
