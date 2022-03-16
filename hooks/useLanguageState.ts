import { useContext, createContext } from 'react';
import { LanguagesType, DataType } from '@Types';

type State = {
  language: LanguagesType;
  languages: Array<string>;
  data: DataType | null;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
};

export const LanguageState = createContext(state);

export const useLanguageState = () => {
  return useContext(LanguageState);
};
