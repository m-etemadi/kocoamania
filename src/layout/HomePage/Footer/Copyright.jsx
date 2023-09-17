import { useApp } from '../../../contexts/AppContext';

function Copyright() {
  const curYear = new Date().getFullYear();
  const { onPopupToggle } = useApp();

  return (
    <div className="copyright">
      <p>
        Copyright &copy; <span className="year">{curYear}</span> All rights
        reserved. |{' '}
        <a onClick={onPopupToggle} title="Privacy policy">
          Privacy policy
        </a>
      </p>
    </div>
  );
}

export default Copyright;
