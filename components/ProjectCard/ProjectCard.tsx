import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import projectDemo from '/public/project-demo.webp';

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <div className={styles.demo}>
        <Image src={projectDemo} alt="" />
      </div>
      <div className={styles.hover}>
        <h3 className={styles.name}>Project Name</h3>
        <p>Show project</p>
      </div>
    </div>
  );
}
