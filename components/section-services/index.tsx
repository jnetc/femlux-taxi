import styles from './services-index.module.css';
// Components
import { TitleH1 } from '@Components/titles/TitleH1';
import { Description } from '@Components/description/Description';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const Services = () => {
  const { language } = useLanguageState();
  return (
    <section className={styles.module}>
      <header className={`${styles.header} section-header`}>
        <TitleH1>{services[language]}</TitleH1>
        <Description>
          Если желаете во время, с комфортом и с хорошим настроением добраться
          до места назначения - звоните и заказывайте!
        </Description>
      </header>
    </section>
  );
};
export default Services;

const services = {
  en: 'services and opportunities',
  ru: 'услуги и возможности',
  fi: 'palvelut ja mahdollisuudet',
};
