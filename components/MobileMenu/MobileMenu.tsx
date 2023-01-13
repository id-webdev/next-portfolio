import Nav from '../Nav/Nav';
import styles from './MobileMenu.module.scss';

type MobileMenuProps = {
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  return (
    <div className={styles.mobileMenu}>
      <Nav handleMobileMenu={handleMobileMenu} mobile />
    </div>
  );
}
