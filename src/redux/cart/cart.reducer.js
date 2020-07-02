import {
  TOGGLE_CART_VISABILITY,
  ADD_ITEM,
  REMOVE_ITEM,
  DELETE_ITEM,
} from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  items: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_VISABILITY:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, items: addItemToCart(state.items, payload) };
    case REMOVE_ITEM:
      return { ...state, items: removeItemFromCart(state.items, payload) };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
