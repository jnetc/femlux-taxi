import { FC } from 'react';
import styles from './price.module.css';
export const Price: FC<{ isLargePrice?: boolean }> = ({
  children,
  isLargePrice = false,
}) => {
  return (
    <p
      className={`${styles.module} ${
        isLargePrice ? styles.large : styles.small
      }`}
    >
      {children} €
    </p>
  );
};
