import { useApp } from '../../contexts/AppContext';
import SocialIcons from './SocialIcons/SocialIcons';

function ContactInfo() {
  const { contactUs } = useApp();

  return (
    <article className="contact-info text-center">
      <div>
        <h4 className="heading heading-tertiary text-red">Phone</h4>
        <a href={`tel:${contactUs.phone}`} title="Telephone">
          {contactUs.phone}
        </a>
      </div>

      <div>
        <h4 className="heading heading-tertiary text-red">Email</h4>
        <a href="mailto:kocoamania@gmail.com" title="Email Address">
          {contactUs.email}
        </a>
      </div>
      <SocialIcons />
    </article>
  );
}

export default ContactInfo;
