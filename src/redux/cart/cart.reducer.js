import { TOGGLE_CART_VISABILITY } from './cart.types';

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_CART_VISABILITY:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
