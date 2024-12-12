//Script pour le menu
const nav = document.querySelector(".menu");
const toggle = document.querySelector(".header__menu-btn");
const icon = document.querySelector(".header__menu-icon");


toggle.addEventListener("click", (event) => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    document.body.classList.toggle("noscroll");
    if (isClosed == true) {
        console.log(icon)
        icon.src = "/assets/logo-and-icons/burger-icon-menu-cros-svg.svg";
    } else {
        icon.src = "/assets/logo-and-icons/burger-icon-menu-bar-svg.svg";
    }
});
//Fin du script menu


//Script pour les carousels
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {
    prevButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
        if (carousel.scrollLeft <= 0) {
            console.log("reached the end")
        };
    });
    nextButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
    });
}
//Fin script carousels