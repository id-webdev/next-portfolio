import Nav from '../Nav/Nav';
import styles from './MobileMenu.module.scss';

type MobileMenuProps = {
  currentSection: string;
};

export default function MobileMenu({ currentSection }: MobileMenuProps) {
  return (
    <div className={styles.mobileMenu}>
      <Nav currentSection={currentSection} mobile />
    </div>
  );
}
