import { RefObject, useRef } from 'react';

import styles from './Snackbar.module.scss';

export type SnackbarProps = {
  type: 'success' | 'error';
  message: string;
  hideSnackbar: () => void;
};

export default function Snackbar({
  type,
  message,
  hideSnackbar,
}: SnackbarProps) {
  const ref = useRef(null);

  function handleClose(ref: RefObject<HTMLDivElement>) {
    ref.current?.classList.add(styles.animateSnackbarOut);

    ref.current?.addEventListener('animationend', () => {
      hideSnackbar();
    });
  }

  return (
    <div
      ref={ref}
      className={`${styles.snackbar} ${
        type === 'success' ? styles.success : styles.error
      }`}
    >
      <div className={styles.icon}>
        {type === 'success' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="var(--snackbar-icon)"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="var(--snackbar-icon)"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        )}
      </div>
      <p className={styles.text}>{message}</p>
      <button
        className={styles.btn}
        onClick={() => handleClose(ref)}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="var(--snackbar-btn)"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            stroke="var(--snackbar-btn)"
            strokeWidth={1}
          />
        </svg>
      </button>
    </div>
  );
}
