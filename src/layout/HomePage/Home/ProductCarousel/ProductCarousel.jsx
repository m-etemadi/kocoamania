import { useApp } from '../../../../contexts/AppContext';
import {
  MAX_CAROUSEL,
  CAROUSEL_BREAKPOINTS,
  SLIDER_AUTOPLAY,
} from '../../../../config/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ContentSpinner from '../../../../components/ContentSpinner';
import ProductCard from '../../../../components/ProductCard';
import SwiperNavButtons from '../../../../components/SwiperNavButtons';

function ProductCarousel() {
  const { isLoading, newProducts } = useApp();

  return (
    <div className="products products-carousel pt-7 pb-7">
      <div className="container">
        {isLoading ? (
          <ContentSpinner />
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            className="carousel"
            breakpoints={CAROUSEL_BREAKPOINTS}
            autoplay={SLIDER_AUTOPLAY}
          >
            {newProducts
              .map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))
              .slice(0, MAX_CAROUSEL)}
            <SwiperNavButtons />
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default ProductCarousel;
