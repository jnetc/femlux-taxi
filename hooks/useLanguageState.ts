import { useContext, createContext } from 'react';
import { LanguagesType } from '@Types';

type State = {
  language: LanguagesType;
  languages: Array<string>;
  switchLang: (value: LanguagesType) => void;
  switchLanguages: (arr: Array<string>) => void;
};
const state: State = {
  language: 'fi',
  languages: [],
  switchLang: lang => lang,
  switchLanguages: arr => arr,
};

export const LanguageState = createContext(state);

export const useLanguageState = () => {
  return useContext(LanguageState);
};
