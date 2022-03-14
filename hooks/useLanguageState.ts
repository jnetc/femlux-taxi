import { useContext, createContext } from 'react';
import { LanguagesType, DataType } from '@Types';

type State = {
  language: LanguagesType;
  languages: Array<string>;
  switchLang: (value: LanguagesType) => void;
  switchLanguages: (arr: Array<string>) => void;
  data: DataType | null;
};
const state: State = {
  language: 'fi',
  languages: [],
  switchLang: lang => lang,
  switchLanguages: arr => arr,
  data: null,
};

export const LanguageState = createContext(state);

export const useLanguageState = () => {
  return useContext(LanguageState);
};
