import Image from 'next/image';
import { useState } from 'react';
import useScrollbarSize from 'react-scrollbar-size';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './ProjectCard.module.scss';

type Props = {
  headerRef: React.RefObject<HTMLElement>;
  name: string;
  description: string;
  previewSrc: string;
  demoDesktopSrc: string;
  demoMobileSrc: string;
  color: string;
};

export default function ProjectCard({
  headerRef,
  name,
  description,
  previewSrc,
  demoDesktopSrc,
  demoMobileSrc,
  color,
}: Props) {
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const { width: scrollbarWidth } = useScrollbarSize();

  const handleProjectModal = () => {
    setShowProjectModal(!showProjectModal);
    if (!showProjectModal) {
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (headerRef.current !== null)
        headerRef.current.style.right = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.paddingRight = '0';
      if (headerRef.current !== null) headerRef.current.style.right = '0';
    }
  };

  return (
    <>
      <div
        className={styles.card}
        role="button"
        tabIndex={0}
        onClick={handleProjectModal}
        style={{ '--project-color': color } as React.CSSProperties}
      >
        <div className={styles.header}>
          <Image
            src={previewSrc}
            alt={`${name} preview image`}
            fill
            style={{ objectPosition: 'top', objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      {showProjectModal && (
        <ProjectModal
          demoDesktopSrc={demoDesktopSrc}
          demoMobileSrc={demoMobileSrc}
          handleProjectModal={handleProjectModal}
        />
      )}
    </>
  );
}
