import Image from 'next/image';
import { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './ProjectCard.module.scss';

type Props = {
  name: string;
  description: string;
  technologies: string[];
  previewSrc: string;
  demoDesktopSrc: string;
  demoMobileSrc: string;
  height: number;
};

export default function ProjectCard({
  name,
  description,
  technologies,
  previewSrc,
  demoDesktopSrc,
  demoMobileSrc,
  height,
}: Props) {
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);

  const handleProjectModal = () => {
    setShowProjectModal(!showProjectModal);
    if (!showProjectModal) {
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = '16px';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.paddingRight = '0';
    }
  };

  return (
    <>
      <div
        className={styles.card}
        style={{ height: height }}
        role="button"
        tabIndex={0}
        onClick={handleProjectModal}
      >
        <div className={styles.demo}>
          <Image
            src={previewSrc}
            alt={`${name} preview image`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={styles.hover}>
          <h3 className={styles.name}>{name}</h3>
          <p>Show project</p>
        </div>
      </div>
      {showProjectModal && (
        <ProjectModal
          name={name}
          description={description}
          technologies={technologies}
          demoDesktopSrc={demoDesktopSrc}
          demoMobileSrc={demoMobileSrc}
          handleProjectModal={handleProjectModal}
        />
      )}
    </>
  );
}
