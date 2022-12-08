import styles from './MobileMenuBtn.module.scss';

type Props = {
  handleMobileMenu: () => void;
  mobileMenuOpen: boolean;
};

export default function MobileMenuBtn({
  handleMobileMenu,
  mobileMenuOpen,
}: Props) {
  return (
    <button
      className={`${styles.mobileMenuBtn} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ''
      }`}
      onClick={handleMobileMenu}
    >
      <div></div>
      <div></div>
    </button>
  );
}
