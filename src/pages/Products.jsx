import MainSpinner from '../components/MainSpinner';
import Sidebar from '../layout/Products/Sidebar/Sidebar';
import MainContent from '../layout/Products/MainContent/MainContent';

function Products() {
  return (
    <>
      <MainSpinner />

      <div className="wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default Products;
