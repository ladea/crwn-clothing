import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import toggleCartVisability from '../../redux/cart/cart.actions.js';

const CartIcon = ({ toggleCartVisability, cartItemsCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartVisability} />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisability: () => dispatch(toggleCartVisability()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
