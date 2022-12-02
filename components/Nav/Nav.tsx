import Link from 'next/link';
import styles from './Nav.module.scss';

interface Props {
  handleMobileMenu?: () => void;
  mobile?: true;
}

export default function Nav({ handleMobileMenu, mobile }: Props) {
  return (
    <nav className={`${styles.nav} ${mobile ? styles.mobile : ''}`}>
      <Link
        href="#hero"
        className={styles.navLink}
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Home section"
      >
        #home
      </Link>
      <Link
        href="#about"
        className={styles.navLink}
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to About section"
      >
        #about
      </Link>
      <Link
        href="#projects"
        className={styles.navLink}
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Projects section"
      >
        #projects
      </Link>
      <Link
        href="#contact"
        className={styles.navLink}
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Contact section"
      >
        #contact
      </Link>
    </nav>
  );
}
