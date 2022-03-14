import styles from './transition-area.module.css';
import { PriceTime } from '../price-time/PriceTime';
// Hook
import { usePriceSwitch } from '@Hooks/usePriceSwitch';
import { useLanguageState } from '@Hooks/useLanguageState';

const STEP = -33.33;

export const TransitionArea = () => {
  const { data } = useLanguageState();
  const { select } = usePriceSwitch();
  const prices = [
    data?.price.workdays,
    data?.price.weekend,
    data?.price.holidays,
  ];

  console.log(prices);

  const definePosition = STEP * select;

  const content = prices.map((l, index) => {
    if (!l) return <div>error</div>;
    return <PriceTime key={index} priceArr={l} index={index} />;
  });
  return (
    <div
      className={styles.module}
      style={{ transform: `translate3d(${definePosition}%, 0, 0)` }}
    >
      {content}
    </div>
  );
};
