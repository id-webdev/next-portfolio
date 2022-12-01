import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (headerRef.current) {
      setScrolled(window.scrollY >= headerRef.current.offsetHeight);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link href="/">id-web.dev</Link>
        </div>
        <nav className="header__nav">
          <Link
            href="#hero"
            className="nav__link"
            scroll={false}
            aria-label="Go to Home section"
          >
            #home
          </Link>
          <Link
            href="#about"
            className="nav__link"
            scroll={false}
            aria-label="Go to About section"
          >
            #about
          </Link>
          <Link
            href="#portfolio"
            className="nav__link"
            scroll={false}
            aria-label="Go to Portfolio section"
          >
            #portfolio
          </Link>
          <Link
            href="#contact"
            className="nav__link"
            scroll={false}
            aria-label="Go to Contact section"
          >
            #contact
          </Link>
        </nav>
        <button
          className={`header__mobile-btn ${mobileNavOpen ? 'active' : ''}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
}
