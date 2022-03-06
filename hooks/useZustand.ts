import create from 'zustand';
import { ThemesType } from '@Types';

export type LangType = 'ru' | 'en' | 'fi';

type State = {
  theme: ThemesType;
  lang: LangType;
  switchTheme: (value: ThemesType) => void;
  switchLang: (value: LangType) => void;
};

export const useStore = create<State>(set => ({
  theme: 'dark',
  lang: 'ru',
  switchTheme: (value: ThemesType) =>
    set(state => ({ theme: state.theme === value ? state.theme : value })),
  switchLang: (lang: LangType) =>
    set(state => ({ lang: state.lang === lang ? state.lang : lang })),
}));
