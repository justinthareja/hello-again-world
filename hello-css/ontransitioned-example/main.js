var $btn = document.querySelector("button");
var $productsContainer = document.querySelector(".products-container");
var $products = document.querySelectorAll(".product");

$products[0].addEventListener("transitioned", function() {
    [...products].forEach(p => p.parentNode.removeChild(p));
});

$btn.addEventListener("click", function() {
    this.setAttribute("disabled", "disabled");
    $productsContainer.classList.add("products--delete");
});