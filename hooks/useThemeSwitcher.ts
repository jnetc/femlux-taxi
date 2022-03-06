import { useState, useEffect } from 'react';
// Types
import { ThemesType } from '@Types';
// Context
// import { useThemeStore } from '@Store/themeStore';
import { useStore } from './useZustand';

export const useThemeSwitcher = () => {
  // const store = useThemeStore();
  // const [switcher, setSwitcher] = useState<ThemesType>(store.theme);
  const { theme, switchTheme } = useStore();
  // const [switcher, setSwitcher] = useState<ThemesType>(theme);

  useEffect(() => {
    const lS = localStorage.getItem('theme') as ThemesType;
    if (!lS) return localStorage.setItem('theme', 'dark');
    // setSwitcher(lS);
    // store.setTheme(lS);
    switchTheme(lS);
    document.documentElement.dataset.theme = lS;
  }, [switchTheme]);

  const switchThemeHandler = (value: ThemesType) => {
    localStorage.setItem('theme', value);
    // setSwitcher(value);
    // store.setTheme(value);
    switchTheme(value);
    document.documentElement.dataset.theme = value;
  };

  return [theme, switchThemeHandler] as const;
};
