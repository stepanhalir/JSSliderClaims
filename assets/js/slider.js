let viewOverlay;
let sliderItem;

document.addEventListener("DOMContentLoaded", () => {
    sliderItem = document.querySelector(".slider__item");
    viewOverlay = document.querySelector(".slider-view__back");

    sliderItem.addEventListener("mousemove", mouseMoved);
});

function mouseMoved(e) {
    const positionX = e.offsetX;
    viewOverlay.style.width = positionX + "px";
}