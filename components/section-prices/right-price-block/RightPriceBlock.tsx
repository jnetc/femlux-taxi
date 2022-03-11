import styles from './right-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
export const RightPriceBlock = () => {
  return (
    <div className={styles.module}>
      <TitleH2>Стоимость поездки</TitleH2>
      <p className="paragraph">Пассажиров 1-4 человека</p>
    </div>
  );
};
