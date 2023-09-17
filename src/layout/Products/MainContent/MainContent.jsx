import { Outlet } from 'react-router-dom';
import Searchbar from './Searchbar';

function MainContent() {
  return (
    <main className="product-view">
      <Searchbar />
      <section className="tab-content">
        <Outlet />
      </section>
    </main>
  );
}

export default MainContent;
