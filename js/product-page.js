// DATA IMPORT
import products_list from "./products-list.js"; // Parsed json with the list of products
import swiper from "./swiper.js"; // Import swiper object - it is required to fill them
//import cartIconItem from "./script.js";


// CREATE A FUNCTION TO FILL THE PRODUCT PAGE
const fillProductPage = () => {
    //
    document.getElementById("productPageMainSection").innerHTML = `
        <h1>test<h1>
    `;
};


// Activate functions on page load
window.addEventListener('load', (event) => {
    //fillProductPage() // load html content
});