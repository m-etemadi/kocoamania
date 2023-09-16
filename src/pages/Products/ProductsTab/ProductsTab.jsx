import { Outlet } from 'react-router-dom';
import Searchbar from './Searchbar';

function ProductView() {
  return (
    <main className="product-view">
      <Searchbar />
      <section className="tab-content">
        <Outlet />
      </section>
    </main>
  );
}

export default ProductView;
