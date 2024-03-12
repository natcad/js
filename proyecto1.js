let seguir =true;
let frase;
let ventana;
let hornalla;
let llave;
let plantas;
let billetera;


function jugar(){
    alert("Estas a punto de empezar a jugar! El objetivo es salir de casa");
    alert("Abrí la consola");
    while (seguir){
        console.log('Es hora de irte!');

        llave =accion('llave', 'agarrado', 'Agarraste la');
        if (!seguir) break; 
        
        ventana =accion('ventana', 'cerrado', 'Cerraste la');
        if (!seguir) break; 
        
        billetera =accion('billetera', 'agarrado', 'Agarraste la');
        if (!seguir) break; 
        
        hornalla =accion('hornalla', 'apagado', 'Apagaste la');
        if (!seguir) break; 
        
        plantas =accion('planta', 'regado', 'Regaste la');
        if (!seguir) break; 
        
        
    }

    console.log('Has salido de tu casa!');
    //Quisiera tener varios resultados, se me ocurrió para evitar usar muchos ifs hacerlo con un array de condiciones
    // un array que contega resultados pero esto no entraria en esta preentrega. 
    //asi que lo dejé así simplemente.
    
    if(ventana && llave && plantas && billetera && hornalla){
        alert("tu casa está segura y tienes todo que tengas un lindo día! :)");
    }else{
        alert("Cuidado!! Tu casa no está segura y/o te faltan cosas");
    }
    seguir=true;
    }

function chequear(frase, condicional){
    if (condicional.toLowerCase() == "si"){
        console.log(`Has ${frase}}!`);
       irse();
       return true;
    }else{
        console.log()
        return false;
    }
}

function irse(){
    console.log("Quieres irte?");
    let ir = prompt("ingrese si o no");
    if (ir.toLowerCase() == "si"){
        seguir = false;
    }

}

function accion(nombre, accion, pregunta){
    console.log( `${pregunta} ${nombre}?`);
    let respuesta = prompt("Ingrese si o no");
    let frase = `${accion} la ${nombre}`;
    return chequear(frase, respuesta);
}


jugar();