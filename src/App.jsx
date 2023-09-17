import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { DEFAULT_CATEGORY } from './config/config';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductList from './layout/Products/MainContent/ProductList';
import ProductView from './pages/ProductView';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
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
            <Route path="/products/:category/:id" element={<ProductView />} />
          </Route>
          <Route path="*" element={<p>Page NOT found!</p>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
