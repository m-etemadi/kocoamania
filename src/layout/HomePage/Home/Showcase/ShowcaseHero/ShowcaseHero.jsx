import { useProducts } from '../../../../../contexts/ProductsContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import { MAX_HERO, SLIDER_AUTOPLAY } from '../../../../../config/config';
import ContentSpinner from '../../../../../components/ContentSpinner';
import SwiperNavButtons from '../../../../../components/SwiperNavButtons';

function ShowcaseHero() {
  const { isLoading, newProducts } = useProducts();

  return (
    <div className="showcase-hero">
      {isLoading ? (
        <ContentSpinner />
      ) : (
        <Swiper
          className="showcase-hero--slider"
          pagination={{ clickable: true }}
          modules={[Pagination, EffectFade, Autoplay]}
          autoplay={SLIDER_AUTOPLAY}
          effect="fade"
        >
          {newProducts
            .map((slide, i) => (
              <SwiperSlide key={i}>
                <img
                  src={slide.productImage}
                  alt={slide.productName}
                  loading="lazy"
                />
              </SwiperSlide>
            ))
            .slice(0, MAX_HERO)}
          <SwiperNavButtons />
        </Swiper>
      )}
    </div>
  );
}

export default ShowcaseHero;
