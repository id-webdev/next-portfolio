import { RefObject } from 'react';
import { Waypoint } from 'react-waypoint';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import projectList from '../../lib/projectList.json';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import styles from './Projects.module.scss';

type ProjectsProps = {
  headerRef: RefObject<HTMLElement>;
  setCurrentSection: (arg0: string) => void;
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      className="swiper-button-prev"
      onClick={() => swiper.slidePrev()}
    ></button>
  );
};

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      className="swiper-button-next"
      onClick={() => swiper.slideNext()}
    ></button>
  );
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
            2560: {
              slidesPerView: 5,
              spaceBetween: 150,
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
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          modules={[EffectCoverflow, Keyboard, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </Swiper>
        <div className={styles.background}>
          <svg
            id="visual"
            viewBox="0 0 1000 400"
            width="1000"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect
              fill="var(--wave-700)"
              x="0"
              y="0"
              width="1000"
              height="400"
            ></rect>
            <path
              fill="var(--wave-600)"
              d="M0 299L83.3 288.3C166.7 277.7 333.3 256.3 500 243.7C666.7 231 833.3 227 916.7 225L1000 223L1000 401L916.7 401C833.3 401 666.7 401 500 401C333.3 401 166.7 401 83.3 401L0 401Z"
            ></path>
            <path
              fill="var(--wave-400)"
              d="M0 269L83.3 271.2C166.7 273.3 333.3 277.7 500 266.2C666.7 254.7 833.3 227.3 916.7 213.7L1000 200L1000 401L916.7 401C833.3 401 666.7 401 500 401C333.3 401 166.7 401 83.3 401L0 401Z"
            ></path>
            <path
              fill="var(--wave-900)"
              d="M0 355L83.3 339C166.7 323 333.3 291 500 276.7C666.7 262.3 833.3 265.7 916.7 267.3L1000 269L1000 401L916.7 401C833.3 401 666.7 401 500 401C333.3 401 166.7 401 83.3 401L0 401Z"
            ></path>
          </svg>
        </div>
      </section>
    </Waypoint>
  );
}
