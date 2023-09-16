const BASE_URL = 'http://localhost:9000';
const DEFAULT_CATEGORY = 'kids-cakes';
const MAX_HERO = 5;
const MAX_CAROUSEL = 12;
const MAX_CATEGORIES = 15;
const EFFECTIVE_DATE = '1st August, 2023';

const WHATSAPP_LINk =
  'https://wa.me/919163826382/?text=Hello!. Could you please provide me with information on the options, flavors, pounds, and prices available.';

const SLIDER_AUTOPLAY = {
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
  delay: 3000,
};

const CAROUSEL_BREAKPOINTS = {
  600: {
    slidesPerView: 1,
  },
  641: {
    slidesPerView: 2,
  },
  769: {
    slidesPerView: 3,
  },
  1025: {
    slidesPerView: 4,
  },
};

const TIMEOUT_SEC = 10;

export {
  BASE_URL,
  DEFAULT_CATEGORY,
  MAX_HERO,
  MAX_CAROUSEL,
  MAX_CATEGORIES,
  SLIDER_AUTOPLAY,
  CAROUSEL_BREAKPOINTS,
  WHATSAPP_LINk,
  EFFECTIVE_DATE,
  TIMEOUT_SEC,
};
