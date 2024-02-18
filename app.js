//Interactuando con el html

let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //EL usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}


function condicionesIniciales(){
        asignarTextoElemento('H1', 'Juego del número Secreto');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos=1;
}
function reiniciarJuego(){
        //Limpiar la caja
        limpiarCaja();
        //Indicar mensaje de inicio
        //generar el número aleatorio
        //inicialiar el número de intentos
        condicionesIniciales();
        //Deshabilitar el boton de nuevo juego
        document.getElementById('reiniciar').setAttribute('disabled', true); 
}

function limpiarCaja(){
    let valorCaja= document.getElementById('valorUsuario');
    valorCaja.value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo);
    //si ya sorteamos todos  los número
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{   
    //Si el número generado esta incluido en la lista, se hace una operación, sino otra
    if(listaNumerosSorteados.includes(numeroGenerado)){ 
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

condicionesIniciales();