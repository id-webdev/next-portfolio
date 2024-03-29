import styles from './MobileMenuBtn.module.scss';

type MobileMenuBtnProps = {
  handleMobileMenu: () => void;
  mobileMenuOpen: boolean;
};

export default function MobileMenuBtn({
  handleMobileMenu,
  mobileMenuOpen,
}: MobileMenuBtnProps) {
  return (
    <button
      className={`${styles.mobileMenuBtn} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ''
      }`}
      onClick={handleMobileMenu}
      aria-label="Toggle mobile menu"
    >
      <div></div>
      <div></div>
    </button>
  );
}
