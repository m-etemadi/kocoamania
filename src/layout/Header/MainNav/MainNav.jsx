import NavLink from '../../../components/NavLink';
import { navData } from '../../../db/navData';

function MainNav() {
  return (
    <nav className="main-nav nav">
      <ul role="list">
        {navData.map(link => (
          <li key={link.title}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
