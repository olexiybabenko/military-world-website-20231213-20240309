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


const fillSwiper = () => {
    // For each product in the list
    for (let i = 0; i < products_list.length; i++) {
        // 1. Create an html card
        let swiperSlide = document.createElement('div');
        swiperSlide.setAttribute("class", "swiper-slide"); //add swiper-slide class so that swiper functionality works 
        swiperSlide.innerHTML = `
            <div class="card h-100 bg-light border-secondary card-width">
                <img src="${products_list[i].img}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${products_list[i].name.split(' ').slice(0, 2).join(' ')}</h6>
                    <p class="card-text">$${products_list[i].price}</p>
                    <!-- Button trigger modal -->
                    <button id=${products_list[i].id + "-buy-btn"} class="btn btn-dark background-olive btn-outline-light btn-buy" data-bs-toggle="modal" data-bs-target=${"#" + products_list[i].id + "-modal"}>Buy</button>
                </div>
            </div>`;
        // Append swiperSlide to Swiper
        if (products_list[i].category === "clothing") {
            // if it is "sales" section
            document.getElementById("productPageRelatedProductsSwiper").appendChild(swiperSlide);
        }

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
                        <p class="fw-light text-danger" data-bs-dismiss="modal">Remove item</p>
                    </div>
                    <div class="ms-2">
                        <h6>${products_list[i].name}</h6>
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
        // Append fade modal to the fadeModals section at the top of the main section
        document.getElementById("fadeModals").appendChild(fadeModal);
    }
};


// Activate functions on page load
window.addEventListener('load', (event) => {
    //fillProductPage() // load html content
    fillSwiper();
});