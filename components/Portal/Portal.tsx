import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  selector: HTMLElement;
};

export default function Portal({ children, selector }: Props) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = selector;
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
