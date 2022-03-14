import styles from './prices-index.module.css';
// Components
import { TitleH1 } from '@Components/titles/TitleH1';
import { Description } from '@Components/description/Description';
import { LeftPriceBlock } from './left-price-block/LeftPriceBlock';
import { RightPriceBlock } from './right-price-block/RightPriceBlock';
import { Plus } from './plus-block/Plus';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const Prices = () => {
  const { data } = useLanguageState();
  return (
    <section className={styles.module}>
      <header className={`${styles.header} section-header`}>
        <TitleH1>{data?.price.title}</TitleH1>
        <Description>{data?.price.description}</Description>
      </header>
      <div className={styles.price_content}>
        <LeftPriceBlock />
        <Plus />
        <RightPriceBlock />
      </div>
    </section>
  );
};
export default Prices;
