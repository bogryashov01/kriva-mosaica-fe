import React, { useEffect } from 'react';
import { Box, Card, CardContent } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import FormikStepper from '../../components/FormikStepper/FormikStepper';
import FormikStep from '../../components/FormikStepper/FormikStep';

import './Checkout.css';

function Checkout(props: {
  cartItems: any;
  cartTotal: any;
  totalCart: any;
  totalPrice: number;
  t: any;
  i18n: any;
  onSubmitHandler: any;
}) {
  const { i18n, t, cartItems, cartTotal, totalPrice, onSubmitHandler, totalCart } = props;
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  //   lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  //   city: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  //   phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  //   poshta: Yup.number().min(2, 'Too Short!').required('Required'),
  // });

  useEffect(() => {
    if (cartItems.length <= 0) {
      redirect();
    }
  });

  return (
    <>
      <Card className="checkout-container">
        <CardContent>
          <FormikStepper
            initialValues={{
              city: '',
              country: '',
              currency: i18n.language === 'en' ? '  €' : ' ₴',
              delivery_number: '',
              email: '',
              firstName: '',
              lastName: '',
              phone: '',
              poshta: '',
              totalPrice: totalPrice,
            }}
            onSubmit={async (values) => {
              let textMessage = `<b>Заявка на покупку</b>\n`;
              textMessage += `<b>Дата : ${new Date().toLocaleDateString()} </b>\n`;
              textMessage += `<b>Імя : ${values.firstName} </b>\n`;
              textMessage += `<b>Прізвище : ${values.lastName} </b>\n`;
              textMessage += `<b>Телефон : ${values.phone} </b>\n`;
              textMessage += `<b>Місто : ${values.city} </b>\n`;
              textMessage += `<b>Країна : ${values.country} </b>\n`;
              textMessage += `<b>Поштовий перевізник : ${values.poshta} </b>\n`;
              textMessage += `<b>Номер відділення : ${values.delivery_number} </b>\n`;
              textMessage += `<b>Замовлення: </b>${JSON.stringify(totalCart)}\n`;
              textMessage += `<b>Загальна ціна : ${values.totalPrice} ${
                i18n.language === 'en' ? '  €' : ' ₴'
              }</b>\n`;
              await onSubmitHandler(textMessage);
              console.log('values', values);
            }}
            // validationSchema={validationSchema}
          >
            <FormikStep label={t('personal-info-tab')}>
              <Box className="input">
                <Field fullWidth name="email" component={TextField} label={t('email')} />
              </Box>
              <Box className="input">
                <Field fullWidth name="firstName" component={TextField} label={t('name')} />
              </Box>
              <Box className="input">
                <Field fullWidth name="lastName" component={TextField} label={t('last_name')} />
              </Box>
            </FormikStep>
            <FormikStep label="Доставка">
              <h2 className="choose-delivery-title">{t('delivery-variant')}</h2>
              <div className="choose-delivery">
                <Box className="input">
                  <label>
                    <Field name="poshta" type="radio" value={'Новая почта' || ''} />
                    {t('delivery-np')}
                  </label>
                </Box>
                <Box className="input">
                  <label>
                    <Field name="poshta" type="radio" value={'Укр Почта' || ''} />
                    {t('delivery-ukrp')}
                  </label>
                </Box>
              </div>
              <Box className="input">
                <Field fullWidth name="phone" component={TextField} label={t('phone')} />
              </Box>
              <Box className="input">
                <Field fullWidth name="city" component={TextField} label={t('city')} />
              </Box>
              <Box className="input">
                <Field fullWidth name="country" component={TextField} label={t('country')} />
              </Box>
              <Box className="input">
                <Field
                  fullWidth
                  name="delivery_number"
                  component={TextField}
                  label={t('post-number')}
                />
              </Box>
            </FormikStep>
            <FormikStep label={t('payment-tab')}>
              <p className="checkout-text">{t('requisites-text')}</p>
            </FormikStep>
            <FormikStep label={t('order-placement-tab')}>
              <p className="checkout-text">{t('confirm-text')}</p>
            </FormikStep>
          </FormikStepper>
        </CardContent>
        <div className="checkout-data-container">
          <div className="checkout-header">
            <h3>
              {t('cart-info')}({cartTotal})
            </h3>
            <Link to="/" className="end">
              {t('change-cart')}
            </Link>
          </div>
          {cartItems.map((item: any) => {
            return (
              <div className="checkout-item">
                <div className="checkout-item-description">
                  <img src={item.imageUrl} alt="" />
                  <div>
                    <p>{i18n.language === 'en' ? item.description_en : item.description_ukr}</p>
                    <p>{i18n.language === 'en' ? item.name_en : item.name_ukr}</p>
                    <p>К-сть: {item.quantity}</p>
                  </div>
                </div>
                <p> {i18n.language === 'en' ? item.price_en + '  €' : item.price_ukr + ' ₴'}</p>
              </div>
            );
          })}
          <hr></hr>
          <div className="price-container">
            <p>{t('sum-price')}</p>
            <p className="end">
              {totalPrice} {i18n.language === 'en' ? '  €' : ' ₴'}
            </p>
            <p>{t('delivery-tab')}</p>
            <p className="end">Безкоштовно</p>
          </div>
          <hr></hr>
          <div className="price-container">
            <h2>{t('total-price')}</h2>
            <h2 className="end">
              {totalPrice} {i18n.language === 'en' ? '  €' : ' ₴'}
            </h2>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Checkout;
