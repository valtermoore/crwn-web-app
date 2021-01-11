export const addItemToCart = (cartItems, cartItemToAdd) => {

    // will return the first item found in the array
    // it will check if the cartItem id matches to the item to be added
    // if it matches the cart item will add the item to the const existingCartItem
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id
    );

    // if exists
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                //if the item doesnt match it will return the cartItem
                : cartItem
        )
    }

    // if the cartItem is not found in the array it will return a new array with the new item to add and an standard quantity of 1

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
    );
};