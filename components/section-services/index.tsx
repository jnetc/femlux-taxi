import styles from './services.module.css';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';
import { ServiceCard } from './service-card/ServiceCard';

const Services = () => {
  const { data } = useLanguageState();

  const serviceCards = data?.service.service.map(card => {
    return <ServiceCard key={card.iconName} data={card} />;
  });

  return (
    <section className={styles.module}>
      <header className={`${styles.header} section-header`}>
        <h1 className="section-title">{data?.service.title}</h1>
        <p className="description-section">{data?.service.description}</p>
      </header>
      <div className={styles.services_content}>{serviceCards}</div>
    </section>
  );
};
export default Services;
