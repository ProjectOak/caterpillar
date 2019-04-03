const allSlides = document.getElementById('slideContainer');
const eachSlide = allSlides.children;
const prevSlideButton = document.getElementById('prev');
const nextSlideButton = document.getElementById('next');
let count = 0;

function smoothScroll(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });

}

nextSlideButton.addEventListener('click', function (event) {
    event.preventDefault();

    count += 1;
    console.log(count);

    if (count < eachSlide.length) {
      smoothScroll(eachSlide[count]);
    } else {
      smoothScroll(eachSlide[0]);
      count = 0;
    }
})

prevSlideButton.addEventListener('click', function (event) {
    event.preventDefault();

    count -= 1;
    console.log(count);

    if (count < eachSlide.length) {
      smoothScroll(eachSlide[count]);
    } else {
      smoothScroll(eachSlide[0]);
      count = 5;
    }
})
