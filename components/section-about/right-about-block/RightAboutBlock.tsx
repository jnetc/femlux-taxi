import styles from './right-about-block.module.css';
import Image from 'next/image';

export const RightAboutBlock = () => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/car_rear.webp"
        alt="rear car"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
