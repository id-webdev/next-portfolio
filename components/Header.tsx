import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import Nav from './Nav';

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
      className={`header ${scrolled ? 'scrolled' : ''} ${
        mobileMenuOpen ? 'mobile-menu-active' : ''
      }`}
      ref={headerRef}
    >
      <div className="container">
        <div className="header__logo">
          <Link href="/">id-web.dev</Link>
        </div>
        <Nav />
        <button
          className={`header__mobile-btn ${mobileMenuOpen ? 'active' : ''}`}
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
