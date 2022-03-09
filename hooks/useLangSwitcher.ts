import { useEffect, useState } from 'react';
// Type
import { selectedLanguage, LanguagesType } from '@Types';

export const useLangSwitcher = (
  lang: LanguagesType,
  arrOfLanguages: Array<string>
) => {
  const [langs, setLangsArr] = useState(arrOfLanguages);

  useEffect(() => {
    const lS = localStorage.getItem('langs');
    if (!lS) {
      localStorage.setItem('langs', JSON.stringify(['fi', 'ru', 'en']));
      setLangsArr(['fi', 'ru', 'en']);
      return;
    }

    const parseLocalStorage = JSON.parse(lS) as Array<string>;
    const newLangArray = selectedLanguage(lang, parseLocalStorage);

    setLangsArr(newLangArray);
    localStorage.setItem('langs', JSON.stringify(newLangArray));
  }, [lang]);

  return [langs] as const;
};
