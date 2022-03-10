import { FC } from 'react';
import styles from './description.module.css';

export const Description: FC = ({ children }) => {
  return <p className={styles.module}>{children}</p>;
};
