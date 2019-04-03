const i = 0;
const slideArray = [];
const time = 200;


const allSlides = document.getElementById('slideContainer');
const eachSlide = allSlides.firstElementChild;
const prevSlideButton = document.getElementById('prev');
const nextSlideButton = document.getElementById('next');

// slideArray[0] = 'slide1';
// slideArray[1] = 'slide2';
// slideArray[2] = 'slide3';
// slideArray[3] = 'slide4';
// slideArray[4] = 'slide5';

function changeSlide(){
  if (i < slideArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

prevSlideButton.addEventListener('click', function (event) {
    event.preventDefault();
    eachSlide.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    console.log(event.type + ' prev got fired');
})

nextSlideButton.addEventListener('click', function (event) {
    event.preventDefault();
    eachSlide.nextElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    console.log(event.type + ' next got fired');
})


console.log(allSlides.children[1].tagName);
console.log(allSlides.children.length);
console.log(allSlides.children[4].getAttribute("id"));

// (function () {
// "use strict";
// let target = document.querySelectorAll('a[href^="#"]');
// let i = 0;
// for (i=0; i<target.length; i++) {
//    target[i].onclick = function (e) {
//       let hash = this.getAttribute("href");
//       let elem = document.getElementById(hash.replace("#",""));
//       history.pushState (null, null, hash);
//       elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
//       e.preventDefault();
// 	}
// }
// })();
