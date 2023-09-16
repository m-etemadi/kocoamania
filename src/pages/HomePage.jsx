import MainSpinner from '../components/MainSpinner';
import Popup from '../components/Popup';
import MobileNav from '../layout/MobileNav/MobileNav';
import Header from '../layout/Header/Header';
import Logo from '../components/Logo';
import MainNav from '../layout/Header/MainNav/MainNav';
import MainContent from '../layout/MainContent';
import Home from '../layout/Home/Home';
import Showcase from '../layout/Home/Showcase/Showcase';
import ShowcaseHero from '../layout/Home/Showcase/ShowcaseHero/ShowcaseHero';
import ShowcaseTitle from '../layout/Home/Showcase/ShowcaseTitle';
import ProductCarousel from '../layout/Home/ProductCarousel/ProductCarousel';
import Categories from '../layout/Categories/Categories';
import AboutUs from '../layout/AboutUs/AboutUs';
import Testimonials from '../layout/AboutUs/Testimonials/Testimonials';
import AboutFounder from '../layout/AboutUs/About/AboutFounder';
import ContactUs from '../layout/ContactUs/ContactUs';
import CoursesInfo from '../layout/ContactUs/CoursesInfo';
import ContactInfo from '../layout/ContactUs/ContactInfo';
import Footer from '../layout/Footer/Footer';

function HomePage() {
  return (
    <>
      <MainSpinner />
      <Popup />
      <MobileNav />
      <Header>
        <Logo />
        <MainNav />
      </Header>
      <MainContent>
        <Home>
          <Showcase>
            <ShowcaseTitle />
            <ShowcaseHero />
          </Showcase>
          <ProductCarousel />
        </Home>
        <Categories />
        <AboutUs>
          <Testimonials />
          <AboutFounder />
        </AboutUs>
        <ContactUs>
          <CoursesInfo />
          <ContactInfo />
        </ContactUs>
      </MainContent>
      <Footer />
    </>
  );
}

export default HomePage;
