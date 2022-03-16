import { useState, useEffect, useRef, MouseEvent, useCallback } from 'react';
import styles from './price-switcher.module.css';
// Hook
import { usePriceSwitch } from '@Hooks/usePriceSwitch';
import { useLanguageState } from '@Hooks/useLanguageState';
import { useWindowSize } from '@Hooks/useWindowSize';

export const PriceSwitcher = () => {
  const { language, data } = useLanguageState();
  const { select, setSelect } = usePriceSwitch();
  const { width } = useWindowSize();

  const [isCheck, setIsCheck] = useState<{ pos: number; size: number }>();
  const ref = useRef<HTMLDivElement>(null);

  const labelArray = data?.price.switcherName.split(',') as Array<string>;
  const MODULE_PADDING = 3;

  const selectRadioBUtton = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
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
          element.setAttribute('aria-checked', 'false');
          return;
        }
        element.setAttribute('aria-checked', 'true');
        setSelect(selectedDataIndex);

        setIsCheck({
          pos: element.offsetLeft - MODULE_PADDING,
          size: element.clientWidth,
        });
      });
    },
    [setSelect]
  );

  useEffect(() => {
    const trackElement = ref.current as HTMLDivElement;
    const radioButtons = [trackElement.childNodes][0];
    radioButtons.forEach(el => {
      if (el.nodeName !== 'DIV') return;
      const div = el as HTMLDivElement;
      if (div.getAttribute('aria-checked') === 'false') return;

      const dataIndex = Number(div.getAttribute('data-index'));

      setSelect(dataIndex);
      setIsCheck({
        pos: div.offsetLeft - MODULE_PADDING,
        size: div.clientWidth,
      });
    });
  }, [setSelect, language, width]);

  const elements = labelArray.map((label, index) => {
    return (
      <div
        key={`${label}`}
        role="radio"
        aria-checked={index === select}
        className={styles.button}
        data-index={index}
        tabIndex={0}
      >
        {label}
      </div>
    );
  });

  return (
    <div
      className={styles.module}
      ref={ref}
      role="radiogroup"
      onClick={selectRadioBUtton}
    >
      {elements}
      <span
        className={styles.switch}
        style={{
          transform: `translate3d(${isCheck?.pos}px, 0 ,0)`,
          width: `${isCheck?.size}px`,
        }}
      />
    </div>
  );
};
