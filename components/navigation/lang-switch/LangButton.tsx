import { useRouter } from 'next/router';
import { useState, MouseEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
// Hooks
import { useStore } from '@Hooks/useZustand';
// Components
import { LangMenuButton } from './LangMenuButton';

const LangSwitchStyle = styled.div<{ isActive: boolean }>`
  --lang-switcher-height-width: 3.125rem;
  --space-button: 0.5rem;
  width: var(--lang-switcher-height-width);
  height: var(--lang-switcher-height-width);
  position: relative;

  &.show-menu > button:nth-of-type(2) {
    opacity: 1;
    transition-delay: 0s;
    transform: translateY(
        calc(var(--lang-switcher-height-width) + var(--space-button))
      )
      scale(1);
  }
  &.show-menu > button:nth-of-type(3) {
    opacity: 1;
    transition-delay: 0.1s;
    transform: translateY(
        calc(var(--lang-switcher-height-width) * 2 + var(--space-button) * 2)
      )
      scale(1);
  }
`;

export const LangButton = () => {
  const { asPath } = useRouter();
  const { lang } = useStore();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [langArr, setLangArr] = useState(['fi', 'ru', 'en']);

  const langMenuHandler = (event: MouseEvent<HTMLDivElement>) => {
    setShowLangMenu(!showLangMenu);
    const el = event.target as HTMLDivElement;
    console.log(el.textContent);
    const selected = langArr.find(l => l === el.textContent) as string;
    const unselected = langArr.filter(language => language !== el.textContent);
    setLangArr([selected, ...unselected]);
  };

  useEffect(() => {
    if (!showLangMenu) return;

    const outsideClick = () => setShowLangMenu(!showLangMenu);
    document.addEventListener('click', outsideClick);

    return () => document.removeEventListener('click', outsideClick);
  }, [showLangMenu]);

  const buttonsOrder = langArr.map(order => {
    return (
      <LangMenuButton
        key={order}
        path={asPath}
        isActive={lang === order}
        lang={order}
      />
    );
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
