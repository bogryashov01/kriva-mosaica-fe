import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux/cartSlice';
import { URL } from '../../constants/constants';
import HomePage from './HomePage';
import { setStartLoading, setStopLoading } from '../../redux/loadingSlice';

function HomePageContainer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const loading = useSelector((state: any) => state.loading.loading);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    dispatch(setStartLoading());
    fetch(`${URL}/get-relax-items`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setStopLoading());
        let filteredData = data.filter((val: any, i: number) => i < 3);
        setData(filteredData);
      })
      .catch((err) => {
        dispatch(setStopLoading());
        console.error(err);
      });
  }, [dispatch]);

  return (
    <HomePage
      data={data}
      handleAddToCart={handleAddToCart}
      t={t}
      i18n={i18n}
      isOpen={isOpen}
      handleClose={handleClose}
      loading={loading}
    />
  );
}
export default HomePageContainer;
