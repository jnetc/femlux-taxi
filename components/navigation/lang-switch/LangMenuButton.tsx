import { useRouter } from 'next/router';
import styles from './lang-menu.module.css';

export const LangMenuButton = ({
  path,
  lang,
}: {
  path: string;
  lang: string;
}) => {
  const { push } = useRouter();

  return (
    <button
      className={styles.module}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      {lang}
    </button>
  );
};
