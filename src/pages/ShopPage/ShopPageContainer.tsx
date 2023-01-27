import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { URL } from '../../constants/constants';
import { addToCart } from '../../redux/cartSlice';
import { setStartLoading, setStopLoading } from '../../redux/loadingSlice';

import ShopPage from './ShopPage';

function ShopPageContainer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const loading = useSelector((state: any) => state.loading.loading);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      name: t('category-zodiac-signs'),
      value: 'Zodiacs',
    },
    {
      name: t('category-polony'),
      value: 'Polonuna',
    },
    {
      name: t('category-guardian-angels'),
      value: 'AngeluDefenders',
    },
    {
      name: t('category-fairy-animals'),
      value: 'CharivneZviri',
    },
    {
      name: t('category-fairy-animals-small'),
      value: 'CharivneZviriSmall',
    },
  ];
  const categoriesUk = [
    {
      name: 'Zodiac Signs',
      value: 'Zodiacs',
    },
    {
      name: 'Polony',
      value: 'Polonuna',
    },
    {
      name: 'Guardian Angels',
      value: 'AngeluDefenders',
    },
    {
      name: 'The fairy animals',
      value: 'CharivneZviri',
    },
    {
      name: 'The fairy animals(small)',
      value: 'CharivneZviriSmall',
    },
  ];

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const onCategoryChoose = (category: string) => {
    dispatch(setStartLoading());
    fetch(`${URL}/get-all-items`, {})
      .then((res) => res.json())
      .then((data) => {
        dispatch(setStopLoading());
        const mosaicData = data.filter((item: any) => item.category === category);
        setActiveCategory(category);
        setData(category === 'All' ? data : mosaicData);
      })
      .catch((err) => {
        dispatch(setStopLoading());
        console.error(err);
      });
  };

  useEffect(() => {
    dispatch(setStartLoading());
    fetch(`${URL}/get-all-items`, {})
      .then((res) => res.json())
      .then((data) => {
        dispatch(setStopLoading());
        setData(data);
      })
      .catch((err) => {
        dispatch(setStopLoading());
        console.error(err);
      });
  }, []);
  return (
    <ShopPage
      handleAddToCart={handleAddToCart}
      data={data}
      t={t}
      categories={i18n.language === 'uk' ? categories : categoriesUk}
      onCategoryChoose={onCategoryChoose}
      activeCategory={activeCategory}
      isOpen={isOpen}
      handleClose={handleClose}
      loading={loading}
    />
  );
}

export default ShopPageContainer;
