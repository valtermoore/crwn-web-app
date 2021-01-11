import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/Custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import '../../style/cart-dropdown.scss';

const CartDropDown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.cartItems.length ? (
                    // maps the state from the reducer and displays each cart item in the dropdown
                    props.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                )
                    : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>

            <CustomButton onClick={() =>{
                props.history.push('/checkout');
                props.dispatch(toggleCartHidden()); // Para fechar o cartDropdown quando for clicado
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropDown));