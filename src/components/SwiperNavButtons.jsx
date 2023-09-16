import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwiper } from 'swiper/react';

function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <button className="swiper-button-next" onClick={() => swiper.slideNext()}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </div>
  );
}

export default SwiperNavButtons;
