import styles from './left-about-block.module.css';
import { Avatar } from './Avatar';
export const LeftAboutBlock = () => {
  return (
    <article className={styles.module}>
      <h2 className={styles.title}>Inna Klimenko</h2>
      <p className={styles.proff}>Водитель, Предприниматель</p>
      <p className={`${styles.paragraph} paragraph`}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className={styles.avatar}>
        <Avatar />
      </div>
    </article>
  );
};
