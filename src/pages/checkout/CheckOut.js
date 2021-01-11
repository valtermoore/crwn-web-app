import React from 'react';
import { connect } from 'react-redux';

import StripeButton from '../../components/stripe-button/Stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckOutItem from '../../components/checkout-item/CheckouItem';

import '../../style/checkout.scss';

const CheckOutPage = (props) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        
        {
            props.cartItems.map(cartItem =>
                <CheckOutItem cartItem={cartItem} key={cartItem.id}/>  
            )
        }

        <div className="total">
            <span>TOTAL: {props.total}MT</span>
        </div>

        <div className="test-warning">
            *Please use the following test card for payments*
            <br/>
            4242424242424242 - Exp: 01/21 - CVV: 123
        </div>

        <StripeButton price={props.total}/>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)

})
export default connect(mapStateToProps)(CheckOutPage);