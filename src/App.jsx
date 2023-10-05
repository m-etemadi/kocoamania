import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { DEFAULT_CATEGORY } from './config/config';
import MainSpinner from './components/MainSpinner';
import ProductList from './layout/Products/MainContent/ProductList';
import ProductView from './pages/ProductView';
import PageNotFound from './pages/PageNotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ProductsProvider>
          <Suspense fallback={<MainSpinner />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="products" element={<Products />}>
                <Route
                  index
                  element={
                    <Navigate replace to={`/products/${DEFAULT_CATEGORY}`} />
                  }
                />
                <Route path="/products/:category" element={<ProductList />} />
                <Route
                  path="/products/:category/:id"
                  element={<ProductView />}
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </ProductsProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
