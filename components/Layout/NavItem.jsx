//components
import ActiveLink from './ActiveLink';

const NavItem = ({ text, href, active }) => {
  return <ActiveLink text={text} href={href} />;
};

export default NavItem;
