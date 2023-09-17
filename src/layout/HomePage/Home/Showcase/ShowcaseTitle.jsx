import ReactTypingEffect from 'react-typing-effect';
import Button from '../../../../components/Button';
import { WHATSAPP_LINk } from '../../../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from '@fortawesome/free-brands-svg-icons';

function ShowcaseTitle() {
  return (
    <div className="showcase-title text-center">
      <h1 className="heading heading-primary text-white">
        Creating{' '}
        <ReactTypingEffect
          className="text-larger"
          cursorClassName="cursor"
          speed={55}
          eraseSpeed={55}
          eraseDelay={2400}
          typingDelay={100}
          text={['Perfect Days', 'Sweet Moments', 'Nice Feeling']}
        />
        <br />
        One Slice at a Time
      </h1>
      <Button
        title="Enquire Now"
        to={WHATSAPP_LINk}
        type="primary"
        color="red"
        target="_blank"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
      <Button title="Browse Cakes" to="/products" type="primary" color="white">
        <FontAwesomeIcon icon={faSafari} />
      </Button>
    </div>
  );
}

export default ShowcaseTitle;
