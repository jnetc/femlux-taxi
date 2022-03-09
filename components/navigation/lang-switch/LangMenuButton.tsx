import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

const Lang = styled.button`
  width: var(--lang-switcher-height-width);
  height: var(--lang-switcher-height-width);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  color: ${({ theme }) => theme.colors.txtPrimaryClr};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  background-color: transparent;
  font-size: 1.125em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.primary};
  }

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
}> = ({ path, lang }) => {
  const { push } = useRouter();

  return (
    <Lang
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      {lang}
    </Lang>
  );
};
