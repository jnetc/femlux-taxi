import { useLanguageState } from '@Hooks/useLanguageState';
import { useState, useEffect, useRef, MouseEvent, useCallback } from 'react';
import styles from './price-switcher.module.css';

export const PriceSwitcher = () => {
  const { language } = useLanguageState();
  const ref = useRef<HTMLDivElement>(null);
  const [isCheck, setIsCheck] = useState<{ pos: number; size: number }>();
  const labelArray = Object.entries(labels);

  const select = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const trackElements = [event.currentTarget.childNodes][0];
    const selectedRadioButton = event.target as HTMLDivElement;
    const selectedDataIndex = Number(
      selectedRadioButton.getAttribute('data-index')
    );

    trackElements.forEach(el => {
      if (el.nodeName !== 'DIV') return;

      const element = el as HTMLDivElement;
      const getDataAttr = Number(element.getAttribute('data-index'));
      if (selectedDataIndex !== getDataAttr) {
        // element.setAttribute('aria-checked', 'false');
        return;
      }
      // element.setAttribute('aria-checked', 'true');

      setIsCheck({
        pos: element.offsetLeft - 1.5,
        size: element.clientWidth,
      });
    });
  }, []);

  useEffect(() => {
    const initElement = ref.current?.childNodes[0] as HTMLDivElement;
    console.log(initElement);
    setIsCheck({
      pos: initElement.offsetLeft - 1.5,
      size: initElement.clientWidth,
    });
  }, [language]);

  const elements = labelArray.map((label, index) => {
    const idKey = Object.values(label)[0] as string;
    const idValue = Object.values(label)[1] as LangTypeLOcal;

    return (
      <div
        key={`${idKey}`}
        role="radio"
        aria-checked={index === 0}
        className={styles.button}
        data-index={index}
        tabIndex={0}
      >
        {idValue[language]}
      </div>
    );
  });

  return (
    <div className={styles.module} ref={ref} role="radiogroup" onClick={select}>
      {elements}
      <span
        className="switch"
        style={{
          transform: `translate3d(${isCheck?.pos}px, 0 ,0)`,
          width: `${isCheck?.size}px`,
        }}
      />
    </div>
  );
};

type LangTypeLOcal = typeof labels.holydays;

const labels = {
  workdays: {
    en: 'work days',
    ru: 'рабочие дни',
    fi: 'työpäivät',
  },
  weekend: {
    en: 'weekend',
    ru: 'выходные',
    fi: 'taksin hinta',
  },
  holydays: {
    en: 'holydays',
    ru: 'праздники',
    fi: 'pyhänä',
  },
};
