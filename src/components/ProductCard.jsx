import { WHATSAPP_LINk } from '../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { fixCategoryLink } from '../helpers/helpers';

function ProductCard({ item }) {
  const { id, categoryName, isNew, productImage, productName } = item;

  return (
    <figure key={id} className="card">
      <div className="card-image">
        <Link to={`/products/${fixCategoryLink(categoryName)}/${id}`}>
          {isNew && <span className="new-label">New</span>}
          <img src={productImage} alt={productName} loading="lazy" />
        </Link>
      </div>
      <figcaption className="card-details">
        <div className="card-details--info">
          <h3>{productName}</h3>
        </div>
        <div className="card-details--button">
          <a href={WHATSAPP_LINk} title="What'sApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" title="Share">
            <FontAwesomeIcon icon={faShareAlt} />
          </a>
        </div>
      </figcaption>
    </figure>
  );
}

export default ProductCard;
