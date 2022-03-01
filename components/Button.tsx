import styled from 'styled-components';
// Hook
import { useThemeSwitcher } from '@Hooks/useThemeSwitcher';

const ButtonStyle = styled.button`
  padding: 2rem;
  background-color: ${props => props.theme.colors.primary};
`;

export const Button = () => {
  const [theme, setSwitcher] = useThemeSwitcher('theme');

  const switcher = () => {
    const hasSameValue = theme === 'dark' ? 'light' : 'dark';
    setSwitcher(hasSameValue);
  };

  return <ButtonStyle onClick={switcher}>switch</ButtonStyle>;
};
