import Link from 'next/link';
import { ActionIcon } from './ActionIcon';
import styles from './action-button.module.css';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const ActionButton = () => {
  const { data } = useLanguageState();
  return (
    <Link href={`tel:${data?.home.mainTelephoneNum}`} passHref>
      <a className={styles.module}>
        <ActionIcon />
        <span className={styles.btn_name}>{data?.home.mainButtonName}</span>
      </a>
    </Link>
  );
};
