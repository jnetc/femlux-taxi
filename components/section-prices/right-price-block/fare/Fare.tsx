import { FC } from 'react';
import styles from './fare.module.css';

export const Fare: FC<{ label: string }> = ({ children, label }) => {
  return (
    <div className={styles.module} data-label={label}>
      {children}
    </div>
  );
};
