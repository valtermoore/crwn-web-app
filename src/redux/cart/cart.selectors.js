import { createSelector } from 'reselect';

// Will return just a piece of the whole app state, in this case the cart state

// retorna o state do cart reducer 
const selectCart = state => state.cart;

// cria o selector e aponta o selectCart como referencia
// vai retornar o cartItems do reducer cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

// cria o selector e aponta o selectCartItems como referencia que retorna o cart.cartItems
// 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumullatedQuantity, cartItem) => accumullatedQuantity + cartItem.quantity,
            0
        )
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumullatedQuantity, cartItem) => 
                accumullatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);