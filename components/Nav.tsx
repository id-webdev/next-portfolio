import Link from 'next/link';

interface Props {
  handleMobileMenu?: () => void;
}

export default function Nav({ handleMobileMenu }: Props) {
  return (
    <nav className="header__nav">
      <Link
        href="#hero"
        className="nav__link"
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Home section"
      >
        #home
      </Link>
      <Link
        href="#about"
        className="nav__link"
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to About section"
      >
        #about
      </Link>
      <Link
        href="#portfolio"
        className="nav__link"
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Portfolio section"
      >
        #portfolio
      </Link>
      <Link
        href="#contact"
        className="nav__link"
        onClick={handleMobileMenu}
        scroll={false}
        aria-label="Go to Contact section"
      >
        #contact
      </Link>
    </nav>
  );
}
