import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import toggleCartVisability from '../../redux/cart/cart.actions.js';

const CartIcon = ({ toggleCartVisability, cartItems }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartVisability} />
      <span className="item-count">
        {cartItems.reduce((acc, item) => item.quantity + acc, 0)}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisability: () => dispatch(toggleCartVisability()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
