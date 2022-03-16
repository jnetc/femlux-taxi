import { FC } from 'react';
import Link from 'next/link';
import styles from './nav-link.module.css';

export const NavLink: FC<{ url: string }> = ({ children, url }) => {
  return (
    <Link href={url}>
      <a className={styles.module}>{children}</a>
    </Link>
  );
};
