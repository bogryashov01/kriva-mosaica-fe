import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { URL } from '../../constants/constants';
import { addToCart } from '../../redux/cartSlice';
import ShopPage from './ShopPage';

function ShopPageContainer() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      name: 'Полонина',
      value: 'Polonuna',
    },
    {
      name: 'Ангели-охоронці',
      value: 'AngeluDefenders',
    },
    {
      name: 'Чарівні звірі',
      value: 'CharivneZviri',
    },
    {
      name: 'Знаки зодіаку',
      value: 'Zodiacs',
    },
  ];

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const onCategoryChoose = (category: string) => {
    fetch(`${URL}/get-all-items`, {})
      .then((res) => res.json())
      .then((data) => {
        const mosaicData = data.filter((item: any) => item.category === category);
        setActiveCategory(category);
        setData(category === 'All' ? data : mosaicData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetch(`${URL}/get-all-items`, {})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <ShopPage
      handleAddToCart={handleAddToCart}
      data={data}
      categories={categories}
      onCategoryChoose={onCategoryChoose}
      activeCategory={activeCategory}
      isOpen={isOpen}
      handleClose={handleClose}
    />
  );
}

export default ShopPageContainer;
