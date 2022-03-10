import { useState } from 'react';
import styles from './copy-button.module.css';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const CopyButton = () => {
  const { language } = useLanguageState();
  const [isCopy, setIsCopy] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+358504645221');
    setIsCopy(true);
    const clean = setTimeout(() => {
      setIsCopy(false);
      clearTimeout(clean);
    }, 3000);
  };

  return (
    <button
      className={
        isCopy ? `${styles.module} ${styles.is_copy}` : `${styles.module}`
      }
      onMouseDown={copyPhoneNumber}
      title={title[language]}
      aria-label={title[language]}
      data-copy={dataCopy[language]}
    >
      <span className={`${styles.copied_icon}`} />
      <span className={`${styles.copy_icon}`} />
    </button>
  );
};

const dataCopy = {
  en: 'number copied',
  fi: 'numero kopioitu',
  ru: 'номер скопирован',
};
const title = {
  en: 'copy phone number',
  fi: 'kopioi puhelinnumero',
  ru: 'скопировать номер телефона',
};
