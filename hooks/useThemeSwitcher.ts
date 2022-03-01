import { useState, useEffect } from 'react';
// Types
import { ThemesType } from '@Types';
// Context
import { useThemeStore } from '@Store/themeStore';

export const useThemeSwitcher = (key: string) => {
  const store = useThemeStore();
  const [switcher, setSwitcher] = useState<ThemesType>(store.theme);

  useEffect(() => {
    const lS = localStorage.getItem(key) as ThemesType;

    if (!lS) return localStorage.setItem(key, store.theme);

    setSwitcher(lS);
    store.setTheme(lS);
    document.documentElement.dataset.theme = lS;
  }, [key, store]);

  const switchThemeHandler = (value: ThemesType) => {
    localStorage.setItem(key, value);
    setSwitcher(value);
    store.setTheme(value);
    document.documentElement.dataset.theme = value;
  };

  return [switcher, switchThemeHandler] as const;
};
