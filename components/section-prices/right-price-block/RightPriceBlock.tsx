import styles from './right-price-block.module.css';
import { Fare } from './fare/Fare';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const RightPriceBlock = () => {
  const { data } = useLanguageState();
  return (
    <div className={styles.module}>
      <h2 className="price-block-title">{data?.price.priceTrip}</h2>
      <p className="paragraph">{data?.price.priceTripDesc}</p>
      <Fare label={data?.price.priceByTime[0].label}>
        {data?.price.priceByTime[0].price} €
      </Fare>
      <Fare label={data?.price.priceByKm[0].label}>
        {data?.price.priceByKm[0].price} €
      </Fare>
    </div>
  );
};
