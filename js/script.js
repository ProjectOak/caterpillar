
const allSlides = document.querySelector('main');
const eachSlide = allSlides.querySelectorAll('article');
const prevSlideButton = document.getElementById('prev');
const nextSlideButton = document.getElementById('next');

prevSlideButton.addEventListener('click', function (event) {
    event.preventDefault();
    allSlides.firstElementChild.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
    console.log(event.type + ' prev got fired');
})

nextSlideButton.addEventListener('click', function (event) {
    event.preventDefault();

    window.scroll()
    // window.scrollTo({
    //   left: 1000,
    //   behavior: 'smooth'
    // });

    console.log(event.type + ' next got fired');
})

console.log(prevSlideButton);
console.log(nextSlideButton);
