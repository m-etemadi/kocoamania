import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import clipboardCopy from 'clipboard-copy';
import Button from '../components/Button';
import ContentSpinner from '../components/ContentSpinner';

function ProductView() {
  const [isCopied, setIsCopied] = useState(false);
  const { isLoading, getCategory, currentCategory } = useApp();

  const { category, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(category);
  }, [category]);

  function copyToClipboard() {
    const urlToCopy = window.location.href;

    clipboardCopy(urlToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch(error => {
        alert('Failed to copy URL: ', error);
      });
  }

  if (isLoading) return <ContentSpinner />;
  return (
    <div className="product-details">
      {currentCategory.map((category, i) => (
        <figure key={i}>
          {category.products
            .filter(item => item.id === Number(id))
            .map((item, i) => (
              <div key={i}>
                <img src={item.productImage} alt={item.productName} />
                <figcaption className="pt-2 pb-2">
                  <h2>{item.productName}</h2>
                </figcaption>
              </div>
            ))}
        </figure>
      ))}

      <Button
        onClick={() => {
          navigate(-1);
        }}
        type="primary"
        color="white"
        title="Back"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <Button
        extraClass={isCopied ? 'disabled' : ''}
        onClick={copyToClipboard}
        type="primary"
        color="white"
        title={isCopied ? 'Link copied to clipboard' : 'Copy link'}
      >
        {!isCopied ? (
          <FontAwesomeIcon icon={faCopy} />
        ) : (
          <FontAwesomeIcon icon={faCheck} />
        )}
      </Button>
    </div>
  );
}

export default ProductView;
