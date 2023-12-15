import { getProductById } from "./Menu.js";

export async function addToCart (id) {
    const product = await getProductById(id)

    const result = app.store.cart.filter( 
        prodInCart => prodInCart.product.id == id)

    // the product is already in cart
    if (result.length == 1) {

        // return new array wiht one element changed
        app.store.cart = app.store.cart.map( 
            productInCart => productInCart.product.id == id
                ? {...productInCart, quantity: productInCart.quantity + 1}
                : productInCart
        )
    }
    else {
        // this does not update cart - cuz we need to
        // assing new array
        // app.store.cart.push({ product, quantity:1})

        // fix
        app.store.cart = [...app.store.cart, {product, quantity: 1}];
    }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter( 
        productInCart => productInCart.product.id != id
    )
}