import styles from './price-time.module.css';
import { Time } from '../time/Time';
import { Price } from '../price/Price';
export const PriceTime = ({
  priceArr,
}: {
  priceArr: Array<{ price: string; time: string }>;
}) => {
  return priceArr.length > 1 ? (
    <div className={`${styles.module} ${styles.two_prices}`}>
      <div className={styles.half_block}>
        <Time time={priceArr[0].time} />
        <Price price={priceArr[0].price} />
      </div>
      <div className={styles.half_block}>
        <Time time={priceArr[1].time} />
        <Price price={priceArr[1].price} />
      </div>
    </div>
  ) : (
    <div className={`${styles.module} ${styles.one_price}`}>
      <Time time={priceArr[0].time} isLargePrice />
      <Price price={priceArr[0].price} isLargePrice />
    </div>
  );
};
