const slider = document.querySelector(".slider-images")
const sliderImages = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const currentSlideDisplay = document.querySelector(".currentSlideDisplay")
const totalSlideDisplay = document.querySelector(".totalSlideDisplay")
let currentSlide = 0
prevBtn.onclick = () => {
    currentSlide--
    if(currentSlide == -1){
        currentSlide = sliderImages.length - 1
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
    else{
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
}
nextBtn.onclick = () => {
    currentSlide++
    if(currentSlide == sliderImages.length){
        currentSlide = 0
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
    else{
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
}
setInterval( () => {
        currentSlide++;
        if(currentSlide == sliderImages.length){
            currentSlide = 0
            slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
            currentSlideDisplay.innerHTML = `${currentSlide + 1}`
        }
        else{
            slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
            currentSlideDisplay.innerHTML = `${currentSlide + 1}`
        }
}, 2000)

currentSlideDisplay.innerHTML = `${currentSlide + 1}`
totalSlideDisplay.innerHTML = `${sliderImages.length}`   