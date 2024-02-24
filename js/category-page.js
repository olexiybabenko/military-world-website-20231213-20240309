// THIS IS JS THAT ACTIVATES FUNCTIONS ON THE MAIN PAGE
// DATA IMPORT
import { fillGrid, cartIconItem, addItemToCart, removeItemFromCart, searchProducts } from "./script.js";
import products_list from "./products-list.js"; // Parsed json with the list of products

// Select category
let categoryName = document.getElementById("categoryName").innerHTML;

// Sort products functions
const sortProduct = () => {
    // Add event listener: on sortForm click -> sort the products_list
    document.getElementById('sortButton').addEventListener('click', () => {
        // Select filter criteria
        let sortCriteria = document.getElementById("sortForm").value;
        // Sort the products_list
        if (sortCriteria === "byNameAsc") {
            // Compare by Name function
            let compareByName = (a, b) => {
                return a.name.localeCompare(b.name);
            }
            // Sort products_list by name
            document.getElementById("categoryProductGrid").innerHTML = ``; // clean the previos list
            products_list.sort(compareByName);
        };
        // Fill the grid
        fillGrid("category", categoryName, "categoryProductGrid");
    })
};

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
    sortProduct(); // add sort products function
});