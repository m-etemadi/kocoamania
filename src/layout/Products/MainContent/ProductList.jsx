import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductsContext';
import ProductCard from '../../../components/ProductCard';
import ContentSpinner from '../../../components/ContentSpinner';

function ProductList() {
  const { category } = useParams();
  const { isLoading, getCategory, currentCategory } = useProducts();

  useEffect(() => {
    getCategory(category);
  }, [category, getCategory]);

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
