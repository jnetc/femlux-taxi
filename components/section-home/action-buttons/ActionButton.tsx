import Link from 'next/link';
import { ActionIcon } from './ActionIcon';
import styles from './action-button.module.css';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const ActionButton = () => {
  const { language } = useLanguageState();
  return (
    <Link href={`tel:${+358054645221}`} passHref>
      <a className={styles.module}>
        <ActionIcon />
        <span className={styles.btn_name}>{buttonName[language]}</span>
      </a>
    </Link>
  );
};

const buttonName = {
  en: 'order a taxi',
  fi: 'tilaa taksin',
  ru: 'закажи такси',
};
