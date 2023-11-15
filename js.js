var comenzar = document.getElementById("comenzar");
var siguiente = document.getElementById("siguiente");
var submit = document.getElementById("submit");
var random = 0;
var elegido = document.getElementsByClassName("cables");
var tiempoIncorrecto = 10;
var timerInterval;
var segundoNivel= document.getElementById("segundoNivel");
var tiempo;
var input = document.getElementById("input");



var cables = ["amarillo", "azul", "gris", "lila", "marron", "naranja", "negro", "rojo", "rosa", "verde"];

document.getElementById("todo").style.display = "none";
document.getElementById("instrucciones").style.display = "none";
document.getElementById("ganaste").style.display = "none";

function onSubmit() {
    var bienvenido = document.getElementById("bienvenido");
    bienvenido.innerHTML = "Bienvenido/a al Juego de la Bomba, " + input.value + "!";
    return false;
}

siguiente.onclick = function () {
    if (input.value === "") {
        alert("Por favor, introducí tu nombre antes de continuar.");
    } else {
        document.getElementById("instrucciones").style.display = "block";
        document.getElementById("inicio").style.display = "none";
    }
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
            console.log("¡Tiempo agotado! La bomba explotó."); // poner foto de que perdiste
        }
    }, 1000);
}

function iniciar(timer) {
    document.getElementById("todo").style.display = "block";
    randomColor();
    iniciarTimer();
    tiempo = timer;
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

comenzar.onclick = function () {
    document.getElementById("instrucciones").style.display = "none";
    iniciar(90);
}

function proximoNivel(){
    document.getElementById("ganaste").style.display = "none";

    for (var i = 0; i < elegido.length; i++) {
        elegido[i].style.display = "none";
    }
    
    for (var i = 0; i < elegido.length; i++) {
        elegido[i].style.display = "inline-block";
    }
}

document.getElementById("tercerNivel").style.display = "none";

segundoNivel.onclick = function () {
    iniciar(75);
    proximoNivel();
    document.getElementById("tercerNivel").style.display = "block";
    document.getElementById("segundoNivel").style.display = "none";
}


tercerNivel.onclick = function () {
    iniciar(50);
    proximoNivel();
}

