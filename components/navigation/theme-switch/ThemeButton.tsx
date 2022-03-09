import { useEffect } from 'react';
import styled from 'styled-components';
// Hook
import { useThemeState } from '@Hooks/useThemeState';
// Types
import { ThemesType } from '@Types';

const ThemeButtonStyle = styled.div`
  width: calc(var(--theme-button-width-height) * 1.2);
  height: calc(var(--theme-button-width-height) * 1.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

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
    <ThemeButtonStyle onClick={toggleTheme}>
      <span className="theme-switcher" />
    </ThemeButtonStyle>
  );
};
