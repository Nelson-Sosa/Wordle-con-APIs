let tieneVidas = 6;
let palabra = "APPLE";
let verde = '#79b851';
let amarillo = '#f3c237';
let gris = '#a4aec4';
let diccionario = ["APPLE", "HOUSE", "ANGEL", "NEVER", "PASTA", "AFTER"];
palabra = palabraAleatoria(diccionario);

const API = "https://random-word-api.herokuapp.com/word?length=5";

fetch(API).then((response) => {
    response.json().then((body) =>{
        palabra = body[0].toUpperCase();
    });
    
});


function palabraAleatoria(diccionario){
    let max = diccionario.length - 1;
    let indice = Math.floor(Math.random() * max + 1);
    return diccionario[indice];
}

document.getElementById("guess-button").addEventListener("click", () =>{
     const intento = leerIntento();
     if(palabra === intento){
       terminar("¡GANASTE!😀");
        return;
     }
     const row = document.createElement("div");
     row.className = "row";
     const grid = document.getElementById("grid");

     for(let i = 0; i < intento.length; i++){
        const span = document.createElement("span");
        span.className = 'letter';
        span.innerText = intento[i];
        if(intento[i] === palabra[i]){
            span.innerHTML = intento[i];
            span.style.backgroundColor = verde;
        }else if(palabra.includes(intento[i])){
            span.innerHTML = intento[i];
            span.style.backgroundColor = amarillo;
        } else{
            span.innerHTML = intento[i];
            span.style.backgroundColor = gris;
        }
        row.appendChild(span);   
    }
    grid.appendChild(row);
    tieneVidas--;

    if(tieneVidas === 0){
        terminar("¡PERDISTE!😖");
    }
});

function leerIntento(){
    const input = document.getElementById("guess-input");
    const valor = input.value.toUpperCase();
    return valor;
}

function terminar(mensaje){
    let p = document.getElementById("guesses");
    p.innerHTML = "<h1>" + mensaje + "</h1>";
}



