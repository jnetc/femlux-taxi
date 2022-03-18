import styles from './home.module.css';
import Link from 'next/link';
import { ActionBlock } from './action-buttons/ActionBlock';
// Components
import { FrontCarMob } from './front-car/FrontCarMob';
import { FrontCar } from './front-car/FrontCar';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const Main = () => {
  const { data } = useLanguageState();
  return (
    <section className="home-section">
      <div className={styles.left_block}>
        <span className={styles.taxi_text}>TAXI</span>
        <h1 className="main-title">{data?.home.title}</h1>
        <div className={styles.insert_block}>
          <FrontCarMob />
        </div>
        <p className="description-main">{data?.home.description}</p>
        <ActionBlock />
      </div>
      <div className={styles.right_block}>
        <FrontCar />
      </div>
      <Link href="#prices">
        <a
          className={styles.scroll_down}
          role="button"
          tabIndex={0}
          aria-label="scroll down"
        />
      </Link>
    </section>
  );
};

export default Main;
