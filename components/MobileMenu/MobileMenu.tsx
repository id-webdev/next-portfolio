import Nav from '../Nav/Nav';
import styles from './MobileMenu.module.scss';

interface Props {
  handleMobileMenu: () => void;
}

export default function MobileMenu({ handleMobileMenu }: Props) {
  return (
    <div className={styles.mobileMenu}>
      <Nav handleMobileMenu={handleMobileMenu} mobile />
    </div>
  );
}
