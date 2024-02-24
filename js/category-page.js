// THIS IS JS THAT ACTIVATES FUNCTIONS ON THE MAIN PAGE
// DATA IMPORT
import { fillGrid, cartIconItem, addItemToCart, removeItemFromCart, searchProducts } from "./script.js";

// Select category
let categoryName = document.getElementById("categoryName").innerHTML;

// Activate functions on page load
window.addEventListener('load', (event) => {
    // Fill grid
    fillGrid("category", categoryName, "categoryProductGrid");
    // Set number of items in the shopping cart icon
    cartIconItem();
    // Add functionallity of buttons
    addItemToCart(); // add item to cart on buy-button click
    removeItemFromCart(); // remove item from cart on remove-button click
    searchProducts(); // add search products function
});