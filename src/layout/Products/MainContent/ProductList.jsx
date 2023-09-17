import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../../../contexts/AppContext';
import ProductCard from '../../../components/ProductCard';
import ContentSpinner from '../../../components/ContentSpinner';

function ProductList() {
  const { category } = useParams();
  const { isLoading, getCategory, currentCategory } = useApp();

  useEffect(() => {
    getCategory(category);
  }, [category]);

  if (isLoading) return <ContentSpinner />;
  return (
    <>
      {currentCategory.map((category, i) => (
        <div className="products" key={i}>
          {category.products.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductList;
