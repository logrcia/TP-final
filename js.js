var comenzar = document.getElementById("comenzar");
var siguiente = document.getElementById("siguiente");
var submit = document.getElementById("submit");
var random = 0;
var elegido = document.getElementsByClassName("cables");
var tiempoIncorrecto = 10;
var timerInterval;
var siguienteNivel= document.getElementById("siguienteNivel");
var tiempo;

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

siguiente.onclick = function () {
    document.getElementById("instrucciones").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}


function randomColor() {
    random = Math.floor(Math.random() * cables.length);
    var colores = cables[random];
    console.log(colores);
}

function iniciarTimer() {
    timerInterval = setInterval(function () {
        tiempo -= 1;
        document.getElementById("timer").innerText = tiempo; 
        console.log("Tiempo restante: " + tiempo + " segundos");

        if (tiempo <= 0) {
            clearInterval(timerInterval);
            console.log("¡Tiempo agotado! La bomba explotó.");
        }
    }, 1000);
}

function iniciar(timer) {
    document.getElementById("todo").style.display = "block";
    randomColor();
    iniciarTimer();
    tiempo = timer;
}

comenzar.onclick = function () {
    document.getElementById("instrucciones").style.display = "none";
    iniciar (90);
}


for (var i = 0; i < elegido.length; i++) {
    elegido[i].onclick = function () {
        var colorElegido = this.id;

        if (colorElegido === cables[random]) {
            document.getElementById("ganaste").style.display = "block";
            document.getElementById("todo").style.display = "none";
            clearInterval(timerInterval);
        } else {
            document.getElementById(this.id).style.display = "none";
            tiempo -= tiempoIncorrecto;
            console.log("Respuesta incorrecta. Se restan " + tiempoIncorrecto + " segundos. Tiempo restante: " +
                tiempo + " segundos");
        }
    }
}


siguienteNivel.onclick = function(){
    document.getElementById("ganaste").style.display = "none";
    iniciar(75);
}