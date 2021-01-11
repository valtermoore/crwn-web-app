import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import '../../style/header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    props.currentUser ? //if the currentUser state is sign in
                        <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                        :
                        <Link className="option" to="/signin">Sign in</Link> // if currentUser state is signed out
                }
                <CartIcon />
            </div>
            {props.cart ? null : <CartDropDown />}
        </div>
    )
}

// Vai pegar o state do currentUser no reducer
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    cart: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);