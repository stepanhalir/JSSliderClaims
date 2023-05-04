let slider;
let slideOverlay;
let sliderItems;
let nextSlideBtn;
let currentSlide;

document.addEventListener("DOMContentLoaded", () => {
    slider = document.querySelector(".slider");
    sliderItems = document.querySelectorAll(".slider__item");
    slideOverlay = document.querySelectorAll(".slider-view__back");
    nextSlideBtn = document.getElementById("next-slide");

    // for (const item of sliderItems) {
    //     item.addEventListener("mousemove", mouseMoved);
    // }
    currentSlide = 0;
    nextSlideBtn.addEventListener("click", slideMoved);
    sliderItems[0].style.display = "block";
});

//Pohyb overlay přes slide
// function mouseMoved(e) {
//     const positionX = e.offsetX;
//     slideOverlay.style.width = positionX + "px";
// }

/* Záměna slide (skrytí a odkrytí) */


function slideMoved(e) {
    sliderItems[currentSlide].style.display = "none";
    currentSlide++;

    //návrat zpět na první snímek
    if(currentSlide > sliderItems.length - 1)
        currentSlide = 0
    sliderItems[currentSlide].style.display = "block";

    //přepsání .slider__heading aktuálním pořadím
    document.getElementById("slide-counter").innerText = "#" + (currentSlide + 1);
}

//Automatický posun slide
setInterval(slideMoved, 3000);
