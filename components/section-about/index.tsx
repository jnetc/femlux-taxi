import styles from './about.module.css';
// Components
import { LeftAboutBlock } from './left-about-block/LeftAboutBlock';
import { RightAboutBlock } from './right-about-block/RightAboutBlock';
// Hook
import { useLanguageState } from '@Hooks/useLanguageState';

const About = () => {
  const { data } = useLanguageState();

  return (
    <section id="about">
      <header className={`${styles.header} section-header`}>
        <h1 className="section-title">{data?.about.title}</h1>
        <p className="description-section">{data?.about.description}</p>
      </header>
      <div className={styles.about_content}>
        <LeftAboutBlock />
        <RightAboutBlock />
      </div>
    </section>
  );
};
export default About;
