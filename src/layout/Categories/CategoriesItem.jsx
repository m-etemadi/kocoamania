import { Link } from 'react-router-dom';
import { fixCategoryLink } from '../../helpers/helpers';

function CategoriesItem({ category }) {
  const { categoryName, categoryColor, categoryImage } = category;

  return (
    <div className={`card card-${categoryColor}`}>
      <div className="card-image">
        <img src={categoryImage} alt="Product 5" />
      </div>
      <Link
        to={`products/${fixCategoryLink(categoryName)}`}
        title={categoryName}
      >
        {categoryName}
      </Link>
    </div>
  );
}

export default CategoriesItem;
