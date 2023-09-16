import { useEffect, useState } from 'react';

function MainSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return (
      <div className="main-spinner-container">
        <div className="main-spinner spinner"></div>
      </div>
    );
}

export default MainSpinner;
