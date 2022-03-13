import styles from './transition-area.module.css';
import { PriceTime } from '../price-time/PriceTime';
// Hook
import { usePriceSwitch } from '@Hooks/usePriceSwitch';

const STEP = -33.33;

export const TransitionArea = () => {
  const { select } = usePriceSwitch();

  const definePosition = STEP * select;

  const content = price.map((l, index) => {
    const key = Object.keys(l)[0];
    const values = Object.values(l)[0];

    return <PriceTime key={key} priceArr={values} index={index} />;
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

const price = [
  {
    workdays: [
      {
        price: '4,00',
        time: '06:00-18:00',
      },
      {
        price: '7,00',
        time: '18:00-06:00',
      },
    ],
  },
  {
    weekend: [
      {
        price: '7,00',
        time: '00:00-23:59',
      },
    ],
  },
  {
    holidays: [
      {
        price: '7,00',
        time: '00:00-23:59',
      },
    ],
  },
];
