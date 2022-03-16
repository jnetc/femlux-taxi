import { FC } from 'react';
import styles from './fare.module.css';

export const Fare: FC<{ label?: string }> = ({ children, label }) => {
  return (
    <p className={styles.module} data-label={label}>
      {children}
    </p>
  );
};
