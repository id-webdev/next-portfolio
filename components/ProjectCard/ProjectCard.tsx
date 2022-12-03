import Image from 'next/image';
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
  /*description,
  technologies,
  demoDesktopSrc,
  demoMobileSrc,*/
  name,
  previewSrc,
  height,
}: Props) {
  //const [showProject, setShowProject] = useState<boolean>(false);

  return (
    <div className={styles.card} style={{ height: height }}>
      <div className={styles.demo}>
        <Image
          src={previewSrc}
          alt=""
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
      {/* 
      {showProject && (
        <ProjectDetails
          name={name}
          description={description}
          technologies={technologies}
          demoDesktopSrc={demoDesktopSrc}
          demoMobileSrc={demoMobileSrc}
        />
      )}
      */}
    </div>
  );
}
