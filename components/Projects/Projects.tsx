import Masonry from 'react-masonry-css';
import projectList from '../../lib/projectList.json';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.scss';

type Props = {
  headerRef: React.RefObject<HTMLElement>;
};

export default function Projects({ headerRef }: Props) {
  const breakpoints = {
    default: 3,
    768: 2,
    576: 1,
  };

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.heading}>#projects</h2>

        {/* TO DO: Projects Categories */}

        <Masonry
          breakpointCols={breakpoints}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridCol}
        >
          {projectList.projects.map((project) => (
            <ProjectCard
              headerRef={headerRef}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              previewSrc={project.previewSrc}
              demoDesktopSrc={project.demoDesktopSrc}
              demoMobileSrc={project.demoMobileSrc}
              cardHeight={project.cardHeight}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
}
