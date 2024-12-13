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
