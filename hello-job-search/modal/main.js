const $showOfferButtons = document.querySelectorAll(".js-show-offer");
const $modal = document.querySelector(".js-modal");
const $modalOverlay = document.querySelector(".js-modal-overlay");
const $modalClose = document.querySelector(".js-close");
const $modalAccept = document.querySelector(".js-accept");
const $content = document.querySelector(".js-content");

let number = 0;
let isOpen = false;

$showOfferButtons.forEach($button =>
    $button.addEventListener("click", handleShowOfferButtonClick)
);

$modalClose.addEventListener("click", handleModalCloseClick);
$modalAccept.addEventListener("click", handleModalAcceptClick);
$modalOverlay.addEventListener("click", handleModalOverlayClick);
document.addEventListener("keydown", handleKeyDown);


function handleKeyDown(e) {
    if (!e.keyCode == 27) return;
    if (!isOpen) return;

    e.preventDefault();
    closeModal();
}

function handleShowOfferButtonClick(e) {
    number = e.target.dataset.offer;
    openModal();
}

function handleModalAcceptClick(e) {
    $content.innerHTML = `
        <div class="accept-message">Offer ${number} accepted!</div>
    `;

    closeModal();
}

function handleModalCloseClick(e) {
    closeModal();
}

function handleModalOverlayClick(e) {
    closeModal();
}

function openModal() {
    isOpen = true;
    $modal.style.setProperty("display", "flex");
    $modalOverlay.style.setProperty("display", "flex");
}

function closeModal() {
    isOpen = false;
    $modal.style.setProperty("display", "none");
    $modalOverlay.style.setProperty("display", "none");
}