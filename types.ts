export type ThemesType = 'light' | 'dark';

export type LanguagesType = 'ru' | 'en' | 'fi';

export const selectedLanguage = <T>(
  landguage: T,
  languages: Array<T>
): Array<T> => {
  const selected = languages.find(l => l === landguage) as T;
  const unselected = languages.filter(language => language !== landguage);
  return [selected, ...unselected];
};
