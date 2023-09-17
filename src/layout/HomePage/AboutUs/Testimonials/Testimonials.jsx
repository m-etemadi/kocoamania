import { SLIDER_AUTOPLAY } from '../../../../config/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useApp } from '../../../../contexts/AppContext';
import TestimonialsItem from './TestimonialsItem';
import ContentSpinner from '../../../../components/ContentSpinner';

function Testimonials() {
  const { isLoading, aboutUs } = useApp();
  const testimonials = aboutUs.testimonials;

  return (
    <div className="about-testimonials text-center pt-7 pb-7" id="about">
      <h2 className="heading heading-secondary text-red">
        Customer Testimonials
      </h2>
      <div className="container">
        {isLoading ? (
          <ContentSpinner />
        ) : (
          <Swiper
            className="testimonials"
            modules={[Autoplay]}
            autoplay={SLIDER_AUTOPLAY}
          >
            {testimonials &&
              testimonials.map((testimonial, i) => (
                <SwiperSlide key={i} className="quote">
                  <TestimonialsItem testimonial={testimonial} key={i} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
