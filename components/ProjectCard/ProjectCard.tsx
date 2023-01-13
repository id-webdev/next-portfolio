import Image from 'next/image';
import { CSSProperties, RefObject, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useScrollbarSize from 'react-scrollbar-size';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './ProjectCard.module.scss';

type ProjectCardProps = {
  headerRef: RefObject<HTMLElement>;
  name: string;
  description: string;
  previewSrc: string;
  demoDesktopSrcWebm: string | undefined;
  demoDesktopSrcMp4: string | undefined;
  demoMobileSrcWebm: string | undefined;
  demoMobileSrcMp4: string | undefined;
  color: string;
};

export default function ProjectCard({
  headerRef,
  name,
  description,
  previewSrc,
  demoDesktopSrcWebm,
  demoDesktopSrcMp4,
  demoMobileSrcWebm,
  demoMobileSrcMp4,
  color,
}: ProjectCardProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalActive, setModalActive] = useState(false);
  const { width: scrollbarWidth } = useScrollbarSize();

  const handleModalOpen = () => {
    setModalActive(true);

    // Remove scrolling and add padding in place of the scrollbar
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (headerRef.current !== null)
      headerRef.current.style.right = `${scrollbarWidth}px`;
  };

  return (
    <>
      <div
        className={styles.card}
        role="button"
        tabIndex={0}
        onClick={handleModalOpen}
        style={{ '--project-color': color } as CSSProperties}
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
          <div className={styles.hover}>
            <div className={styles.hoverIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z" />
              </svg>
            </div>
            <span className={styles.hoverText}>Show demo</span>
          </div>
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      {modalActive &&
        createPortal(
          <ProjectModal
            demoDesktopSrcWebm={demoDesktopSrcWebm}
            demoDesktopSrcMp4={demoDesktopSrcMp4}
            demoMobileSrcWebm={demoMobileSrcWebm}
            demoMobileSrcMp4={demoMobileSrcMp4}
            headerRef={headerRef}
            modalRef={modalRef}
            name={name}
            setModalActive={setModalActive}
          />,
          document.getElementsByTagName('main')[0]
        )}
    </>
  );
}
