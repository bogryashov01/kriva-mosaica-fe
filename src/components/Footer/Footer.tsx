import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LogoWht } from '../../assets';
import './footer.css';
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container footer-container">
        <Link to="/">
          <img src={LogoWht} alt="logo" className="footer-logo" />
        </Link>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            {t('header-tab-about-us')}
          </Link>
          <Link to="/shop" className="footer-link">
            {t('header-tab-shop')}
          </Link>
          <Link to="/class" className="footer-link">
            {t('header-tab-master-class')}
          </Link>
          <Link to="/contacts" className="footer-link">
            {t('header-tab-contact-button')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
