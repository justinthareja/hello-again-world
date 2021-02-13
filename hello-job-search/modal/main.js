const $showOfferButton = document.querySelector(".js-show-offer");
const $modal = document.querySelector(".js-modal");
const $modalOverlay = document.querySelector(".js-modal-overlay");
const $modalClose = document.querySelector(".js-close");
const $modalAccept = document.querySelector(".js-accept");
const $content = document.querySelector(".js-content");

$showOfferButton.addEventListener("click", handleShowOfferButtonClick);
$modalClose.addEventListener("click", handleModalCloseClick);
$modalAccept.addEventListener("click", handleModalAcceptClick);
$modalOverlay.addEventListener("click", handleModalOverlayClick);

function handleShowOfferButtonClick(e) {
    openModal();
}

function handleModalAcceptClick(e) {
    $content.innerHTML = `
        <div class="accept-message">Offer accepted!</div>
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
    $modal.style.setProperty("display", "flex");
    $modalOverlay.style.setProperty("display", "flex");
}

function closeModal() {
    $modal.style.setProperty("display", "none");
    $modalOverlay.style.setProperty("display", "none");
}