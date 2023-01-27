import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import CircularProgress from '@mui/material/CircularProgress';

import CarouselBlock from '../../components/Carousel/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import ModalContainer from '../../components/Modal/ModalContainer';

function HomePage(props: {
  data: any;
  handleAddToCart(item: any): any;
  t: any;
  i18n: any;
  isOpen: boolean;
  handleClose: any;
  loading: boolean;
}) {
  const { data, handleAddToCart, t, i18n, isOpen, handleClose, loading } = props;
  return (
    <>
      <CarouselBlock />
      <div className="create-block">
        <h2 className="center blue">{t('what-we-create')}</h2>
        <div className="create-block-content">
          <div className="background-image teaMosaic"></div>
          <div className="create-content">
            <h3 className="wht">{t('what-we-create-title')}</h3>
            <hr></hr>
            <p className="wht">{t('what-we-create-text')}</p>
            <button className="button button-white">{t('what-we-create-button')} </button>
          </div>
          <div className="background-image wallMosaic"></div>
        </div>
      </div>
      <div className="container relax-block">
        <h2 className="center blue">{t('relax-title')}</h2>
        {loading ? (
          <div className="circular-progress">
            <CircularProgress />
          </div>
        ) : (
          <div className="relax-shop-items">
            {data.map(
              (item: {
                id: string;
                imageUrl: string | undefined;
                name_ukr: string;
                name_en: string;
                price_en: number;
                price_ukr: number;
                description_en: string;
                description_ukr: string;
              }) => {
                return (
                  <div className="card" key={item.id}>
                    <Link to={`/product-item/${item.id}`} className="product-card-link">
                      <img src={item.imageUrl} alt="" />
                    </Link>
                    <div className="card-description">
                      <div>
                        <div className="card-name-price">
                          <p>{i18n.language === 'en' ? item.name_en : item.name_ukr}</p>
                          <p className="end">
                            <strong>
                              {i18n.language === 'en'
                                ? item.price_en + '  €'
                                : item.price_ukr + ' ₴'}
                            </strong>
                          </p>
                        </div>
                        <p className="card-description-text">
                          {i18n.language === 'en' ? item.description_en : item.description_ukr}
                        </p>
                      </div>
                      <p style={{ textAlign: 'end' }} onClick={() => handleAddToCart(item)}>
                        <MdShoppingCart className="shopping-cart-icon" />
                      </p>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        )}
        <ModalContainer isOpen={isOpen} handleClose={handleClose} />
        <div className="center magazine-button">
          <Link to={'/shop'}>
            <button className="button center">
              {t('shop-button')} {'->'}
            </button>
          </Link>
        </div>
      </div>
      <div className="secret-block">
        <h2 className="center wht">{t('secret-title')}</h2>
        <p className="wht">{t('secret-text')}</p>
        <div className="secret-image-block">
          <div className="background-image lionMosaic" id="lionMosaic"></div>
          <div className="background-image lionBlocks"></div>
          <div className="background-image taurusMosaic"></div>
          <div className="background-image scalesMosaic"></div>
          <div className="background-image fishMosaic"></div>
          <div className="background-image scalesBlocks" id="scalesBlocks"></div>
        </div>
      </div>
      <div className="kid-section">
        <h2 className="center blue">{t('creative-title')}</h2>
        <div className="kid-block">
          <div className="background-image kid1-image"></div>
          <p>{t('creative-text')}</p>
          <div className="background-image kid2-image"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
