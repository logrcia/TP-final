var comenzar = document.getElementById("comenzar");
var siguiente = document.getElementById("siguiente");
var submit = document.getElementById("submit");
var random = 0;
var elegido = document.getElementsByClassName("cables");
var tiempoIncorrecto = 10;
var timerInterval;
var segundoNivel = document.getElementById("segundoNivel");
var tiempo;
var input = document.getElementById("input");
var puntaje = 0;
var nombre = document.getElementById("nombre");
var imagenGanaste = document.getElementById("imagenGanaste");


var cables = [
  "amarillo",
  "azul",
  "gris",
  "lila",
  "marron",
  "naranja",
  "negro",
  "rojo",
  "rosa",
  "verde",
];

document.getElementById("todo").style.display = "none";
document.getElementById("instrucciones").style.display = "none";
document.getElementById("ganaste").style.display = "none";
document.getElementById("modalPerdiste").style.display = "none";



function onSubmit() {
  var bienvenido = document.getElementById("bienvenido");
  bienvenido.innerHTML =
    "Bienvenido/a al Juego de la Bomba, " + input.value + "!";
  return false;
}

siguiente.onclick = function () {
  if (input.value === "") {
    alert("Por favor, introducí tu nombre antes de continuar.");
  } else {
    document.getElementById("instrucciones").style.display = "block";
    document.getElementById("inicio").style.display = "none";
  }
};

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
    perdiste(); 
  }
  }, 1000);
}

function iniciar(timer) {
  document.getElementById("modalPerdiste").style.display = "none";
  document.getElementById("todo").style.display = "block";
  document.getElementById("nombre").innerHTML = input.value;
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
          puntaje += 10;
          document.getElementById("score").innerText = puntaje;
      } else {
          document.getElementById(this.id).style.display = "none";
          if (tiempo != 0) {
              tiempo -= tiempoIncorrecto;
              if (tiempo <= 0) {
                  tiempo == 0;
                  perdiste();
              }
          } else {
              perdiste();
          }

          console.log(
              "Respuesta incorrecta. Se restan " +
              tiempoIncorrecto +
              " segundos. Tiempo restante: " +
              tiempo +
              " segundos"
          );
      }
  };
}

comenzar.onclick = function () {
  document.getElementById("instrucciones").style.display = "none";
  iniciar(90);
};

function proximoNivel() {
  document.getElementById("ganaste").style.display = "none";

  for (var i = 0; i < elegido.length; i++) {
    elegido[i].style.display = "none";
  }

  for (var i = 0; i < elegido.length; i++) {
    elegido[i].style.display = "inline-block";
  }
}

function perdiste() {
  document.getElementById("modalPerdiste").style.display = "block";
  document.getElementById("todo").style.display = "none";
  puntaje = 0;
  document.getElementById("score").innerText = puntaje;
  imagenGanaste.src = "./assets/Ganasteeeeeee.png";
}

function reiniciar() {
    iniciar(90);
    proximoNivel();
    document.getElementById("niveles").innerHTML = "Nivel Fácil";
    document.getElementById("tercerNivel").style.display = "none";
    document.getElementById("segundoNivel").style.display = "block";
}


document.getElementById("tercerNivel").style.display = "none";

segundoNivel.onclick = function () {
  document.getElementById("niveles").innerHTML = "Nivel Medio";
  iniciar(75);
  proximoNivel();
  document.getElementById("segundoNivel").style.display = "none";
  document.getElementById("tercerNivel").style.display = "block";
  document.getElementById("score").innerText = puntaje;
};

tercerNivel.onclick = function () {
  document.getElementById("niveles").innerHTML = "Nivel Difícil";
  iniciar(50);
  proximoNivel();
  document.getElementById("tercerNivel").style.display = "none";
  document.getElementById("segundoNivel").style.display = "none";
  document.getElementById("score").innerText = puntaje;
  imagenGanaste.src = "./assets/GanasteFinal.png";
}

