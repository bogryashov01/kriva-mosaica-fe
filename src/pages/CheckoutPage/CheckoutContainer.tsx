import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { clear } from '../../redux/cartSlice';
import Checkout from './Checkout';

import { cartTotalSelector } from '../../redux/selectors';

import 'react-toastify/dist/ReactToastify.css';

function CheckoutContainer() {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, setPhone] = useState(0);
  const cartItems = useSelector((state: any) => state.cart);
  const cartTotal: any = useSelector(cartTotalSelector);

  const totalPrice = cartItems.reduce(
    (total: number, current: { price_en: number; price_ukr: number; quantity: number }) =>
      (total += (i18n.language === 'en' ? current.price_en : current.price_ukr) * current.quantity),
    0,
  );

  const totalCart: { name: any; quantity: any }[] = [];
  const cart = cartItems.map((item: any) => {
    totalCart.push({
      name: i18n.language === 'en' ? item.name_en : item.name_ukr,
      quantity: item.quantity,
    });
  });

  // const chatId = '374952306';
  const chatId = '237431198';
  const onSubmitHandler = (formData: any) => {
    axios
      .post(
        `https://api.telegram.org/bot5984931516:AAG6dArhGcEYXT7qp0CGUZVakKipuDWayv4/sendMessage`,
        {
          chat_id: chatId,
          parse_mode: 'html',
          text: formData,
        },
      )
      .then((response) => {
        if (response.status === 200) {
          navigate('/');
          toast.success(t('notification-success'), {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          dispatch(clear());
          navigate('/');
        } else if (response.status === 400) {
          toast.error(t('notification-error'), {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      })
      .catch((error) => {
        if (error) {
          toast.error('Стала', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      });
  };

  return (
    <Checkout
      t={t}
      i18n={i18n}
      cartItems={cartItems}
      cartTotal={cartTotal}
      totalPrice={totalPrice}
      onSubmitHandler={onSubmitHandler}
      totalCart={totalCart}
      phone={phone}
      handleChange={setPhone}
    />
  );
}

export default CheckoutContainer;
