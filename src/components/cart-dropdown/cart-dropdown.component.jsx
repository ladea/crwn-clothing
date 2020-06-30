import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartVisability }) =>
  cartVisability ? (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;

const mapPropsToState = (state) => ({
  cartVisability: !state.cart.hidden,
});

export default connect(mapPropsToState)(CartDropdown);
