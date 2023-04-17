
"use strict";


//  Codigo efecto para problema2-container 

const problema2_container = document.querySelector(".problema2-container");
const problema2_tittle = document.querySelector(".problema2-tittle");
const problema2_parrafo = document.querySelector(".problema2-parrafo");
const problema2_logo = document.querySelector(".problema2-logo")

const problema2_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problema2_tittle.classList.add("problema2-efect-view");
                                                                                          problema2_parrafo.classList.add("problema2-efect-view");
                                                                                          problema2_logo.classList.add("problema2-efect-view"); }

                                                              else { problema2_tittle.classList.remove("problema2-efect-view");
                                                                     problema2_parrafo.classList.remove("problema2-efect-view");
                                                                     problema2_logo.classList.remove("problema2-efect-view"); }   }); }

const problema2_watch = new IntersectionObserver(problema2_view);
problema2_watch.observe(problema2_container);


//  codigo seccion realidad
const realidad_container = document.querySelector(".realidad-container");
const realidad_tittle = document.querySelector(".realidad-tittle");
const realidad_parrafo = document.querySelector(".realidad-parrafo");


const realidad_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ realidad_tittle.classList.add("realidad-efect-view");
                                                                                         realidad_parrafo.classList.add("realidad-efect-view"); }

                                                              else { realidad_tittle.classList.remove("realidad-efect-view");
                                                                     realidad_parrafo.classList.remove("realidad-efect-view"); }   }); }

const realidad_watch = new IntersectionObserver(realidad_view);
realidad_watch.observe(realidad_container);




//  Codigo efecto para problema3-container 

const problema3_container = document.querySelector(".problema3-container");

const problema3_view =(entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ problema3_container.classList.add("problema3-container-view"); }
                                                              else problema3_container.classList.remove("problema3-container-view");   }); }

const problema3_watch = new IntersectionObserver(problema3_view);
problema3_watch.observe(problema3_container);









// Codigo seccion curso

const curso_tittle = document.querySelector(".curso-tittle");

const curso_tittle_view = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting) { curso_tittle.classList.add("curso-tittle-view"); }
                                                                    else { curso_tittle.classList.remove("curso-tittle-view"); }  });  }

const curso_tittle_watch = new IntersectionObserver(curso_tittle_view);
curso_tittle_watch.observe(curso_tittle);




const curso_img = document.querySelector(".curso-img");
const curso_content = document.querySelector(".curso-content");
let mq = matchMedia("(max-width:720px)");

const inf_720px = ()=>{ const curso_img_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) { curso_img.style.transform = `translateY(0)`;
                                                                                                                    curso_content.style.transform = `translateY(0)`;
                                                                                                                    curso_content.style.opacity = "1";  }    });  }

                        const curso_img_watch = new IntersectionObserver(curso_img_view);
                        curso_img_watch.observe(curso_img); }

// funcion para superior a 720px

const sup_720px = ()=>{ const curso_img_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) { curso_img.classList.add("curso-img-view");
                                                                                                                    curso_content.classList.add("curso-content-view");  }  });  }

                        const curso_img_watch = new IntersectionObserver(curso_img_view);
                        curso_img_watch.observe(curso_img); }

// Validaciones para seccion de curso container
// Si ingresa por el telefono - inferior a 720px
if(mq.matches) { inf_720px(); }

// Si ingresa por el computador - superior a 720px 
else { sup_720px(); }








//  Codigo redireccion a link de afiliacion con call-container

const call_container = document.querySelector(".call-container");
const call_content = document.querySelector(".call-content");
const call_overlay = document.querySelector(".call-overlay");

call_container.addEventListener("click", ()=>{ window.open("www.google.com") });
let overlay_efect = 0; 

const call_container_view = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting) {  overlay_efect++;
	                                                                                              if(overlay_efect == 1){ setInterval(()=>{ call_content.style.outline = "4px solid #123";
	                                                                                              	                                        call_overlay.classList.add("call-overlay-view");
	                                                                                                                                        setTimeout(()=>{ call_overlay.classList.remove("call-overlay-view");
	                                                                                                                                                         call_content.style.outline = "none"; },2000) },4000); }  }  }); }

const call_container_watch = new IntersectionObserver(call_container_view);
call_container_watch.observe(call_container);
