import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config/config';
import { fixCategoryName, getJSON } from '../helpers/helpers';
import useLoading from '../hooks/useLoading';

const AppContext = createContext();

function AppProvider({ children }) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [popupOpen, setPopupOpen] = useState(false);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [contactUs, setContactUs] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  function handleScroll() {
    window.scrollY > 80 ? setScrolling(true) : setScrolling(false);
  }

  function handlePopupToggle() {
    setPopupOpen(open => !open);
  }

  const newProducts = categories
    .flatMap(category => category.products)
    .filter(item => item.isNew === true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  async function fetchProducts() {
    startLoading();

    try {
      const data = await getJSON(`${BASE_URL}/products`);
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      stopLoading();
    }
  }

  async function fetchAboutUs() {
    startLoading();

    try {
      const data = await getJSON(`${BASE_URL}/aboutUs`);
      setAboutUs(data.at(0));
    } catch (err) {
      setError(err.message);
    } finally {
      stopLoading();
    }
  }

  async function fetchContactUs() {
    startLoading();

    try {
      const data = await getJSON(`${BASE_URL}/contactUs`);
      setContactUs(data.at(0));
    } catch (err) {
      setError(err.message);
    } finally {
      stopLoading();
    }
  }

  async function getCategory(name) {
    startLoading();

    try {
      const data = await getJSON(
        `${BASE_URL}/products?categoryName=${fixCategoryName(name)}`
      );
      setCurrentCategory(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      stopLoading();
    }
  }

  useEffect(function () {
    fetchProducts();
    fetchAboutUs();
    fetchContactUs();
  }, []);

  return (
    <AppContext.Provider
      value={{
        scrolling,
        isLoading,
        error,
        categories,
        currentCategory,
        newProducts,
        popupOpen,
        onPopupToggle: handlePopupToggle,
        aboutUs,
        contactUs,
        getCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error('AppContext was used outside the AppProvider');
  return context;
}

export { AppProvider, useApp };
