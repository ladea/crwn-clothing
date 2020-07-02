import React from 'react';
import './checkout-item.styles.scss';
import { deleteItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(deleteItem(item))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
