import { createContext, useContext } from 'react';
// Types
import { ThemeState } from '@Types';

export const state: ThemeState = {
  theme: 'dark',
  setTheme: value => value,
};

export const ThemeStore = createContext(state);

export const useThemeStore = () => {
  return useContext(ThemeStore);
};
