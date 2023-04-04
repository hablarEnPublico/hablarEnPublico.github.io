
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




// Codigo seccion curso

const curso_img = document.querySelector(".curso-img");
const curso_content = document.querySelector(".curso-content");

let mq = matchMedia("(max-width:720px)");

if(mq.matches) { const curso_img = document.querySelector(".curso-img");
                 const curso_content = document.querySelector(".curso-content");
                 console.log(mq.matches);
                 curso_img.style.transform = 'translateX(0)';
                 curso_content.style.transform = 'translateX(0)';

	             const curso_img_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) { curso_img.classList.add("curso-img-view-phone");
                                                                                            curso_content.classList.add("curso-content-view-phone");  }
                                                               else { curso_img.classList.remove("curso-img-view-phone");
                                                                      curso_content.classList.remove("curso-content-view-phone"); }  });  }

                 const curso_img_watch = new IntersectionObserver(curso_img_view);
                 curso_img_watch.observe(curso_img); }

else { const curso_img = document.querySelector(".curso-img");
       const curso_content = document.querySelector(".curso-content");
       console.log(mq.matches);

	   const curso_img_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) { curso_img.classList.add("curso-img-view");
                                                                                            curso_content.classList.add("curso-content-view");  }
                                                               else { curso_img.classList.remove("curso-img-view");
                                                                      curso_content.classList.remove("curso-content-view"); }  });  }

       const curso_img_watch = new IntersectionObserver(curso_img_view);
       curso_img_watch.observe(curso_img); }