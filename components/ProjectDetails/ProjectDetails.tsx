import styles from './ProjectDetails.module.scss';

type Props = {
  name: string;
  description: string;
  technologies: string[];
  demoDesktopSrc: string;
  demoMobileSrc: string;
};

export default function ProjectDetails({
  name,
  description,
  technologies,
  demoDesktopSrc,
  demoMobileSrc,
}: Props) {
  return (
    <div className={styles.projectDetails}>
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
  );
}
