import styles from './front-car.module.css';

export const FrontCarMob = () => {
  return (
    <svg viewBox="0 0 950 500">
      <ellipse cx="480" cy="380" rx="465" ry="75" fill="url(#gradient)" />
      <ellipse
        className={styles.ellipse_fill}
        cx="480"
        cy="365"
        rx="450"
        ry="65"
      />
      <linearGradient
        id="gradient"
        x1="22.6431"
        y1="381.072"
        x2="956.643"
        y2="381.072"
        gradientUnits="userSpaceOnUse"
      >
        <stop className={styles.start_gradient} />
        <stop offset={1} className={styles.end_gradient} />
      </linearGradient>
      <image href="/images/car_front.webp" width="950" height="500" />
    </svg>
  );
};
