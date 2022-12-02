import Link from 'next/link';
import Particles from '../Particles/Particles';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
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
        aria-label="Scroll down to go to the next section"
      >
        <span></span>
      </Link>
    </section>
  );
}
