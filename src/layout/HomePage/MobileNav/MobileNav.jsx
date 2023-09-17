import { useApp } from '../../../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as Menu } from 'react-burger-menu';
import { navData } from '../../../db/navData';
import NavLink from '../../../components/NavLink';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MobileNav() {
  const { scrolling } = useApp();

  return (
    <Menu
      right
      stack
      className="nav"
      customBurgerIcon={
        <FontAwesomeIcon
          className={!scrolling ? 'burger-menu' : ''}
          icon={faBars}
        />
      }
    >
      {navData.map(link => (
        <NavLink link={link} key={link.title} />
      ))}
    </Menu>
  );
}

export default MobileNav;
