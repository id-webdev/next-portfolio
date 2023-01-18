import Link from 'next/link';
import { forwardRef, useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import Nav from '../Nav/Nav';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import styles from './Header.module.scss';

type HeaderProps = {
  currentSection: string;
};

export default forwardRef<HTMLElement, HeaderProps>(function Header(
  { currentSection },
  ref
) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function handleScroll() {
    if (ref !== null && typeof ref !== 'function' && ref.current !== null) {
      setScrolled(window.scrollY >= ref.current.offsetHeight);
    }
  }

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ''
      }`}
      ref={ref}
    >
      <div className={`container ${styles.flex}`}>
        <div className={styles.logo}>
          <Link href="/">id-web.dev</Link>
        </div>
        <Nav currentSection={currentSection} />
        <SwitchTheme />
        <MobileMenuBtn
          handleMobileMenu={handleMobileMenu}
          mobileMenuOpen={mobileMenuOpen}
        />
      </div>
      {mobileMenuOpen && <MobileMenu currentSection={currentSection} />}
    </header>
  );
});
