import Link from 'next/link';
import { Waypoint } from 'react-waypoint';
import Particles from '../Particles/Particles';
import styles from './Hero.module.scss';

type HeroProps = {
  setCurrentSection: (arg0: string) => void;
};

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <Waypoint onEnter={() => setCurrentSection('home')} topOffset="45%">
      <section className={styles.hero} id="home">
        <Particles amount={7} />
        <div className={styles.content}>
          <h1 className={styles.name}>
            <span>Ilya</span>
            <span className={styles.nbsp}>&nbsp;</span>
            <span>Dyma</span>
          </h1>
          <h2 className={styles.description}>
            <span>Front-End</span>
            <span className={styles.nbsp}>&nbsp;</span>
            <span>Web Developer</span>
          </h2>
        </div>
        <Link
          href="#about"
          className={styles.chevron}
          scroll={false}
          aria-label="Scroll down to the next section"
        >
          <span></span>
        </Link>
      </section>
    </Waypoint>
  );
}
