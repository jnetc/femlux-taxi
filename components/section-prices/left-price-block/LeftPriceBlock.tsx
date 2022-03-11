import styles from './left-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { PriceSwitcher } from './price-switcher/PriceSwitcher';
export const LeftPriceBlock = () => {
  return (
    <div className={styles.module}>
      <TitleH2>Стоимость посадки</TitleH2>
      <p className="paragraph">Без платы за предварительное бронирование</p>
      <PriceSwitcher />
    </div>
  );
};
