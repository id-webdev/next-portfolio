import Link from 'next/link';
import styles from './Nav.module.scss';

type NavProps = {
  currentSection?: string;
  mobile?: true;
};

export default function Nav({ currentSection, mobile }: NavProps) {
  return (
    <nav className={`${styles.nav} ${mobile ? styles.mobile : ''}`}>
      <Link
        href="#home"
        className={`${styles.navLink} ${
          currentSection === 'home' ? styles.active : ''
        }`}
        scroll={false}
        aria-label="Go to Home section"
      >
        #home
      </Link>
      <Link
        href="#about"
        className={`${styles.navLink} ${
          currentSection === 'about' ? styles.active : ''
        }`}
        scroll={false}
        aria-label="Go to About section"
      >
        #about
      </Link>
      <Link
        href="#projects"
        className={`${styles.navLink} ${
          currentSection === 'projects' ? styles.active : ''
        }`}
        scroll={false}
        aria-label="Go to Projects section"
      >
        #projects
      </Link>
      <Link
        href="#contact"
        className={`${styles.navLink} ${
          currentSection === 'contact' ? styles.active : ''
        }`}
        scroll={false}
        aria-label="Go to Contact section"
      >
        #contact
      </Link>
    </nav>
  );
}
