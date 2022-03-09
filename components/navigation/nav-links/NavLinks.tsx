import styled from 'styled-components';
import { NavLink } from './NavLink';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const NavLinksStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;

export const NavLinks = () => {
  const { language } = useLanguageState();
  const links = urls.map(link => {
    return (
      <NavLink key={link.anchor} url={link.anchor}>
        {link[language]}
      </NavLink>
    );
  });
  return <NavLinksStyle>{links}</NavLinksStyle>;
};

const urls = [
  {
    en: 'Home',
    fi: 'Etusivu',
    ru: 'Начальная',
    anchor: '#home',
  },
  {
    en: 'Prices',
    fi: 'Hinnat',
    ru: 'Цены',
    anchor: '#prices',
  },
  {
    en: 'Services',
    fi: 'Palvelut',
    ru: 'Услуги',
    anchor: '#services',
  },
  {
    en: 'About',
    fi: 'Minusta',
    ru: 'Обо мне',
    anchor: '#about',
  },
];
