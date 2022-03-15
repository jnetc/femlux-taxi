import styles from './prices-index.module.css';
// Components
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
        <h1 className="section-title">{data?.price.title}</h1>
        <p className="description-section">{data?.price.description}</p>
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
