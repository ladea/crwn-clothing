import { TOGGLE_CART_VISABILITY, ADD_ITEM, DELETE_ITEM } from './cart.types';
import { addItemToCart } from './cart.utils';

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
    case DELETE_ITEM:
      return { ...state, items: state.items };
    default:
      return state;
  }
};

export default cartReducer;
