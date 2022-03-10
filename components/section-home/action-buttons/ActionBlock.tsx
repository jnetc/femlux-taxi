import { ActionButton } from './ActionButton';
import { CopyButton } from './CopyButton';
import styles from './action-block.module.css';

export const ActionBlock = () => {
  return (
    <div className={styles.module}>
      <ActionButton />
      <span className={styles.arrow} />
      <span className={styles.phone_number}>0504645221</span>
      <CopyButton />
    </div>
  );
};
