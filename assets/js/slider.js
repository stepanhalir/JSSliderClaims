let backViewContainer;

document.addEventListener("DOMContentLoaded", () => {
    backViewContainer = document.querySelector(".slider-view__back");
    backViewContainer.addEventListener("mousemove", mouseMoved);
});

function mouseMoved(e) {
    const positionHorizontal = e.offsetX;
    
    backViewContainer.style.width = positionHorizontal + "px";
}