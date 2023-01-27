import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import i18n from '../../i18n';

import ModalContainer from '../../components/Modal/ModalContainer';

import '../../App.css';
import './ShopPage.css';

function ShopPage(props: any) {
  const {
    data,
    handleAddToCart,
    categories,
    onCategoryChoose,
    activeCategory,
    isOpen,
    handleClose,
    t,
    loading,
  } = props;
  return (
    <div className="shop-container">
      <div className="sidebar">
        <div
          onClick={() => {
            onCategoryChoose('All');
          }}
          className={activeCategory === 'All' ? 'catalog-item active' : 'catalog-item'}>
          <h4>{t('category-all')} </h4>
        </div>
        {categories.map((category: any, index: number) => {
          return (
            <div
              onClick={() => {
                onCategoryChoose(category.value);
              }}
              key={index}
              className={activeCategory === category.name ? 'catalog-item active' : 'catalog-item'}>
              <h4>{category.name}</h4>
            </div>
          );
        })}
      </div>
      {loading ? (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      ) : (
        <div className="products-container">
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
                            {i18n.language === 'en' ? item.price_en + '  €' : item.price_ukr + ' ₴'}
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
    </div>
  );
}

export default ShopPage;
