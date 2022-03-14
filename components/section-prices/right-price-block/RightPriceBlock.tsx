import styles from './right-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { Fare } from './fare/Fare';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const RightPriceBlock = () => {
  const { data } = useLanguageState();
  return (
    <div className={styles.module}>
      <TitleH2>{data?.price.priceTrip}</TitleH2>
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
