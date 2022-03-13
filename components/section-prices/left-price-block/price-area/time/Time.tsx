import { FC } from 'react';
import styles from './time.module.css';
import { ClockIcon } from '../clock-icon/ClockIcon';
export const Time: FC<{ isLargePrice?: boolean }> = ({
  children,
  isLargePrice = false,
}) => {
  return (
    <div
      className={`${styles.module} ${
        isLargePrice ? styles.large : styles.small
      }`}
    >
      <ClockIcon />
      <time className={styles.time}>{children}</time>
    </div>
  );
};
