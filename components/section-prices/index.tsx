import styles from './prices-index.module.css';
// Components
import { TitleH1 } from '@Components/titles/TitleH1';
import { Description } from '@Components/description/Description';
import { LeftPriceBlock } from './left-price-block/LeftPriceBlock';
import { RightPriceBlock } from './right-price-block/RightPriceBlock';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const Prices = () => {
  const { language } = useLanguageState();
  return (
    <section className={styles.module}>
      <header className={`${styles.header} section-header`}>
        <TitleH1>{prices[language]}</TitleH1>
        <Description>
          Если желаете во время, с комфортом и с хорошим настроением добраться
          до места назначения - звоните и заказывайте!
        </Description>
      </header>
      <div className={styles.price_content}>
        <LeftPriceBlock />
        <RightPriceBlock />
      </div>
    </section>
  );
};
export default Prices;

const prices = {
  en: 'taxi fare',
  ru: 'стоимость проезда на такси',
  fi: 'taksin hinta',
};
