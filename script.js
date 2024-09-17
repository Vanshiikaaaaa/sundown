const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixedImg = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var img = e.getAttribute("data-image");
      fixedImg.style.backgroundImage = `url(${img})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}


function menuAnimation() {
  menu.addEventListener("click", function () {
    var full = document.querySelector("#full-scr");
    var menu = document.querySelector("nav h3");
    var navImg = document.querySelector("nav img");

    var flag = 0;
    if (flag == 0) {
      navImg.style.opacity = 0;
      full.style.top = 0;
      flag = 1;
    } else {
      navImg.style.opacity = 100;
      full.style.top = "-100%";
      flag = 0;
    }
  });
}

// function loaderAnimation(){
var loader =  document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);
// }


swiperAnimation();
page4Animation();
// menuAnimation();
// loaderAnimation();