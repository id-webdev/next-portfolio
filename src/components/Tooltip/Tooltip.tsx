import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.scss';

type TooltipProps = {
  children: ReactNode;
  text: string;
  gap?: number;
};

export default function Tooltip({ children, text, gap = 10 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function toggleTooltip() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    if (isVisible && elementRef.current && tooltipRef.current) {
      const element = elementRef.current;
      const elementHeight = elementRef.current.offsetHeight;
      const elementRect = elementRef.current.getBoundingClientRect();
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      let referenceElement = element.offsetParent as HTMLElement;
      while (referenceElement && referenceElement.style.position === 'static') {
        referenceElement = referenceElement.offsetParent as HTMLElement;
      }

      if (!referenceElement) {
        referenceElement = document.body;
      }

      const referenceRect = referenceElement.getBoundingClientRect();

      let top =
        elementRect.top - referenceRect.top + referenceElement.scrollTop;
      const left =
        elementRect.left -
        referenceRect.left +
        (elementRect.width - tooltipRef.current.offsetWidth) / 2 +
        referenceElement.scrollLeft;

      if (
        elementRect.top + elementHeight + tooltipHeight + gap >
        viewportHeight
      ) {
        top = top - elementRect.height - gap;
      } else {
        top = top + elementRect.height + gap;
      }

      tooltipRef.current.style.top = `${top}px`;
      tooltipRef.current.style.left = `${left}px`;
    }
  }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={elementRef}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {children}
      <div
        className={`${styles.tooltip} ${isVisible ? styles.visible : ''}`}
        ref={tooltipRef}
      >
        {text}
      </div>
    </div>
  );
}
