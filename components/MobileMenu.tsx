import Nav from './Nav';

interface Props {
  handleMobileMenu: () => void;
}

export default function MobileMenu({ handleMobileMenu }: Props) {
  return (
    <div className="header__mobile">
      <Nav handleMobileMenu={handleMobileMenu} />
    </div>
  );
}
