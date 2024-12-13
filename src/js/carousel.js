const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

prevButton.addEventListener("click", (event) => {
    carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
    if (carousel.scrollLeft <= 0) {
        console.log("reached the end")
    };
});
nextButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
});