import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { URL } from '../../constants/constants';
import { addToCart } from '../../redux/cartSlice';
import ProductCard from './ProductCard';

function ProductCardContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [mosaic, setMosaic] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    fetch(`${URL}/get-mosaic/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        setMosaic(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <ProductCard
      t={t}
      i18n={i18n}
      product={mosaic}
      handleAddToCart={handleAddToCart}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
}
export default ProductCardContainer;
