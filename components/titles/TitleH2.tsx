import { FC } from 'react';
import styles from './title-h2.module.css';

export const TitleH2: FC<{ homeTitle?: boolean }> = ({
  children,
  homeTitle,
}) => {
  return (
    <h1 className={`${homeTitle ? styles.home_title : styles.module}`}>
      {children}
    </h1>
  );
};
