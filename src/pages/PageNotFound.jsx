import Button from '../components/Button';

function PageNotFound() {
  return (
    <div className="not-found">
      <div>
        <h1>404!</h1>
        <h2>Page NOT found</h2>
      </div>
      <Button to="/" color="red" type="primary" title="Home Page" />
      <Button to="/products" color="red" type="primary" title="Products" />
    </div>
  );
}

export default PageNotFound;
