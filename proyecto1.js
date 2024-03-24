//originalmente habia pensado en una estructura asi:
let objetos = [
  {
    nombre: "llave",
    pregunta: "agarrar la",
    accion: "agarrado",
    condicion: false,
  },
  {
    nombre: "ventana",
    pregunta: "cerrar la",
    accion: "cerrado",
    condicion: false,
  },
  {
    nombre: "hornalla",
    pregunta: "apagar la",
    accion: "apagado",
    condicion: false,
  },
  {
    nombre: "plantas",
    pregunta: "regar la",
    accion: "regado",
    condicion: false,
  },
  {
    nombre: "billetera",
    pregunta: "agarrar la",
    accion: "agarrado",
    condicion: false,
  },
  { 
    nombre: "luz", 
    pregunta: "apagar la", 
    accion: "apagado", 
    condicion: false }
];
//pero me genero conflictos en el momento de modificar cada objeto, por eso descartaria el array
//Me parece mas optimo crear la clase objeto.

function jugar() {
  //Funcion principal

  let seguir = true;

  alert("Estas a punto de empezar a jugar! El objetivo es salir de casa");
  alert("Abrí la consola");

  //esta parte de codigo con objeto es mas simple y no necesito la funcion extra reemplazar()
  for (const objeto of objetos) {
    if (!seguir) break;
    let nuevoObj = accion(objeto);
    if (nuevoObj !== NULL) {
      reemplazar(nuevoObj);
    }
    seguir = irse();
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

function reemplazar(obj) {
  //funcion que reemplaza del array objeto inicial con el objeto modificado
  const i = objetos.findIndex((o) => o.nombre === obj.nombre);
  if (i !== -1) {
    objetos[i] = obj;
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

function accion(objeto) {
  //consulta para realizar o no la accion.
  console.log(`Quieres ${objeto.pregunta} ${objeto.nombre}?`);
  let respuesta = prompt("Ingrese si o no");
  if (respuesta.toLowerCase() == "si") {
    console.log(`Has ${objeto.accion} la ${objeto.nombre}`);
    objeto.condicion = true;
    return objeto;
  } else {
    console.log(`No has ${objeto.accion} la ${objeto.nombre}`);
    objeto.condicion = false;
    return null;
  }
}

jugar();
