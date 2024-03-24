class Objeto {
  constructor(nombre, pregunta, accion, condicion) {
    this.nombre = nombre;
    this.pregunta = pregunta;
    this.accion = accion;
    this.condicion = condicion;
  }
  hacerAccion() {
    console.log(`Quieres ${this.pregunta} ${this.nombre}?`);
    let respuesta = prompt("Ingrese si o no");
    if (respuesta.toLowerCase() == "si") {
      console.log(`Has ${this.accion} la ${this.nombre}`);
      this.condicion = true;
    } else {
      console.log(`No has ${this.accion} la ${this.nombre}`);
    }
  }
}

function jugar() {
  //Funcion principal

  // variables y creacion de objetos
  let seguir = true;
  let llave = new Objeto("llave", "agarrar la", "agarrado la", false);
  let ventana = new Objeto("ventana", "cerrar la", "cerrado la", false);
  let hornalla = new Objeto("hornalla", "apagar la", "apagado la", false);
  let plantas = new Objeto("plantas", "regar la", "regado la", false);
  let billetera = new Objeto("billetera", "agarrar la", "agarrado la", false);
  let luz = new Objeto("luz", "cerrar la", "apagado la", false);
  //array con los objetos del juego
  let objetos =[llave,ventana,hornalla,plantas, billetera, luz];
  
  alert("Estas a punto de empezar a jugar! El objetivo es salir de casa");
  alert("Abrí la consola");
  //recorre el array de objetos mientras el juggador no quiera salir
    for (const obj of objetos){
        if(!seguir) break;
        obj.hacerAccion();
        seguir=irse();
    }
  console.log("Has salido de tu casa!");

  let todasVerdaderas = objetos.every((objeto) => objeto.condicion);
  if (todasVerdaderas) {
    alert("No has olvidado nada, tu casa está segura! Buena suerte en tu día.");
  } else {
    for (const objeto of objetos) {
      alert("Tu casa no está segura");
      if (!objeto.condicion) {
        alert(`Te has olvidado de ${objeto.accion} ${objeto.nombre}`);
      }
    }
  }
}

function irse() {
  //funcion para salir del juego esto no va a estar cuando pueda utilizar eventos.
  console.log("Quieres irte?");
  let ir = prompt("ingrese si o no");
  if (ir.toLowerCase() == "si") {
    return false;
  }
}

jugar();
