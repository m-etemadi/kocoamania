import { useApp } from '../../../../contexts/AppContext';

function AboutFounder() {
  const { aboutUs } = useApp();

  return (
    <div className="about-founder pt-7 pb-7">
      <h2 className="heading heading-secondary text-white">
        About the Founder
      </h2>
      <div className="container reveal fade-left">
        <div className="about-founder--image">
          <img src={aboutUs.image} alt="About Us" loading="lazy" />
        </div>
        <article className="about-founder--text">
          <p>{aboutUs.text}</p>
        </article>
      </div>
    </div>
  );
}

export default AboutFounder;
