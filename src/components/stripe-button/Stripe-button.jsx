import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (props) => {

    const priceForStripe = props.price * 100;
    const publishableKey = 'pk_test_51I8OAzJB26bMRDljDOf6dZFKA5XfTE4jsy0OxTqNidRDgic4lmA4X5qpIWygZ57iUdtLtwjfsW9bHMDKrfY55Guw0061Gk5Kf7';


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${props.price} MTN`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
