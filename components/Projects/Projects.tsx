import { RefObject } from 'react';
import { Waypoint } from 'react-waypoint';
import { EffectCoverflow, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import projectList from '../../lib/projectList.json';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './Projects.module.scss';

type ProjectsProps = {
  headerRef: RefObject<HTMLElement>;
  setCurrentSection: (arg0: string) => void;
};

export default function Projects({
  headerRef,
  setCurrentSection,
}: ProjectsProps) {
  return (
    <Waypoint
      onEnter={() => setCurrentSection('projects')}
      topOffset="45%"
      bottomOffset="45%"
    >
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
              spaceBetween: 80,
            },
            1200: {
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
            slideShadows: false,
          }}
          effect={'coverflow'}
          keyboard={{
            enabled: true,
          }}
          modules={[EffectCoverflow, Keyboard]}
          slideToClickedSlide={true}
          slidesPerView={'auto'}
          initialSlide={1}
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
                demoDesktopSrcWebm={project.demoDesktopSrcWebm}
                demoDesktopSrcMp4={project.demoDesktopSrcMp4}
                demoMobileSrcWebm={project.demoMobileSrcWebm}
                demoMobileSrcMp4={project.demoMobileSrcMp4}
                color={project.color}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Waypoint>
  );
}
