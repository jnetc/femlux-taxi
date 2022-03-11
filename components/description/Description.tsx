import { FC } from 'react';
import styles from './description.module.css';

export const Description: FC<{ homeTitle?: boolean }> = ({
  children,
  homeTitle = false,
}) => {
  return (
    <p className={`${homeTitle ? styles.align_left : styles.module}`}>
      {children}
    </p>
  );
};
