import { useApp } from '../../contexts/AppContext';

function Header({ children }) {
  const { scrolling } = useApp();

  return (
    <header className={`header ${scrolling ? 'scrolled-down' : ''}`}>
      <div className="container">{children}</div>
    </header>
  );
}

export default Header;
