import { FC } from 'react';
import styles from './title.module.css';

export const Title: FC = ({ children }) => {
  return <h1 className={styles.module}>{children}</h1>;
};
