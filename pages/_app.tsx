import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
// Hook
import { ThemeState, useThemeState } from '@Hooks/useThemeState';

// Font style
import '@Styles/fonts.css';
import '@Styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeState();
  const [state, setState] = useState(theme);

  return (
    <ThemeState.Provider
      value={{
        theme: state,
        switchTheme: setState,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        <meta name="application-name" content="femlux.fi" />
        <meta name="author" content="Anton" />
        <meta name="format-detection" content="address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
        <meta
          name="keywords"
          content="taxi, femlux, tila taxi, такси, order taxi"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#F5F5F5"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#2E3126"
        />
        <link rel="alternate" href="https://femlux.fi/ru" hrefLang="ru" />
        <link rel="alternate" href="https://femlux.fi/en" hrefLang="en" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="femlux.fi" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeState.Provider>
  );
}

export default MyApp;
