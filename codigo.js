
"use strict";

//  Codigo efecto para problema-container 

const problema_container = document.querySelector(".problema-container");

const problema_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problema_container.classList.add("problema-container-view"); }
                                                              else problema_container.classList.remove("problema-container-view");   }); }

const problema_watch = new IntersectionObserver(problema_view);
problema_watch.observe(problema_container);