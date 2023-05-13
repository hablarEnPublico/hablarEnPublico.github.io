
"use strict";

// Activar animaciones de escritura en seccion 1
const seccion1_escribir_nombre = document.querySelector(".seccion1-escribir-nombre");
const seccion1_escribir_saludo  = document.querySelector(".seccion1-escribir-saludo");

setTimeout(()=>{ seccion1_escribir_saludo.style.animation = "escribir 2s infinite alternate";  },3000);
setTimeout(()=>{ seccion1_escribir_nombre.style.animation = "escribir 3s infinite alternate";  },3000);