import { useContext, createContext } from 'react';
import { ThemesType } from '@Types';

type State<T> = {
  theme: T;
  switchTheme: (value: T) => void;
};
const state: State<ThemesType> = {
  theme: 'dark',
  switchTheme: value => value,
};

export const ThemeState = createContext(state);

export const useThemeState = () => {
  return useContext(ThemeState);
};
