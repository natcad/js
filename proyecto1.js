let seguir =true;
let frase;
let ventana;
let hornalla;
let llave;
let plantas;
let billetera;

// tengo dudas de si no hay formas mas eficientes de hacer lo mismo. 

function jugar(){
    alert("Estas a punto de empezar a jugar! El objetivo es salir de casa");
    alert("Abrí la consola");
    while (seguir){
        console.log('Es hora de irte!');

        console.log('Agarraste la llave?');
        llave = prompt("ingrese si o no");
        frase="agarrado la llave";
        llave=chequear(frase, llave);
        if (!seguir) break; 
        
        console.log('Quieres cerrar la ventana?');
        ventana = prompt("ingrese si o no");
        frase="cerrado la ventana";
        ventana=chequear(frase, ventana);
        if (!seguir) break; 
        
        console.log('Quieres chequear la hornalla?');
        hornalla = prompt("ingrese si o no");
        frase="apagado la hornalla";
        hornalla=chequear(frase, hornalla);
        if (!seguir) break; 

        console.log('Regaste las plantas?');
        plantas = prompt("ingrese si o no");
        objeto="regado las plantas";
        plantas=chequear(frase, plantas);
        if (!seguir) break; 

        console.log('Tenes la billetera?');
        billetera = prompt("ingrese si o no");
        objeto="agarrado la billetera";
        billetera=chequear(frase, billetera);
        if (!seguir) break; 
        
        console.log('Seguro que agarrate la llave?');
        llave = prompt("ingrese si o no");
        objeto="agarrado la llave";
        llave=chequear(frase, llave);
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