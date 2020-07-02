import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartVisability = createSelector(
  [selectCart],
  (cart) => !cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
    0
  )
);
