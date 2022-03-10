import { NavLink } from './NavLink';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

import styles from './nav-links.module.css';

export const NavLinks = () => {
  const { language } = useLanguageState();
  const links = urls.map(link => {
    return (
      <NavLink key={link.anchor} url={link.anchor}>
        {link[language]}
      </NavLink>
    );
  });
  return <nav className={styles.module}>{links}</nav>;
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
