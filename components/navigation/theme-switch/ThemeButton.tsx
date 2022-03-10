import { useEffect } from 'react';
// Hook
import { useThemeState } from '@Hooks/useThemeState';
// Types
import { ThemesType } from '@Types';

import styles from './theme-button.module.css';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';

export const ThemeButton = () => {
  const { theme, switchTheme } = useThemeState();
  const toggleTheme = () => {
    const hasSameValue = theme === DARK_SCHEME ? LIGHT_SCHEME : DARK_SCHEME;
    switchTheme(hasSameValue);
  };

  useEffect(() => {
    const lS = localStorage.getItem('theme') as ThemesType;
    if (!lS) {
      localStorage.setItem('theme', DARK_SCHEME);
      document.documentElement.dataset.theme = DARK_SCHEME;
    }
    switchTheme(lS);
  }, [switchTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={styles.module} onClick={toggleTheme}>
      <span className={styles.theme_switcher} />
    </div>
  );
};
