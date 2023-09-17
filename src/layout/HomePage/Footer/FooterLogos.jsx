import logoVeg from '../../../assets/images/logo-veg.png';
import logoEgg from '../../../assets/images/logo-egg.png';
import logoFssai from '../../../assets/images/logo-fssai.png';

function FooterLogos() {
  return (
    <div className="footer-other-logos">
      <img src={logoEgg} alt="Egg Free" />
      <img src={logoFssai} className="fssai" alt="FSSAI" />
      <img src={logoVeg} alt="100% Vegeterian" />
    </div>
  );
}

export default FooterLogos;
