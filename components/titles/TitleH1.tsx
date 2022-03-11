import { FC } from 'react';
import styles from './title-h1.module.css';

export const TitleH1: FC<{ homeTitle?: boolean }> = ({
  children,
  homeTitle,
}) => {
  return (
    <h1 className={`${homeTitle ? styles.home_title : styles.module}`}>
      {children}
    </h1>
  );
};
