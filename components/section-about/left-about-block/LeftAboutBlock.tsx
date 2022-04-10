import styles from './left-about-block.module.css';
import { Avatar } from './Avatar';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const LeftAboutBlock = () => {
  const { data } = useLanguageState();

  return (
    <article className={styles.module}>
      <h2 className={styles.title}>{data?.about.name}</h2>
      <p className={styles.proff}>{data?.about.proff}</p>
      <p className={`${styles.paragraph} paragraph`}>{data?.about.aboutMe}</p>
      <div className={styles.avatar}>
        <Avatar />
      </div>
    </article>
  );
};
