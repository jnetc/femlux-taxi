import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// Hooks
import { useLanguageState } from '@Hooks/useLanguageState';
// Components
import { LangMenuButton } from './LangMenuButton';

const LangSwitchStyle = styled.div<{ isActive: boolean }>`
  width: var(--lang-button-height-width);
  height: var(--lang-button-height-width);
  position: relative;

  &.show-menu > button:nth-of-type(2) {
    opacity: 1;
    transition-delay: 0s;
    transform: translateY(
        calc(var(--lang-button-height-width) + var(--lang-button-space))
      )
      scale(1);
  }
  &.show-menu > button:nth-of-type(3) {
    opacity: 1;
    transition-delay: 0.1s;
    transform: translateY(
        calc(var(--lang-button-height-width) * 2 + var(--lang-button-space) * 2)
      )
      scale(1);
  }
`;

export const LangButton = () => {
  const { asPath } = useRouter();
  const { languages } = useLanguageState();

  const [showLangMenu, setShowLangMenu] = useState(false);

  const langMenuHandler = () => {
    setShowLangMenu(!showLangMenu);
  };

  // Handle outside click
  useEffect(() => {
    if (!showLangMenu) return;

    const outsideClick = () => setShowLangMenu(!showLangMenu);
    document.addEventListener('click', outsideClick);

    return () => document.removeEventListener('click', outsideClick);
  }, [showLangMenu]);

  const buttonsOrder = languages.map(order => {
    return <LangMenuButton key={order} path={asPath} lang={order} />;
  });

  return (
    <LangSwitchStyle
      role="button"
      aria-label="language switcher"
      title="language switcher"
      onClick={langMenuHandler}
      isActive={showLangMenu}
      className={showLangMenu ? 'show-menu' : ''}
    >
      {buttonsOrder}
    </LangSwitchStyle>
  );
};
