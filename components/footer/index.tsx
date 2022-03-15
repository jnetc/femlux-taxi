import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.module}>
      Femlux Taxi © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
