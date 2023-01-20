import { Link } from 'react-router-dom';

import './Cart.css';

function Cart(props: {
  t: any;
  i18n: any;
  cartItems: any;
  totalPrice: number;
  dispatch: any;
  HandleIncrementButton(Id: number): any;
  HandleDecrementButton(Id: number): any;
}) {
  const { t, i18n, cartItems, totalPrice, HandleIncrementButton, HandleDecrementButton } = props;

  console.log(cartItems);
  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <div className="cart-content">
            {cartItems?.map((item: any) => {
              return (
                <div className="cart-item" key={item.id}>
                  <img src={item.imageUrl} alt="" className="cart-image" />
                  <div>
                    <p>{i18n.language === 'en' ? item.name_en : item.name_ukr}</p>
                    <p>{i18n.language === 'en' ? item.description_en : item.description_ukr}</p>
                    <p>
                      <strong>
                        {i18n.language === 'en' ? item.price_en + '  €' : item.price_ukr + ' ₴'}
                      </strong>
                    </p>
                  </div>
                  <div className="cart-quantity">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => {
                        HandleDecrementButton(item.id);
                      }}
                      className={
                        item.quantity === 1 ? 'button-quantity disabled' : 'button-quantity'
                      }>
                      -
                    </button>
                    <p>
                      <strong>{item.quantity}</strong>
                    </p>
                    <button
                      onClick={() => {
                        HandleIncrementButton(item.id);
                      }}
                      className="button-quantity">
                      +
                    </button>
                  </div>
                  <div>
                    <p>
                      <strong>
                        {item.quantity * (i18n.language === 'en' ? item.price_en : item.price_ukr)}
                      </strong>
                      <strong> {i18n.language === 'en' ? '  €' : ' ₴'}</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total-price">
            <strong>{t('total-price')}</strong> {totalPrice} {i18n.language === 'en' ? '  €' : ' ₴'}
          </div>
          <Link to="/checkout" className="checkout-button">
            {t('checkout-button')}
          </Link>
        </div>
      ) : (
        <p>NO items in cart go to the shop</p>
      )}
    </div>
  );
}

export default Cart;
