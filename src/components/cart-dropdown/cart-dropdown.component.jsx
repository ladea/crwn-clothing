import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartVisability, cartItems }) =>
  cartVisability ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;

const mapPropsToState = (state) => ({
  cartVisability: !state.cart.hidden,
  cartItems: state.cart.items,
});

export default connect(mapPropsToState)(CartDropdown);
