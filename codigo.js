
"use strict";

// Codigo seccion Slider o prueba social
let comentarios = [`Lo estudie, lo puse en practica y ahora soy mejor orador, literal todo esta en la practica y en cada día ponerte en situaciones demandantes, gracias carlos.`,`Apenas ingrese y ya estoy encantada con el contenido, lo único que no se, es si necesito la guía escrita de lenguaje corporal para seguir la clase, fuera de eso todo bien.`,`La verdad es que no recuerdo la última vez que pasé verguenza en público, desde que salí de la prepa, me puse a trabajar en mí mismo, conocí este programa, aprendí a hablar en público y hoy estoy creando mis propias oportunidades, muchas gracias carlos espero un día nos podamos conocer.`,`Sin duda alguna, hablar en público es una de las habilidades que me ha cambiado la vida o al menos me la ha vuelto más facil, una vez terminé todos los retos del programa... Me propuse a crear los mios, cada vez que tengo la oportunidad de hablar en público, lo hago, porque se que todo suma.`,`Todo excelente, el contenido bien estructurado, facil de consumir.`];
let nombres = ["Christian O. el 20 de octubre 2022","Liliana P. hace 5 días","Miguel H. el 5 de enero 2023","Angel H. el 22 de julio 2022","Eduardo H. el 17 de agosto 2022"]

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

