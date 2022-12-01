import Link from 'next/link';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Particles amount={7} />
      <div className="hero__content">
        <h1 className="hero__name">
          <span>ILYA</span>
          <span>DYMA</span>
        </h1>
        <h2 className="hero__description">Front-End Web Developer</h2>
      </div>
      <Link
        href="#about"
        className="hero__chevron"
        scroll={false}
        aria-label="Scroll down to go to the next section"
      >
        <span></span>
      </Link>
    </section>
  );
}
