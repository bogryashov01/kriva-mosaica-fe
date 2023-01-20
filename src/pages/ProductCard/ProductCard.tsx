import Carousel from 'react-bootstrap/Carousel';
import './ProductCard.css';

function ProductCard(props: { product: any; handleAddToCart(item: any): any; i18n: any; t: any }) {
  const { product, handleAddToCart, t, i18n } = props;

  return (
    <div className="container product-item">
      <Carousel>
        <Carousel.Item>
          <img className="image" src={product.imageUrl} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={product.imageUrl} alt="First slide" />
        </Carousel.Item>
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
    </div>
  );
}
export default ProductCard;