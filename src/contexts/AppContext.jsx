import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config/config';
import { getJSON } from '../helpers/helpers';

const AppContext = createContext();

function AppProvider({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [aboutUs, setAboutUs] = useState([]);
  const [contactUs, setContactUs] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  function handleScroll() {
    window.scrollY > 80 ? setScrolling(true) : setScrolling(false);
  }

  function handlePopupToggle() {
    setPopupOpen(open => !open);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  async function fetchAboutUs() {
    try {
      const data = await getJSON(`${BASE_URL}/aboutUs`);
      setAboutUs(data.at(0));
    } catch (err) {
      alert(err.message);
    }
  }

  async function fetchContactUs() {
    try {
      const data = await getJSON(`${BASE_URL}/contactUs`);
      setContactUs(data.at(0));
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(function () {
    fetchAboutUs();
    fetchContactUs();
  }, []);

  return (
    <AppContext.Provider
      value={{
        scrolling,
        popupOpen,
        onPopupToggle: handlePopupToggle,
        aboutUs,
        contactUs,
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
