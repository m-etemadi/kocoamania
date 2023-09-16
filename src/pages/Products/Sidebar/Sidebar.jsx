import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from './SidebarNav';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSideNavToggle() {
    setIsOpen(o => !o);
  }

  return (
    <aside className={`side-nav ${isOpen ? 'open' : ''}`}>
      <div onClick={handleSideNavToggle} className="side-nav-toggle">
        <FontAwesomeIcon
          className={`${isOpen ? 'rotate' : ''}`}
          icon={faArrowRight}
        />
      </div>
      <div className="row-top">
        <Logo />
        <Link to="/" title="Back to Home">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to Home
        </Link>
      </div>
      <div className="row-bottom">
        <SidebarNav onSideNavToggle={handleSideNavToggle} />
      </div>
    </aside>
  );
}

export default Sidebar;
