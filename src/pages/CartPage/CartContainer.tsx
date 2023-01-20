import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decrement } from '../../redux/cartSlice';

import Cart from './Cart';

function CartContainer() {
  const { t, i18n } = useTranslation();
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems?.reduce(
    (total: number, current: { price_en: number; price_ukr: number; quantity: number }) =>
      (total += (i18n.language === 'en' ? current.price_en : current.price_ukr) * current.quantity),
    0,
  );

  const HandleIncrementButton = (id: number) => {
    dispatch(increament(id));
  };

  const HandleDecrementButton = (id: number) => {
    dispatch(decrement(id));
  };
  return (
    <Cart
      t={t}
      i18n={i18n}
      cartItems={cartItems}
      dispatch={dispatch}
      totalPrice={totalPrice}
      HandleIncrementButton={HandleIncrementButton}
      HandleDecrementButton={HandleDecrementButton}
    />
  );
}

export default CartContainer;
