import { WHATSAPP_LINk } from '../../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const socialIcons = [
  { link: 'https://www.facebook.com/KocoaMania/', icon: faFacebookF },
  { link: 'https://www.instagram.com/kocoamania/', icon: faInstagram },
  { link: WHATSAPP_LINk, icon: faWhatsapp },
  { link: '#', icon: faShareAlt },
];

function SocialIcons() {
  return (
    <div className="contact-info--social-icons">
      {socialIcons.map((button, i) => (
        <Button to={button.link} type="secondary" target="_blank" key={i}>
          <FontAwesomeIcon icon={button.icon} />
        </Button>
      ))}
    </div>
  );
}

export default SocialIcons;
