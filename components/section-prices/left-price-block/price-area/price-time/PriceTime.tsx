import styles from './price-time.module.css';
import { Time } from '../time/Time';
import { Price } from '../price/Price';
// Hook
import { usePriceSwitch } from '@Hooks/usePriceSwitch';

export const PriceTime = ({
  priceArr,
  index,
}: {
  priceArr: Array<{ price: string; time: string }>;
  index: number;
}) => {
  const { select } = usePriceSwitch();

  return priceArr.length > 1 ? (
    <div
      className={`${styles.module} ${styles.two_prices} ${
        select === index ? styles.show_price : ''
      }`}
      data-index={index}
    >
      <div className={styles.half_block}>
        <Time>{priceArr[0].time}</Time>
        <Price>{priceArr[0].price}</Price>
      </div>
      <div className={styles.half_block}>
        <Time>{priceArr[1].time}</Time>
        <Price>{priceArr[1].price}</Price>
      </div>
    </div>
  ) : (
    <div
      className={`${styles.module} ${styles.one_price} ${
        select === index ? styles.show_price : ''
      }`}
      data-index={index}
    >
      <div className={styles.full_block}>
        <Time isLargePrice>{priceArr[0].time}</Time>
        <Price isLargePrice>{priceArr[0].price}</Price>
      </div>
    </div>
  );
};
