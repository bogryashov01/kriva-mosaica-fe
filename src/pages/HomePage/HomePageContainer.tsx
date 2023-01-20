import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/cartSlice';
import { URL } from '../../constants/constants';
import HomePage from './HomePage';

function HomePageContainer() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    fetch(`${URL}/get-relax-items`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data.filter((val: any, i: number) => i < 3);
        setData(filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <HomePage data={data} handleAddToCart={handleAddToCart} t={t} i18n={i18n} />;
}
export default HomePageContainer;
