import Link from 'next/link';
import { forwardRef, useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

type Props = {
  currentSection: string;
};

export default forwardRef<HTMLElement, Props>(function Header(
  { currentSection },
  ref
) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  const handleScroll = () => {
    if (ref !== null && typeof ref !== 'function' && ref.current !== null) {
      setScrolled(window.scrollY >= ref.current.offsetHeight);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ''
      }`}
      ref={ref}
    >
      <div className="container d-flex">
        <div className={styles.logo}>
          <Link href="/">id-web.dev</Link>
        </div>
        <Nav currentSection={currentSection} />
        <MobileMenuBtn
          handleMobileMenu={handleMobileMenu}
          mobileMenuOpen={mobileMenuOpen}
        />
      </div>
      {mobileMenuOpen && <MobileMenu handleMobileMenu={handleMobileMenu} />}
    </header>
  );
});
