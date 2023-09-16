import { Element } from 'react-scroll';

function AboutUs({ children }) {
  return (
    <section>
      <Element className="section about" name="section-3">
        {children}
      </Element>
    </section>
  );
}

export default AboutUs;
