import { Logo } from './Logo';
import { NavLinks } from './nav-links/NavLinks';
import styled from 'styled-components';
// Components
import { LangButton } from './lang-switch/LangButton';
import { ThemeButton } from './theme-switch/ThemeButton';

const NavStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Navigation = () => {
  return (
    <NavStyle>
      <Logo />
      <NavLinks />
      <LangButton />
      <ThemeButton />
    </NavStyle>
  );
};

export default Navigation;
