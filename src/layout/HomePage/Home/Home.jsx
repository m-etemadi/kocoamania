import { Element } from 'react-scroll';

function Home({ children }) {
  return (
    <section>
      <Element className="section home" name="section-1">
        {children}
      </Element>
    </section>
  );
}

export default Home;
