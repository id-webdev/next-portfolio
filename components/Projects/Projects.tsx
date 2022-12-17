import { EffectCoverflow, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import projectList from '../../lib/projectList.json';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import styles from './Projects.module.scss';

type Props = {
  headerRef: React.RefObject<HTMLElement>;
};

export default function Projects({ headerRef }: Props) {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className="heading">#projects</h2>
      </div>
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 96,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 96,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 96,
          },
        }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        effect="coverflow"
        keyboard={{
          enabled: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Keyboard]}
        slideToClickedSlide={true}
        slidesPerView="auto"
        spaceBetween={40}
        touchEventsTarget="container"
      >
        {projectList.projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              headerRef={headerRef}
              name={project.name}
              description={project.description}
              previewSrc={project.previewSrc}
              demoDesktopSrc={project.demoDesktopSrc}
              demoMobileSrc={project.demoMobileSrc}
              color={project.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
