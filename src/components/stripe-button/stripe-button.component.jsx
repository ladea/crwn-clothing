import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);

  alert('Payment successfull');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hdI4ozFB7Rl4pxyyTFTEQwjs';

  return (
    <StripeCheckout
      name="CRWN Clothing Ltd."
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is: $${price}`}
      stripeKey={publishableKey}
      amount={priceForStripe}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
