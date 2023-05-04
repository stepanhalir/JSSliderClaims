let slider;
let slideOverlay;
let sliderItems;
let nextSlideBtn;
let currentSlide;

document.addEventListener("DOMContentLoaded", () => {
    slider = document.querySelector(".slider")
    sliderItems = document.querySelectorAll(".slider__item")
    slideOverlay = document.querySelector(".slider-view__back")
    nextSlideBtn = document.getElementById("next-slide")

    for (const item of sliderItems) {
        item.addEventListener("mousemove", mouseMoved)
    }

    currentSlide = 0;
    nextSlideBtn.addEventListener("click", slideMoved)
    sliderItems[0].style.display = "block"
});

/* Posun overlay při pohybu myši */
function mouseMoved(e) {
    const positionX = e.offsetX;
    console.log(positionX)
    console.log(e.currentTarget)
    
    //Aplikace šířky na konrétního potomka
    slideOverlay = e.currentTarget.querySelector(".slider-view__back")
    slideOverlay.style.width = positionX + "px"
}

/* Záměna slide (skrytí a odkrytí) */
function slideMoved(e) {
    //Vyresetování pohybu overlay
    slideOverlay.style.width = 0 + "px"

    sliderItems[currentSlide].style.display = "none"
    currentSlide++

    //návrat zpět na první snímek
    if(currentSlide > sliderItems.length - 1)
        currentSlide = 0
    sliderItems[currentSlide].style.display = "block"

    //přepsání .slider__heading aktuálním pořadím
    document.getElementById("slide-counter").innerText = "#" + (currentSlide + 1)
}

//Automatický posun slide
// setInterval(slideMoved, 3000)
