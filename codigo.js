
"use strict";

// Codigo seccion Slider o prueba social
let comentarios = [`Lo estudie, lo puse en practica y ahora soy mejor comunicador. Tener un mentor como Carlos es y será siempre de bendición para mi vida, solo me queda seguir mejorando.`,`Estoy segura de que tendré un desarrollo increible con este entrenamiento. Conforme voy avanzando con las lecciones, voy entendiendo que hablar en público es un arte en el que puedes entrenarte.`,`Simplemente increible, muy buena introducción al programa, estoy seguro de que voy a sacarle mucho provecho y arrancar con todo en mis presentaciones de la universidad.`,`Soy licenciado y docente en la carrera de Contaduria, todo el tiempo debo comunicar frente a mis alumnos y por ello quiero hacerlo de la mejor manera. Sin duda alguna, es una habilidad que planeo inculcarles tambien, porque es muy importante.`,`Todo excelente, el contenido bien estructurado, facil de consumir.`];
let nombres = ["Christian O. hace 4 semanas","Liliana P. hace 5 días","Miguel H. hace 2 semanas","Angel H. hace 2 semanas","Laura M. hace 1 semanas"]

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


// Codigo seccion precio-contenido-extra
const precio_contenido_extra = document.querySelector(".precio-contenido-extra");
const precio_content2_agregar = document.querySelector(".precio-content2-agregar");
let agregado = false;

precio_content2_agregar.addEventListener("click",  ()=>{ if(agregado == false){ precio_content2_agregar.style.backgroundColor = "green";
                                                                                precio_content2_agregar.textContent = "Agregado";
                                                                                precio_content2_agregar.style.color = "white";
                                                                                precio_contenido_extra.classList.add("precio-contenido-extra-active");  }   });

// Codigo seccion cronometro de precio-content2
const cronometro_hora = document.getElementById("hora");
const cronometro_minutos = document.getElementById("minutos");
const cronometro_segundos = document.getElementById("segundos");
let intervalo;

const actualizarCronometro =()=> {
  // Obtener la hora actual
  let ahora = new Date();

  // Establecer el final del día
  let finalDelDia = new Date();
  finalDelDia.setHours(24);
  finalDelDia.setMinutes(59);
  finalDelDia.setSeconds(59);

  // Calcular la diferencia en segundos entre la hora actual y el final del día
  let diferenciaSegundos = Math.floor((finalDelDia - ahora) / 1000);

  // Calcular las horas, minutos y segundos restantes
  let horasRestantes = Math.floor(diferenciaSegundos / 3600);
  let minutosRestantes = Math.floor((diferenciaSegundos % 3600) / 60);
  let segundosRestantes = diferenciaSegundos % 60;

  // Actualizar las etiquetas "span"
  cronometro_hora.textContent = horasRestantes.toString().padStart(2, '0');
  cronometro_minutos.textContent = minutosRestantes.toString().padStart(2, '0');
  cronometro_segundos.textContent = segundosRestantes.toString().padStart(2, '0');

  // Verificar si el cronómetro ha alcanzado cero
  if (diferenciaSegundos <= 0) {
    // Detener el intervalo de actualización
    clearInterval(intervalo);

    // Guardar un valor en el localStorage
    localStorage.setItem('cronometroFinalizado', 'true');
  }
}

// Verificar si el cronómetro ya ha finalizado hoy
if (localStorage.getItem('cronometroFinalizado') === 'true') { cronometro_hora.style.border = "2px solid #555";
                                                               cronometro_minutos.style.border = "2px solid #555";
                                                               cronometro_segundos.style.border = "2px solid #555";

                                                               cronometro_hora.textContent = "00";
                                                               cronometro_minutos.textContent = "00";
                                                               cronometro_segundos.textContent ="00"; }
else { actualizarCronometro();
       intervalo = setInterval(actualizarCronometro, 1000); }
