import { Link } from 'react-router-dom';

function Button({
  children = null,
  to = null,
  type,
  color = null,
  target = null,
  onClick = null,
  title = null,
  extraClass = '',
}) {
  return (
    <Link
      onClick={onClick}
      to={to}
      title={title}
      target={target}
      className={`btn btn-${type} btn-${color} ${extraClass}`}
    >
      {children} {title}
    </Link>
  );
}

export default Button;
