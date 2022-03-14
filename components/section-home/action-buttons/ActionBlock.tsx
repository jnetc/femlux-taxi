import { ActionButton } from './ActionButton';
import { CopyButton } from './CopyButton';
import styles from './action-block.module.css';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const ActionBlock = () => {
  const { data } = useLanguageState();
  const removeCountryIndex = data?.home.mainTelephoneNum.replace('+358', '');
  return (
    <div className={styles.module}>
      <ActionButton />
      <span className={styles.arrow} />
      <span className={styles.phone_number}>{removeCountryIndex}</span>
      <CopyButton />
    </div>
  );
};
