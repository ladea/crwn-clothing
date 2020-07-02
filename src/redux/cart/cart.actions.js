import {
  TOGGLE_CART_VISABILITY,
  ADD_ITEM,
  DELETE_ITEM,
  REMOVE_ITEM,
} from './cart.types';

const toggleCartVisability = () => ({
  type: TOGGLE_CART_VISABILITY,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export default toggleCartVisability;
