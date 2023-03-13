import Carousel from 'react-bootstrap/Carousel';
import ModalContainer from '../../components/Modal/ModalContainer';
import CircularProgress from '@mui/material/CircularProgress';

import './ProductCard.css';

function ProductCard(props: {
  product: any;
  handleAddToCart(item: any): any;
  i18n: any;
  t: any;
  handleClose: any;
  isOpen: boolean;
  loading: boolean;
}) {
  const { product, handleAddToCart, loading, t, i18n, handleClose, isOpen } = props;

  return (
    <>
      {loading ? (
        <div className="circular-container circular-progress">
          <CircularProgress />
        </div>
      ) : (
        <div className="container product-item">
          <Carousel>
            <Carousel.Item>
              <img className="image" src={product.imageUrl} alt="First slide" />
            </Carousel.Item>
            {product.imageUrl2 !== '' ? (
              <Carousel.Item>
                <img className="image" src={product.imageUrl2} alt="First slide" />
              </Carousel.Item>
            ) : null}
          </Carousel>
          <div className="product-item-content">
            <div className="product-info">
              <h3 className="product-name">
                {i18n.language === 'en' ? product.name_en : product.name_ukr}
              </h3>
              <hr className="product-line" />
              <p className="product-description">
                {i18n.language === 'en' ? product.description_en : product.description_ukr}
              </p>
              <h3 className="product-price">
                {i18n.language === 'en' ? product.price_en + '  €' : product.price_ukr + ' ₴'}
              </h3>
              <button
                className="button button-yellow product-button"
                onClick={() => handleAddToCart(product)}>
                {t('add-to-cart-button')}
              </button>
            </div>
            <div className="payment-block">
              <h4>{t('payment')}</h4>
              <p>{t('payment-privat')}</p>
              <p>{t('payment-after-recieve')}</p>
              <hr />
              <h4>{t('delivery-tab')}</h4>
              <p>{t('delivery-np')}</p>
              <p>{t('delivery-ukrp')}</p>
            </div>
          </div>
          <div className="product-size-description">
            {product.product_description_en || product.product_description_ukr ? (
              <h4 className="center">
                {' '}
                {i18n.language === 'en'
                  ? product.product_description_en
                  : product.product_description_ukr}
              </h4>
            ) : (
              <>
                <h4 className="center">{t('product-size-title')}</h4>
                <h4 className="center">
                  {t('product-size-description')} {product.product_size} {t('product-size-value')}
                </h4>
              </>
            )}
          </div>
          <ModalContainer handleClose={handleClose} isOpen={isOpen} />
        </div>
      )}
    </>
  );
}
export default ProductCard;
