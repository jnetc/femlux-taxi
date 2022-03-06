import { useRouter } from 'next/router';
import { FC, useRef, useCallback, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { LangMenuButton } from './LangMenuButton';

import { useStore } from '@Hooks/useZustand';

const LangMenuStyle = styled.div<{ show: boolean }>`
  width: var(--lang-switcher-height-width);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  top: calc(var(--lang-switcher-height-width) + 0.5rem);
  border-radius: 0 0 25px 25px;
  /* clip-path: ${({ show }) =>
    show ? 'circle(125px at 25px 25px)' : 'circle(0px at 25px -25px)'}; */
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-25px)')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;

export const LangMenu: FC<{ showMenu: boolean }> = ({ showMenu }) => {
  const { asPath, locale } = useRouter();
  const { switchLang } = useStore();
  const [active, setActive] = useState('fi');

  const selectLanguage = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    const txt = el.textContent as 'ru' | 'en' | 'fi';
    switchLang(txt);
  };
  console.log('__LangMenu', locale);

  return (
    <>
      <LangMenuButton path={asPath} isActive={locale === 'fi'} lang="fi" />
      <LangMenuButton path={asPath} isActive={locale === 'ru'} lang="ru" />
      <LangMenuButton path={asPath} isActive={locale === 'en'} lang="en" />
    </>
    // <LangMenuStyle show={showMenu} onClick={selectLanguage}>
    //   {locale !== 'ru' && <LangMenuButton path={asPath} lang="ru" />}
    //   {locale !== 'fi' && <LangMenuButton path={asPath} lang="fi" />}
    //   {locale !== 'en' && <LangMenuButton path={asPath} lang="en" />}

    // </LangMenuStyle>
  );
};
