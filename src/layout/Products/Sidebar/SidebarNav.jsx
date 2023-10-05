import { NavLink } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductsContext';
import { fixCategoryLink } from '../../../helpers/helpers';

function SidebarNav({ onSideNavToggle }) {
  const { categories } = useProducts();

  return (
    <ul className="tab-links" role="list">
      {categories.map((category, i) => (
        <li key={i}>
          <NavLink
            onClick={onSideNavToggle}
            to={fixCategoryLink(category.categoryName)}
            title={category.categoryName}
          >
            {category.categoryName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SidebarNav;
