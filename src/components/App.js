import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/Shop';
import Header from './header/header';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckOutPage from '../pages/checkout/CheckOut';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selector';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            // if theres a change in the auth state
            if (userAuth) {
                // creates a user profile (userRef) and gets it from the firebase db 
                const userRef = await createUserProfileDocument(userAuth);

                // sets the snapShot/data from the user in the setCurrentUser payload
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                    //console.log(this.state);
                });
            } else {
                // if is null it will set null (nothing)
                setCurrentUser(userAuth);
            }

            // console.log(this.state);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path='/checkout' component={CheckOutPage} />
                    <Route exact path="/signin" render={() =>
                        this.props.currentUser ? (<Redirect to="/" />)
                        : (<SignInAndSignUpPage />)} />
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

// Faz o dispatch da action
const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);