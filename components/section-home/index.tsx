import styles from './home-index.module.css';
import { ActionBlock } from './action-buttons/ActionBlock';
// Components
import { TitleH1 } from '@Components/titles/TitleH1';
import { Description } from '@Components/description/Description';
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
        <TitleH1 homeTitle>{data?.home.title}</TitleH1>
        <div className={styles.insert_block}>
          <FrontCarMob />
        </div>
        <Description homeTitle>{data?.home.description}</Description>
        <ActionBlock />
      </div>
      <div className={styles.right_block}>
        <FrontCar />
      </div>
    </section>
  );
};

export default Main;
