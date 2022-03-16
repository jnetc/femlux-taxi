import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
// Hooks
import { useLanguageState } from '@Hooks/useLanguageState';
// Components
import { LangMenuButton } from './LangMenuButton';
import styles from './lang-button.module.css';

export const LangButton = () => {
  const { asPath, locale } = useRouter();
  const { languages } = useLanguageState();

  const [showLangMenu, setShowLangMenu] = useState(false);

  const langMenuHandler = () => setShowLangMenu(true);

  // Handle outside click
  useEffect(() => {
    if (!showLangMenu) return;

    const outsideClick = () => setShowLangMenu(false);
    document.addEventListener('click', outsideClick);

    return () => document.removeEventListener('click', outsideClick);
  }, [showLangMenu]);

  const buttonsOrder = languages.map(order => {
    return <LangMenuButton key={order} path={asPath} lang={order} />;
  });

  return (
    <div
      role="button"
      aria-label="language switcher"
      title="language switcher"
      onClick={langMenuHandler}
      className={
        showLangMenu
          ? `${styles.module} ${styles.show_menu}`
          : `${styles.module}`
      }
    >
      {locale}
      {buttonsOrder}
    </div>
  );
};
