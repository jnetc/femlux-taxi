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
  const { language } = useLanguageState();
  return (
    <section className={styles.module}>
      <div className={styles.left_block}>
        <span className={styles.taxi_text}>TAXI</span>
        <TitleH1 homeTitle>{title[language]}</TitleH1>
        <div className={styles.insert_block}>
          <FrontCarMob />
        </div>
        <Description homeTitle>
          Если желаете во время, с комфортом и с хорошим настроением добраться
          до места назначения - звоните и заказывайте!
        </Description>
        <ActionBlock />
      </div>
      <div className={styles.right_block}>
        <FrontCar />
      </div>
    </section>
  );
};

export default Main;

const title = {
  en: 'Fast Reliably Safely!',
  ru: 'Быстро Надежно Безопасно!',
  fi: 'Nopeasti Luotettavasti Turvallisesti!',
};
