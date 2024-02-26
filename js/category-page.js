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
            products_list.sort(compareByName);
        } else if (sortCriteria === "byNameDesc") {
            // Compare by Name function
            let compareByName = (a, b) => {
                return a.name.localeCompare(b.name);
            }
            // Sort products_list by price
            products_list.sort(compareByName).reverse();
        } else if (sortCriteria === "byPriceAsc") {
            // Compare by Price function
            let compareByPrice = (a, b) => {
                return a.price - b.price;
            }
            // Sort products_list by name descending
            products_list.sort(compareByPrice);
        } else if (sortCriteria === "byPriceDesc") {
            // Compare by Price function
            let compareByPrice = (a, b) => {
                return a.price - b.price;
            }
            // Sort products_list by proce descending
            products_list.sort(compareByPrice).reverse();
        } else if (sortCriteria === "byDefault") {
            // Compare by default function
            let compareById = (a, b) => {
                return a.id.localeCompare(b.id);
            }
            // Sort products_list by default
            products_list.sort(compareById);
        };
        // Fill the grid
        document.getElementById("categoryProductGrid").innerHTML = ``; // clean the previos list
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