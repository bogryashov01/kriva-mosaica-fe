const { createSelector } = require('@reduxjs/toolkit');

const cartSelector = (state: { cart: any }) => state.cart;

export const loadingSelector = (state: { loading: boolean }) => state.loading;

export const cartTotalSelector = createSelector([cartSelector], (cart: any[]) =>
  cart.reduce((total: any, current: { quantity: any }) => (total += current.quantity), 0),
);

// export const cartTotalPriceSelector = createSelector([cartSelector], (cart: any[]) =>
//   cart.reduce(
//     (total: number, current: { price_en: number; price_ukr: number; quantity: number }) =>
//       (total += current.price_en || current.price_ukr * current.quantity),
//     0,
//   ),
// );
