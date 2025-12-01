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
      name: t('newYearsMiracles'),
      value: 'newYearsMiracles',
    },
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
    {
      name: t('category-berehina'),
      value: 'Berehina',
    },
    {
      name: t('himself-artist'),
      value: 'Himselfartist',
    },
    {
      name: t('merch'),
      value: 'merch',
    },
    {
      name: t('with-urkaine-in-heart'),
      value: 'withUrkaineInHeart',
    },

    {
      name: t('tropicu'),
      value: 'Tropicu',
    },
    {
      name: t('italianTemptation'),
      value: 'italianTemptation',
    },
    {
      name: t('easterDecoration'),
      value: 'easterDecoration',
    },
    {
      name: t('koi'),
      value: 'koi',
    },
    {
      name: t('pattern'),
      value: 'pattern',
    },
  ];
  const categoriesUk = [
    {
      name: "New Year's miracles",
      value: 'newYearsMiracles',
    },
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
      name: 'The fairy animals (small)',
      value: 'CharivneZviriSmall',
    },
    {
      name: 'Berehina',
      value: 'Berehina',
    },
    {
      name: 'Himself artist',
      value: 'Himselfartist',
    },
    {
      name: 'Author Merch',
      value: 'merch',
    },
    {
      name: 'With Ukraine in heart',
      value: 'withUrkaineInHeart',
    },
    {
      name: 'Tropics',
      value: 'Tropicu',
    },
    {
      name: 'Italian Temptation',
      value: 'italianTemptation',
    },
    {
      name: 'Easter decoration',
      value: 'easterDecoration',
    },
    {
      name: 'Fish',
      value: 'koi',
    },
    {
      name: 'Pattern',
      value: 'pattern',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
