import { useRef } from 'react';
import styles from './ProjectModal.module.scss';

type Props = {
  name: string;
  description: string;
  technologies: string[];
  demoDesktopSrc: string;
  demoMobileSrc: string;
  handleProjectModal: () => void;
};

export default function ProjectModal({
  name,
  description,
  technologies,
  demoDesktopSrc,
  demoMobileSrc,
  handleProjectModal,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const shakeModalCard = () => {
    modalRef.current?.classList.add(styles.modalCardAnimation);
    setTimeout(() => {
      modalRef.current?.classList.remove(styles.modalCardAnimation);
    }, 350);
  };

  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.modalBackdrop} onClick={shakeModalCard}></div>
      <div className={styles.modalCard}>
        <div className={styles.modalCardHeader}>
          <button onClick={handleProjectModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <p>demoDesktopSrc: {demoDesktopSrc}</p>
        <p>demoMobileSrc: {demoMobileSrc}</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
