import { createContext, useContext } from 'react';
// Types
// import { ThemeState } from '@Types';

export const state = {
  content: 'dark',
  setContent: (value: string) => value,
};

export const ContentStore = createContext(state);

export const useThemeStore = () => {
  return useContext(ContentStore);
};
