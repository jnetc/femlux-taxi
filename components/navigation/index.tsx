import { Logo } from './Logo';
import { NavLinks } from './nav-links/NavLinks';
import styles from './index-nav.module.css';
// Components
import { LangButton } from './lang-switch/LangButton';
import { ThemeButton } from './theme-switch/ThemeButton';

const Navigation = () => {
  return (
    <header className={styles.module}>
      <Logo />
      <NavLinks />
      <LangButton />
      <ThemeButton />
    </header>
  );
};

export default Navigation;
