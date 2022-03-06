import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

const Lang = styled.button<{ isActive?: boolean }>`
  width: var(--lang-switcher-height-width);
  height: var(--lang-switcher-height-width);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.txtSelectedLang : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.bg};
  font-size: 1.125em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:nth-of-type(1) {
    z-index: 3;
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  &:nth-of-type(2) {
    transition-delay: 0.1s;
    z-index: 2;
  }
  &:nth-of-type(3) {
    transition-delay: 0s;
    z-index: 1;
  }
`;

export const LangMenuButton: FC<{
  path: string;
  lang: string;
  isActive?: boolean;
}> = ({ path, lang, isActive }) => {
  const { push } = useRouter();

  return (
    <Lang
      isActive={isActive}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      {lang}
    </Lang>
  );
};
