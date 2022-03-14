import styles from './service-card.module.css';
import { TitleH2 } from '@Components/titles/TitleH2';
import { Blobs } from './icons/Blobs';
import { Airplane } from './icons/Airplane';
import { Babesit } from './icons/Babesit';
import { Pets } from './icons/Pets';

import { ServiceType } from '@Types';

export const ServiceCard = ({ data }: { data: ServiceType<string> }) => {
  return (
    <article className={styles.module}>
      <div className={styles.icon_container}>
        <Blobs />
        {data.iconName === 'airplane' && <Airplane />}
        {data.iconName === 'babesit' && <Babesit />}
        {data.iconName === 'pets' && <Pets />}
      </div>
      <TitleH2>{data.title}</TitleH2>
      <p className="paragraph">{data.description}</p>
    </article>
  );
};
