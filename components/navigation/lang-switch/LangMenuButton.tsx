import { useRouter } from 'next/router';
import styles from './lang-menu.module.css';

export const LangMenuButton = ({
  path,
  lang,
}: {
  path: string;
  lang: string;
}) => {
  const { push, locale } = useRouter();
  return (
    <button
      className={`${styles.module} ${lang === locale && styles.active}`}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      {lang}
    </button>
  );
};
