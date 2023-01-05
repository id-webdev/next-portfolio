import Link from 'next/link';
import styles from './Nav.module.scss';

type Props = {
  currentSection: string;
  handleMobileMenu?: () => void;
  mobile?: true;
};

export default function Nav({
  currentSection,
  handleMobileMenu,
  mobile,
}: Props) {
  return (
    <nav className={`${styles.nav} ${mobile ? styles.mobile : ''}`}>
      <Link
        href="#home"
        className={`${styles.navLink} ${
          currentSection === 'home' ? styles.active : ''
        }`}
        onClick={handleMobileMenu}
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
        onClick={handleMobileMenu}
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
        onClick={handleMobileMenu}
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
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Contact section"
      >
        #contact
      </Link>
    </nav>
  );
}
