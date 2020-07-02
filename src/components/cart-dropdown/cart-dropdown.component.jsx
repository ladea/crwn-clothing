import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {
  selectCartItems,
  selectCartVisability,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import toggleCartVisability from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartVisability, cartItems, history, dispatch }) =>
  cartVisability ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartVisability());
          history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  ) : null;

const mapPropsToState = createStructuredSelector({
  cartVisability: selectCartVisability,
  cartItems: selectCartItems,
});

export default withRouter(connect(mapPropsToState)(CartDropdown));
