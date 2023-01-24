import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/cartSlice';
import { URL } from '../../constants/constants';
import HomePage from './HomePage';

function HomePageContainer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

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

  return (
    <HomePage
      data={data}
      handleAddToCart={handleAddToCart}
      t={t}
      i18n={i18n}
      isOpen={isOpen}
      handleClose={handleClose}
    />
  );
}
export default HomePageContainer;
