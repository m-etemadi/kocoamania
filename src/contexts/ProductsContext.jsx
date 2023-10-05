import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BASE_URL } from '../config/config';
import { fixCategoryName, getJSON } from '../helpers/helpers';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const newProducts = categories
    .flatMap(category => category.products)
    .filter(item => item.isNew === true);

  async function fetchProducts() {
    setIsLoading(true);

    try {
      const data = await getJSON(`${BASE_URL}/products`);
      setCategories(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const getCategory = useCallback(async function getCategory(name) {
    setIsLoading(true);

    try {
      const data = await getJSON(
        `${BASE_URL}/products?categoryName=${fixCategoryName(name)}`
      );
      setCurrentCategory(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(function () {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        categories,
        currentCategory,
        newProducts,
        getCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error('ProductsContext was used outside the ProductsProvider');
  return context;
}

export { ProductsProvider, useProducts };
