// THIS IS JS THAT ACTIVATES FUNCTIONS ON THE MAIN PAGE
// DATA IMPORT
import { fillSwiper, cartIconItem, addItemToCart, removeItemFromCart } from "./script.js";

// Activate functions on page load
window.addEventListener('load', (event) => {
    // Fill swipers
    fillSwiper("news", "true", "homeNewsSwiper");
    fillSwiper("sales", "true", "homeSalesSwiper");
    fillSwiper("bestsellers", "true", "homeBestsellersSwiper");
    // Set number of items in the shopping cart icon
    cartIconItem();
    // Add functionallity of buttons
    addItemToCart(); // add it
    removeItemFromCart();
});