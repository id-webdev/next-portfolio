import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.heading}>#projects</h2>

        {/* TO DO: Projects Categories */}

        <div className={styles.grid}>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
