import styles from './home.module.css';
import { ActionBlock } from './action-buttons/ActionBlock';
// Components
import { FrontCarMob } from './front-car/FrontCarMob';
import { FrontCar } from './front-car/FrontCar';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const Main = () => {
  const { data } = useLanguageState();
  return (
    <section className={styles.module}>
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
    </section>
  );
};

export default Main;
