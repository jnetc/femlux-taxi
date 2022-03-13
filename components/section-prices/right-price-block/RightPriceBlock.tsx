import styles from './right-price-block.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { Fare } from './fare/Fare';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

export const RightPriceBlock = () => {
  const { language } = useLanguageState();
  return (
    <div className={styles.module}>
      <TitleH2>Стоимость поездки</TitleH2>
      <p className="paragraph">Пассажиров 1-4 человека</p>
      <Fare label={labelTime[language]}>0,90 €</Fare>
      <Fare label={labelKM[language]}>0,90 €</Fare>
    </div>
  );
};

const labelTime = {
  en: 'By time',
  fi: 'Ajan kanssa',
  ru: 'По времени',
};
const labelKM = {
  en: 'Mileage',
  fi: 'Kilometrimäärä',
  ru: 'Километраж',
};
