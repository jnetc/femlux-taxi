import { useState } from 'react';
import styles from './left-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { PriceSwitcher } from './price-switcher/PriceSwitcher';
import { TransitionArea } from './price-area/transition-area/TransitionArea';
// Hook
import { PriceState } from '@Hooks/usePriceSwitch';
import { useLanguageState } from '@Hooks/useLanguageState';

export const LeftPriceBlock = () => {
  const { data } = useLanguageState();
  const [selectedPrice, setSelectedPrice] = useState(0);
  return (
    <PriceState.Provider
      value={{
        select: selectedPrice,
        setSelect: setSelectedPrice,
      }}
    >
      <div className={styles.module}>
        <TitleH2>{data?.price.priceLand}</TitleH2>
        <p className="paragraph align-center">{data?.price.priceLandDesc}</p>
        <PriceSwitcher />
        <div className={styles.wrapper}>
          <TransitionArea />
        </div>
      </div>
    </PriceState.Provider>
  );
};
