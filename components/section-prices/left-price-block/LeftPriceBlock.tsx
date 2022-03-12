import { useState } from 'react';
import styles from './left-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { PriceSwitcher } from './price-switcher/PriceSwitcher';
import { TransitionArea } from './price-area/transition-area/TransitionArea';
// Hook
import { PriceState } from '@Hooks/usePriceSwitch';

export const LeftPriceBlock = () => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  return (
    <PriceState.Provider
      value={{
        select: selectedPrice,
        setSelect: setSelectedPrice,
      }}
    >
      <div className={styles.module}>
        <TitleH2>Стоимость посадки</TitleH2>
        <p className="paragraph align-center">
          Без платы за предварительное бронирование
        </p>
        <PriceSwitcher />
        <div className={styles.wrapper}>
          <TransitionArea />
        </div>
      </div>
    </PriceState.Provider>
  );
};
