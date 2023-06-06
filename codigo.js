
"use strict";

// Codigo seccion Slider o prueba social
let comentarios = [`Lo estudie, lo puse en practica y ahora soy mejor orador. Todo esta en la practica, en cada día ponerse en situaciones demandantes y en rodearse de personas con los mismos objetivos. Agradecido de haber tenido un gran entrenador como carlos.`,`Apenas ingrese al entrenamiento y ya estoy encantada con el contenido, mi única duda es si necesito la guía escrita de lenguaje corporal para seguir las clases, ya que no alcance a comprarla, espero respuesta porfavor.`,`No recuerdo la última vez que pasé pena al hablar en público, desde que salí de la prepa... Me puse a trabajar en mí mismo, conocí este programa, aprendí a hablar en público y hoy estoy creando mis propias oportunidades, muchas gracias carlos es usted un excelente entrenador.`,`Sin duda alguna, hablar en público es una de las habilidades que me ha cambiado la vida o al menos me la ha vuelto más facil, una vez terminé todos los retos del programa... Me propuse a crear los mios, cada vez que tengo la oportunidad de hablar en público, lo hago, porque se que todo suma.`,`Todo excelente, el contenido bien estructurado, facil de consumir.`];
let nombres = ["Christian O. hace 7 semanas","Liliana P. hace 5 días","Miguel H. el 5 de enero 2023","Angel H. el 22 de julio 2022","Laura M. el 17 de agosto 2022"]

let prueba_left = document.querySelector(".prueba-left");
let prueba_derecha = document.querySelector(".prueba-derecha");

let prueba_slider_content = document.querySelector(".prueba-slider-content");
let prueba_slider_comentario = document.querySelector(".prueba-slider-comentario");
let prueba_slider_nombre = document.querySelector(".prueba-slider-nombre");

let position = 0;
prueba_left.classList.add("prueba-left-disable");
prueba_slider_comentario.textContent = comentarios[0];
prueba_slider_nombre.textContent = nombres[0];


prueba_left.addEventListener("click", ()=>{  if(position >0){  prueba_slider_content.classList.add("prueba-slider-content-change");
                                                               position--;
                                                               if(position ==0) { prueba_left.classList.add("prueba-left-disable"); }
                                                               if(position !=4) { prueba_derecha.classList.remove("prueba-derecha-disable"); }
                                                               setTimeout(()=>{ prueba_slider_comentario.textContent = comentarios[position];
                                                                                prueba_slider_nombre.textContent = nombres[position];
                                                               	                prueba_slider_content.classList.remove("prueba-slider-content-change");  },250); } }); 


prueba_derecha.addEventListener("click", ()=>{  if(position < 4) { prueba_slider_content.classList.add("prueba-slider-content-change");
                                                                   position++;
                                                                   if(position !=0) { prueba_left.classList.remove("prueba-left-disable"); }
                                                                   if(position == 4) { prueba_derecha.classList.add("prueba-derecha-disable"); }
                                                                   setTimeout(()=>{ prueba_slider_comentario.textContent = comentarios[position];
                                                                                    prueba_slider_nombre.textContent = nombres[position];
                                                                   	                prueba_slider_content.classList.remove("prueba-slider-content-change"); },250); }  });




//  Codigo seccion boton de compra
const precio_comprar = document.querySelector(".precio-comprar");

precio_comprar.addEventListener("click", ()=>{ window.open("https://go.hotmart.com/K81069854S?ap=8c44");  });