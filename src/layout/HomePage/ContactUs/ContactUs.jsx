import { Element } from 'react-scroll';

function ContactUs({ children }) {
  return (
    <section>
      <Element className="section contact pt-7 pb-7" name="section-4">
        <h2 className="heading heading-secondary text-red">Contact Us</h2>
        <div className="container">
          <div className="top-row">{children}</div>
          <div className="text-center pt-5">
            <h3 className="heading heading-tertiary text-red">
              Delivery available 24/7 across kolkata
            </h3>
          </div>
        </div>
      </Element>
    </section>
  );
}

export default ContactUs;
