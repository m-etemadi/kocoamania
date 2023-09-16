import { Link } from 'react-scroll';

function NavLink({ link }) {
  return (
    <Link
      activeClass="active"
      title={link.title}
      to={link.to}
      spy={true}
      smooth={true}
      duration={500}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
