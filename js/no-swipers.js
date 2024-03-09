// THIS IS JS THAT ACTIVATES FUNCTIONS ON THE MAIN PAGE
// DATA IMPORT
import { cartIconItem, addItemToCart, removeItemFromCart, searchProducts, calculateTotalPrice } from "./script.js";

// Activate functions on page load
window.addEventListener('load', (event) => {
    // Set number of items in the shopping cart icon
    cartIconItem();
    // Add functionallity of buttons
    addItemToCart(); // add item to cart on buy-button click
    removeItemFromCart(); // remove item from cart on remove-button click
    searchProducts(); // add search products function
    calculateTotalPrice(); // activate total price calculation only for the shopping-cart page 
});