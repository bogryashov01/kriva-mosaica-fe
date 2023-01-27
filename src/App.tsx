// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header/Header';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import ShopPageContainer from './pages/ShopPage/ShopPageContainer';
import ProductCardContainer from './pages/ProductCard/ProductCardContainer';
import CartContainer from './pages/CartPage/CartContainer';
import CheckoutContainer from './pages/CheckoutPage/CheckoutContainer';
import AboutUsContainer from './pages/AboutUsPage/AboutUsContainer';
import MasterClass from './pages/MasterClassPage/MasterClass';
import Footer from './components/Footer/Footer';

// import { cartTotalSelector } from './redux/selectors';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  // TODO FUTURE THINGS
  // const cart = useSelector((state: any) => state.cart);
  // const cartTotal: any = useSelector(cartTotalSelector);

  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     localStorage.setItem('cartTotal', cartTotal);
  //   };
  // }, [cart, cartTotal]);
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/about" element={<AboutUsContainer />} />
        <Route path="/shop" element={<ShopPageContainer />} />
        <Route path="/master-class" element={<MasterClass />} />
        <Route path="/product-item/:id" element={<ProductCardContainer />} />
        <Route path="/shopping-cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
