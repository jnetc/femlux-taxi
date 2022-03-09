import { useContext, createContext } from 'react';
import { ThemesType } from '@Types';

type State = {
  theme: ThemesType;
  switchTheme: (value: ThemesType) => void;
};
const state: State = {
  theme: 'dark',
  switchTheme: value => value,
};

export const ThemeState = createContext(state);

export const useThemeState = () => {
  return useContext(ThemeState);
};
