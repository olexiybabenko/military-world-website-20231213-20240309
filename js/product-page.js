// DATA IMPORT
import products_list from "./products-list.js"; // Parsed json with the list of products
import { fillSwiper, cartIconItem, addItemToCart, removeItemFromCart, searchProducts } from "./script.js";

// Map product id from the html page
let i = document.getElementById("productNumber").innerHTML - 1;

// CREATE A FUNCTION TO FILL THE PRODUCT PAGE
const fillProductPage = () => {
    // 1. Change the page's title
    document.title = `${products_list[i].name}`;
    // 2. Add Fade modal modal
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
                <a href="./shopping-cart.html" type="button"
                            class="btn btn-dark background-olive btn-outline-light text-capitalize">checkout</a>
            </div>
        </div>
    </div>`;
    // Append fade modal to the "fadeModals" section at the top of the main section
    document.getElementById("fadeModals").appendChild(fadeModal);
    // 3. Fill the inner html of productPageMainSection
    document.getElementById("productPageMainSection").innerHTML = `
        <!-- Breadcrumb -->
        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="link-secondary text-decoration-none"
                        href="./index.html">Home</a></li>
                <li class="breadcrumb-item"><a class="link-secondary text-decoration-none text-capitalize" href=${"./" + products_list[i].category + ".html"}>${products_list[i].category}</a>
                </li>
                <li class="breadcrumb-item text-secondary">${products_list[i].name}</li>
            </ol>
        </nav>

        <!-- Product elements -->
        <!-- One column up to md -->
        <div class="d-block d-md-none">
            <h1 class="text-center pb-2">${products_list[i].name.split(' ').slice(0, 2).join(' ')}</h1>
            <div class="d-flex justify-content-center pb-2">
                <img src="${products_list[i].img}"
                    class="product-img-width border border-secondary border-opacity-50 mx-auto mx-md-0"
                    alt="Product image">
            </div>
            <p class="text-center review-box">Reviews (10):
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
                <i class="bi bi-star text-warning"></i>
            </p>
        </div>
        <!-- Two columns from md -->
        <div class="d-flex justify-content-around gap-5">
            <!-- Column 1 -->
            <div class="d-none d-md-block">
                <img src="${products_list[i].img}"
                    class="product-img-width border border-secondary border-opacity-50 mx-auto mx-md-0 "
                    alt="Product image">
                <p class="text-center review-box">Reviews (10):
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                </p>
            </div>
            <!-- Column 2 -->
            <div>
                <h1 class="pb-2 d-none d-md-block">${products_list[i].name}</h1>
                <p>$${products_list[i].price}</p>
                <div class="d-flex gap-1">
                    <input id="ItemQuantity" type="number"
                        class="form-control form-control-sm rounded field-width focus-ring focus-color-olive"
                        value="1" aria-label="ItemQuantity">
                    <select class="form-select form-select-sm field-width focus-ring focus-color-olive"
                        aria-label="product size">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <button id="-buy-btn" class="btn btn-dark background-olive btn-outline-light btn-buy" data-bs-toggle="modal" data-bs-target=${"#" + products_list[i].id + "-modal"}>Buy</button>
                </div>
                <!-- Accordtion with description -->
                <div class="accordion accordion-flush pt-3 pb-0" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-body-tertiary focus-ring focus-color-olive"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                Description
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">${products_list[i].description}</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-body-tertiary focus-ring focus-color-olive"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo">
                                Details
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Technical details
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-body-tertiary focus-ring focus-color-olive"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree">
                                Comments
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Placeholder for comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};


// Fill review function
const reviewData = () => {
    let numOfReviews = 4;
    // Create stars icons
    let starReview = `Reviews (${numOfReviews}):
    <i class="bi bi-star-fill text-warning"></i>
    <i class="bi bi-star-fill text-warning"></i>
    <i class="bi bi-star-fill text-warning"></i>
    <i class="bi bi-star-half text-warning"></i>
    <i class="bi bi-star text-warning"></i>`;

    // Change review stars in "review-box" inner html
    for (let i = 0; i < document.getElementsByClassName("review-box").length; i++) {
        document.getElementsByClassName("review-box")[i].innerHTML = `${starReview}`;
    }
};


// Activate functions on page load
window.addEventListener('load', (event) => {
    // Load content
    fillProductPage(); // load main section content
    fillSwiper("category", products_list[i].category, "productPageRelatedProductsSwiper"); // fill swiper
    reviewData(); // load review stars
    // Set number of items in the shopping cart icon
    cartIconItem();
    // Add functionallity of buttons
    addItemToCart(); // add item to cart on buy-button click
    removeItemFromCart(); // remove item from cart on remove-button click
    searchProducts(); // add search products function
});