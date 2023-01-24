import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import './Modal.css';

function ModalComponent(props: any) {
  const { isOpen, handleClose, cart, i18n, t, HandleIncrementButton, HandleDecrementButton } =
    props;
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <div className="modal-container">
          <h2 className="modal-title">Кошик</h2>
          {cart?.map((item: any) => {
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
          <div className="button-container">
            <button className="button" onClick={handleClose}>
              {t('shopping-modal-button')}
            </button>
            <Link to={'/shopping-cart'}>
              <button className="button">{t('look-cart-button')}</button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
