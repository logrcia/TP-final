var comenzar= document.getElementById("comenzar");
var siguiente= document.getElementById("siguiente");
var submit= document.getElementById("submit");
var random = 0;
var elegido = document.getElementsByClassName("cables");
var tiempo = 90;
var tiempoIncorrecto = 10;

var cables = ["amarillo", "azul", "gris", "lila", "marron", "naranja", "negro", "rojo", "rosa", "verde"];

document.getElementById("todo").style.display = "none";
document.getElementById("instrucciones").style.display = "none";
document.getElementById("ganaste").style.display = "none";

function onSubmit() {
    var input = document.getElementById("input");
    var bienvenido = document.getElementById("bienvenido");
    bienvenido.innerHTML = "Bienvenido/a al Juego de la Bomba, " + input.value + "!";
    return false;
}

siguiente.onclick= function(){
    document.getElementById("instrucciones").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function randomColor(){
    random = Math.floor(Math.random() * cables.length-1);
    var colores= cables[random];
    console.log(colores);
}

comenzar.onclick= function(){
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("todo").style.display = "block";
    randomColor();
}

for (var i = 0; i < elegido.length; i++) {
    elegido[i].onclick = function() {
        var colorElegido = this.id; 
        
        if (colorElegido === cables[random]) {
            document.getElementById("ganaste").style.display = "block";
            document.getElementById ("todo").style.display = "none";
        } else {
            document.getElementById(this.id).style.display = "none";
        }
    }
}

setInterval(function timer (){
    codigo!!
}, 90);
