// JS CODE THAT DEFINES FUNCTIONS USED ON THE OTHER PAGES
// DATA IMPORT
import products_list from "./products-list.js"; // Parsed json with the list of products
import swiper from "./swiper.js"; // Import swiper object - it is required to fill them


// 2. FILL THE SWIPERS

// 2) Main page
const fillSwiper = (filter, filterData, swiperId) => {
    // For each product in the list
    for (let i = 0; i < products_list.length; i++) {
        // If the product's value of "filter" equals to "filterData", append it to the "swiperId"
        if (products_list[i][filter] === filterData) {
            // 1. Create an html card
            let swiperSlide = document.createElement('div');
            swiperSlide.setAttribute("class", "swiper-slide"); //add swiper-slide class so that swiper functionality works 
            swiperSlide.innerHTML = `
            <div class="card h-100 bg-light border-secondary card-width">
                <img src="${products_list[i].img}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <a href=${"../pages/" + products_list[i].id + "_page.html"} class="card-title text-decoration-none">${products_list[i].name.split(' ').slice(0, 2).join(' ')}</a>
                    <p class="card-text">$${products_list[i].price}</p>
                    <!-- Button trigger modal -->
                    <button id=${products_list[i].id + "-buy-btn"} class="btn btn-dark background-olive btn-outline-light btn-buy" data-bs-toggle="modal" data-bs-target=${"#" + products_list[i].id + "-modal"}>Buy</button>
                </div>
            </div>`;
            // Append swiperSlide to Swiper
            document.getElementById(swiperId).appendChild(swiperSlide);

            // 2. Create fade modal for each card
            let fadeModal = document.createElement('div');
            //Set attributes for each fade modal so that modal functionality works
            let modalId = `${products_list[i].id + "-modal"}`; // this is required because 
            fadeModal.setAttribute("id", modalId);
            fadeModal.setAttribute("class", "modal fade");
            fadeModal.setAttribute("tabindex", "-1");
            fadeModal.setAttribute("aria-labelledby", "exampleModalLabel");
            fadeModal.setAttribute("aria-hidden", "true");
            // Content of the modal
            fadeModal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content background-light-olive">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-capitalize" id="exampleModalLabel">Shopping cart</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-evenly">
                        <div>
                            <img src="${products_list[i].img}"
                                class="card-width border border-secondary border-opacity-50" alt="Product image">
                            <p class="fw-light text-danger remove-item" data-bs-dismiss="modal">Remove item</p>
                        </div>
                        <div class="ms-2">
                            <a href=${"../pages/" + products_list[i].id + "_page.html"} class="card-title text-decoration-none">${products_list[i].name}</a>
                            <p>$${products_list[i].price}</p>
                            <div class="d-flex gap-1">
                                <input id=${products_list[i].id + "ItemQuantity"} type="number" class="form-control form-control-sm rounded"
                                    value="1" aria-label=${products_list[i].id + "ItemQuantity"}>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <h5>Total:</h5>
                        <h5>$${products_list[i].price * 1}</h5>
                    </div>
                    <div class="d-flex justify-content-center gap-1 pb-4">
                        <button type="button" class="btn btn-secondary text-capitalize" data-bs-dismiss="modal">more
                        </button>
                        <button type="button"
                            class="btn btn-dark background-olive btn-outline-light text-capitalize">checkout</button>
                    </div>
                </div>
            </div>`;
            // Append fade modal to the "fadeModals" section at the top of the main section
            document.getElementById("fadeModals").appendChild(fadeModal);
        }
    }
};


// 3. SHOPPING CART
// 1) Add items to cart icon
// Define number of items
let numOfItems = 0;
// Define function
const cartIconItem = () => {
    // Change number in inner html
    for (let i = 0; i < document.getElementsByClassName("shopping-cart").length; i++) {
        document.getElementsByClassName("shopping-cart")[i].innerHTML = numOfItems;
    }
};

// 2) On button buy click - add item to shopping cart
const addItemToCart = () => {
    // Select all buy button
    let buyButtons = document.querySelectorAll('.btn-buy');
    // Define function
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increase number of products in cart by 1
            numOfItems = numOfItems + 1;
            // Update shopping cart icon
            cartIconItem();
        });
    });
};

// 3) Remove item from shopping cart
const removeItemFromCart = () => {
    // Select all buy button
    let removeButtons = document.querySelectorAll('.remove-item');
    // Define function
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Decrease number of products in cart by 1
            numOfItems = numOfItems - 1;
            // Update shopping cart icon
            cartIconItem();
        });
    });
};


// 4) Search function
const searchProducts = () => {
    // Add event listener: on searchButton click -> search the products_list
    document.getElementById('searchButton').addEventListener('click', () => {
        // Choose the value of the form
        let word = document.getElementById("searchFieldText").value;
        word = word.toUpperCase(); // Capitalize the searched word
        // Create an empty list
        let filteredProducts = [];
        // If product name contains the searched word -> append it to the list
        for (let i = 0; i < products_list.length; i++) {
            if (products_list[i].name.toUpperCase().includes(word)) {
                filteredProducts = [...filteredProducts, products_list[i]];
            }
        }
        // Return the list of the products that have this word
        document.getElementById('searchResultsDropdown').innerHTML = ``; // clear ul the list
        // If there are records found
        if (filteredProducts.length > 0) {
            // for each filtered product
            for (let i = 0; i < filteredProducts.length; i++) {
                let li = document.createElement("li"); // create the list element 
                li.innerHTML = `<a class="dropdown-item" href=${"./" + filteredProducts[0].id + "_page.html"}>${filteredProducts[i].name}</a>`;
                document.getElementById('searchResultsDropdown').appendChild(li);
            }
        } else {
            // if the list is empty
            let li = document.createElement("li"); // create the list element 
            li.innerHTML = `<a class="dropdown-item">No records found</a>`;
            document.getElementById('searchResultsDropdown').appendChild(li);
        }
    });
};

// EXPORT FUNCTIONS
export { fillSwiper, cartIconItem, addItemToCart, removeItemFromCart, searchProducts };