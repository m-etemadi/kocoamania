import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Logo() {
  return (
    <Link to="/" className="logo" title="Kocoa Mania">
      <img src={logo} alt="kocoamania" loading="lazy" />
    </Link>
  );
}

export default Logo;
