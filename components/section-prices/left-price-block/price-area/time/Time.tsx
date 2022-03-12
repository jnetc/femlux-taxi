import styles from './time.module.css';
import { ClockIcon } from '../clock-icon/ClockIcon';
export const Time = ({
  time,
  isLargePrice = false,
}: {
  time: string;
  isLargePrice?: boolean;
}) => {
  return (
    <div
      className={`${styles.module} ${
        isLargePrice ? styles.large : styles.small
      }`}
    >
      <ClockIcon />
      <time className={styles.time}>{time}</time>
    </div>
  );
};
