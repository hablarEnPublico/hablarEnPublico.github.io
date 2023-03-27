
"use strict";


// Codigo seccion For You - Img
const foryou_img = document.querySelector(".foryou-img");

const foryou_img_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ foryou_img.classList.add("foryou_img_view");  }   });  }

const foryou_img_watch = new IntersectionObserver(foryou_img_view);
foryou_img_watch.observe(foryou_img);