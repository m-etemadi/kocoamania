import MainSpinner from '../../components/MainSpinner';
import Sidebar from './Sidebar/Sidebar';
import ProductsTab from './ProductsTab/ProductsTab';

function Products() {
  return (
    <>
      <MainSpinner />

      <div className="wrapper">
        <Sidebar />
        <ProductsTab />
      </div>
    </>
  );
}

export default Products;
