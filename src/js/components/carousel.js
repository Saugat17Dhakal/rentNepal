const carouselItems = document.querySelectorAll(".trending-products-cards-card")
const carouselNext = document.querySelector(".trending-products-prev")
const carouselPrev = document.querySelector(".trending-products-next")
let currentSlide = 0
let lengthOfCarousel = carouselItems.length
carouselPrev.onclick = () => {
    if(currentSlide >= (lengthOfCarousel - 4)){
        currentSlide = lengthOfCarousel - 4
    }
    else{
    currentSlide++
    for(let i = 0; i < lengthOfCarousel; i++){
        carouselItems[i].style.transform = `translateX(${-(currentSlide) * 260}px)`
    }
    }
}
carouselNext.onclick = () => {
    if(currentSlide <= 0){
        currentSlide
    }
    else{
    currentSlide--
    for(let i = 0; i < lengthOfCarousel; i++){
        carouselItems[i].style.transform = `translateX(${-(currentSlide) * 260}px)`
    }
    }
}
