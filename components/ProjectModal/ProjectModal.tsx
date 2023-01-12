import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import styles from './ProjectModal.module.scss';

type Props = {
  demoDesktopSrcWebm: string | undefined;
  demoDesktopSrcMp4: string | undefined;
  demoMobileSrcWebm: string | undefined;
  demoMobileSrcMp4: string | undefined;
  headerRef: React.RefObject<HTMLElement>;
  modalRef: React.RefObject<HTMLDivElement>;
  name: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProjectModal({
  demoDesktopSrcWebm,
  demoDesktopSrcMp4,
  demoMobileSrcWebm,
  demoMobileSrcMp4,
  headerRef,
  modalRef,
  name,
  setModalActive,
}: Props) {
  const isMobile = useMediaQuery(767);
  const [demoMobile, setDemoMobile] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const animateModalCard = () => {
    modalRef.current?.classList.add(styles.modalCardAnimation);
    setTimeout(() => {
      modalRef.current?.classList.remove(styles.modalCardAnimation);
    }, 350);
  };

  const handleModalClose = () => {
    // Close modal smoothly
    modalRef.current?.classList.add(styles.modalCloseAnimation);
    setTimeout(() => {
      modalRef.current?.classList.remove(styles.modalCloseAnimation);
      setModalActive(false);

      // Return scrolling and remove the padding that is in place of the scrollbar
      document.body.style.overflowY = 'auto';
      document.body.style.paddingRight = '0';
      if (headerRef.current !== null) headerRef.current.style.right = '0';
    }, 300);
  };

  useEffect(() => {
    setDemoMobile(isMobile);
  }, [isMobile]);

  useEffect(() => {
    videoRef.current?.load();
  }, [demoMobile]);

  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.backdrop} onClick={animateModalCard}></div>
      <div className={`${styles.card} ${demoMobile ? styles.demoMobile : ''}`}>
        <div className={styles.header}>
          <ToggleSwitch demoMobile={demoMobile} setDemoMobile={setDemoMobile} />
          <div className={styles.searchBar}>{name.replace(/ /g, '')}</div>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className={`${styles.body}`}>
          <video
            ref={videoRef}
            className={`${styles.video} ${demoMobile ? styles.demoMobile : ''}`}
            autoPlay
            controls
            loop
            muted
            playsInline
          >
            <source
              src={demoMobile ? demoMobileSrcWebm : demoDesktopSrcWebm}
              type="video/webm"
            />
            <source
              src={demoMobile ? demoMobileSrcMp4 : demoDesktopSrcMp4}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
