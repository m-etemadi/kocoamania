import MainSpinner from '../components/MainSpinner';
import Popup from '../components/Popup';
import MobileNav from '../layout/HomePage/MobileNav/MobileNav';
import Header from '../layout/HomePage/Header/Header';
import Logo from '../components/Logo';
import MainNav from '../layout/HomePage/Header/MainNav/MainNav';
import MainContent from '../layout/HomePage/MainContent';
import Home from '../layout/HomePage/Home/Home';
import Showcase from '../layout/HomePage/Home/Showcase/Showcase';
import ShowcaseHero from '../layout/HomePage/Home/Showcase/ShowcaseHero/ShowcaseHero';
import ShowcaseTitle from '../layout/HomePage/Home/Showcase/ShowcaseTitle';
import ProductCarousel from '../layout/HomePage/Home/ProductCarousel/ProductCarousel';
import Categories from '../layout/HomePage/Categories/Categories';
import AboutUs from '../layout/HomePage/AboutUs/AboutUs';
import Testimonials from '../layout/HomePage/AboutUs/Testimonials/Testimonials';
import AboutFounder from '../layout/HomePage/AboutUs/About/AboutFounder';
import ContactUs from '../layout/HomePage/ContactUs/ContactUs';
import CoursesInfo from '../layout/HomePage/ContactUs/CoursesInfo';
import ContactInfo from '../layout/HomePage/ContactUs/ContactInfo';
import Footer from '../layout/HomePage/Footer/Footer';

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
