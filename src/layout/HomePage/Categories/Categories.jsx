import { useProducts } from '../../../contexts/ProductsContext';
import { MAX_CATEGORIES } from '../../../config/config';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Message from '../../../components/Message';
import Button from '../../../components/Button';
import ContentSpinner from '../../../components/ContentSpinner';
import CategoriesItem from './CategoriesItem';

function Categories() {
  const { isLoading, categories } = useProducts();

  return (
    <section>
      <Element className="section categories pt-7 pb-7" name="section-2">
        <h2 className="heading heading-secondary text-white">
          Explore our Range of Confectionary
        </h2>
        <div className="container">
          {!categories.length && (
            <Message message="No categories are available to show!" />
          )}

          {isLoading ? (
            <ContentSpinner />
          ) : (
            categories
              .map((category, i) => (
                <CategoriesItem category={category} key={i} />
              ))
              .slice(0, MAX_CATEGORIES)
          )}
        </div>
        <div className="text-center pt-5">
          <Button title="View more" to="/products" type="primary" color="red">
            <FontAwesomeIcon icon={faPlusCircle} />
          </Button>
        </div>
      </Element>
    </section>
  );
}

export default Categories;
