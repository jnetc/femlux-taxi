import styles from './price.module.css';
export const Price = ({
  price,
  isLargePrice = false,
}: {
  price: string;
  isLargePrice?: boolean;
}) => {
  return (
    <p
      className={`${styles.module} ${
        isLargePrice ? styles.large : styles.small
      }`}
    >
      {price} €
    </p>
  );
};
