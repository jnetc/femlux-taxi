import styled from 'styled-components';
// Hook
import { useThemeSwitcher } from '@Hooks/useThemeSwitcher';
import { useStore } from '@Hooks/useZustand';

const ButtonStyle = styled.button`
  padding: 2rem;
  background-color: ${props => props.theme.colors.primary};
`;

const value = {
  en: 'switch',
  ru: 'переключить',
  fi: 'pois paalla',
};

export const Button = () => {
  const [theme, setSwitcher] = useThemeSwitcher();
  const { lang } = useStore();

  const switcher = () => {
    const hasSameValue = theme === 'dark' ? 'light' : 'dark';
    setSwitcher(hasSameValue);
  };

  return <ButtonStyle onClick={switcher}>{value[lang]}</ButtonStyle>;
};
