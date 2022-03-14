import styles from './services-index.module.css';
// Components
import { TitleH1 } from '@Components/titles/TitleH1';
import { Description } from '@Components/description/Description';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';
import { ServiceCard } from './service-card/ServiceCard';

const Services = () => {
  const { data } = useLanguageState();

  console.log('data', data?.service.service);

  const serviceCards = data?.service.service.map(card => {
    console.log(card);

    return <ServiceCard key={card.iconName} data={card} />;
  });
  return (
    <section className={styles.module}>
      <header className={`${styles.header} section-header`}>
        <TitleH1>{data?.service.title}</TitleH1>
        <Description>{data?.service.description}</Description>
      </header>
      <div className={styles.services_content}>{serviceCards}</div>
    </section>
  );
};
export default Services;
