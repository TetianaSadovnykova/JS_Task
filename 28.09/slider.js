let slideIndex = 0;
let numSlides = $(".slide").length;

function showSlide(index) {
    if (index < 0) {
        index = numSlides - 1;
    } else if (index >= numSlides) {
        index = 0;
    }

    slideIndex = index;

    $(".slide").hide();
    $(".slide").eq(slideIndex).show();
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

$("#next").click(nextSlide);
$("#previous").click(prevSlide);

setInterval(nextSlide, 5000);