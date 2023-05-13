
"use strict";

// Activar animaciones de escritura en seccion 1
const seccion1_escribir_nombre = document.querySelector(".seccion1-escribir-nombre");
const seccion1_escribir_saludo  = document.querySelector(".seccion1-escribir-saludo");

setTimeout(()=>{ seccion1_escribir_saludo.style.animation = "escribir 2s infinite alternate";  },3000);
setTimeout(()=>{ seccion1_escribir_nombre.style.animation = "escribir 3s infinite alternate";  },3000);

//  Codigo apertura de modal menu responsive
const modal_menu_container = document.querySelector(".modal-container");
const modal_menu_content = document.querySelector(".modal-content");
const menu_responsive = document.querySelector(".nav-menu-responsive");
const modal_menu_cerrar = document.querySelector(".modal-cerrar");

menu_responsive.addEventListener("click", ()=>{  modal_menu_container.classList.add("modal-container-open");
                                                 setTimeout(()=>{ modal_menu_content.classList.add("modal-content-open"); },200); });

modal_menu_cerrar.addEventListener("click", ()=>{  modal_menu_content.classList.remove("modal-content-open");
                                                   setTimeout(()=>{ modal_menu_container.classList.remove("modal-container-open"); },200); });