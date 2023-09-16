import Logo from '../../components/Logo';
import FooterNav from './FooterNav';
import Copyright from './Copyright';
import FooterLogos from '../Footer/FooterLogos';

function Footer({ onPopupToggle }) {
  return (
    <footer className="footer pt-3 pb-3">
      <div className="container">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="text-center">
          <FooterNav />
          <Copyright onPopupToggle={onPopupToggle} />
        </div>
        <FooterLogos />
      </div>
    </footer>
  );
}

export default Footer;
