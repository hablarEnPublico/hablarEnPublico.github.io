
"use strict";

//  Codigo efecto para problema-container 

const problema_container = document.querySelector(".problema-container");

const problema_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problema_container.classList.add("problema-container-view"); }
                                                              else problema_container.classList.remove("problema-container-view");   }); }

const problema_watch = new IntersectionObserver(problema_view);
problema_watch.observe(problema_container);



//  Codigo efecto para problema2-container 

const problema2_container = document.querySelector(".problema2-container");

const problema2_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problema2_container.classList.add("problema2-container-view"); }
                                                              else problema2_container.classList.remove("problema2-container-view");   }); }

const problema2_watch = new IntersectionObserver(problema2_view);
problema2_watch.observe(problema2_container);




