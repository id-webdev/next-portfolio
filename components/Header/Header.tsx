import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  const handleScroll = () => {
    if (headerRef.current) {
      setScrolled(window.scrollY >= headerRef.current.offsetHeight);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ''
      }`}
      ref={headerRef}
    >
      <div className="container d-flex">
        <div className={styles.logo}>
          <Link href="/">id-web.dev</Link>
        </div>
        <Nav />
        <button
          className={`${styles.mobileMenuBtn} ${
            mobileMenuOpen ? styles.mobileMenuOpen : ''
          }`}
          onClick={handleMobileMenu}
        >
          <div></div>
          <div></div>
        </button>
      </div>
      {mobileMenuOpen && <MobileMenu handleMobileMenu={handleMobileMenu} />}
    </header>
  );
}
