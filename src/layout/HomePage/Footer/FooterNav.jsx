import { navData } from '../../../db/navData';
import NavLink from '../../../components/NavLink';

function FooterNav() {
  return (
    <div className="footer-nav pb-2">
      {navData.map(link => (
        <NavLink link={link} key={link.title} />
      ))}
    </div>
  );
}

export default FooterNav;
