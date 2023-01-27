import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { URL } from '../../constants/constants';
import { addToCart } from '../../redux/cartSlice';
import ProductCard from './ProductCard';
import { setStartLoading, setStopLoading } from '../../redux/loadingSlice';

function ProductCardContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [mosaic, setMosaic] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const loading = useSelector((state: any) => state.loading.loading);
  console.log(loading);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    dispatch(setStartLoading());
    fetch(`${URL}/get-mosaic/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        dispatch(setStopLoading());
        setMosaic(data);
      })
      .catch((err) => {
        dispatch(setStopLoading());
        console.log(err);
      });
  }, [dispatch, id]);

  return (
    <ProductCard
      t={t}
      i18n={i18n}
      product={mosaic}
      handleAddToCart={handleAddToCart}
      handleClose={handleClose}
      isOpen={isOpen}
      loading={loading}
    />
  );
}
export default ProductCardContainer;
