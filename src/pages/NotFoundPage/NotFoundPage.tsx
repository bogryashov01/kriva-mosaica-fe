import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="background-image not-found-image"></div>
        <Link to={'/'} className="back-button">
          <button className="button"> Back home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
