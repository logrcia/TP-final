var comenzar = document.getElementById("comenzar");
var siguiente = document.getElementById("siguiente");
var submit = document.getElementById("submit");
var random = 0;
var elegido = document.getElementsByClassName("cables");
var tiempoIncorrecto = 10;
var timerInterval;
var segundoNivel = document.getElementById("segundoNivel");
var tercerNivel = document.getElementById("tercerNivel");
var tiempo;
var input = document.getElementById("input");
var puntaje = 0;
var nombre = document.getElementById("nombre");
var imagenGanaste = document.getElementById("imagenGanaste");
var todo = document.getElementById("todo");
var instrucciones = document.getElementById("instrucciones");
var ganaste = document.getElementById("ganaste");
var modalPerdiste = document.getElementById("modalPerdiste");
var inicio = document.getElementById("inicio");
var niveles = document.getElementById("niveles");
var score = document.getElementById("score");

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

todo.style.display = "none";
instrucciones.style.display = "none";
ganaste.style.display = "none";
modalPerdiste.style.display = "none";



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
    instrucciones.style.display = "block";
    inicio.style.display = "none";
  }
};

function randomColor() {
  random = Math.floor(Math.random() * cables.length);
  var colores = cables[random];
}

function iniciarTimer() {
  timerInterval = setInterval(function () {
    tiempo -= 1;
    document.getElementById("timer").innerText = tiempo;

  if (tiempo <= 0) {
    clearInterval(timerInterval);
    perdiste(); 
  }
  }, 1000);
}

function iniciar(timer) {
  modalPerdiste.style.display = "none";
  todo.style.display = "block";
  document.getElementById("nombre").innerHTML = input.value;
  randomColor();
  iniciarTimer();
  tiempo = timer;
}

for (var i = 0; i < elegido.length; i++) {
  elegido[i].onclick = function () {
      var colorElegido = this.id;

      if (colorElegido === cables[random]) {
          ganaste.style.display = "block";
          todo.style.display = "none";
          clearInterval(timerInterval);
          puntaje += 10;
          score.innerText = puntaje;
      } else {
          document.getElementById(this.id).style.display = "none";
          if (tiempo != 0) {
              tiempo -= tiempoIncorrecto;
              if (tiempo <= 0) {
                  tiempo = 0;
                  perdiste();
              }
          } else {
              perdiste();
          }
      }
  };
}

comenzar.onclick = function () {
  instrucciones.style.display = "none";
  iniciar(90);
};

function proximoNivel() {
  ganaste.style.display = "none";

  for (var i = 0; i < elegido.length; i++) {
    elegido[i].style.display = "none";
  }

  for (var i = 0; i < elegido.length; i++) {
    elegido[i].style.display = "inline-block";
  }
}

function perdiste() {
  modalPerdiste.style.display = "block";
  todo.style.display = "none";
  puntaje = 0;
  score.innerText = puntaje;
  imagenGanaste.src = "./assets/Ganasteeeeeee.png";
}

function reiniciar() {
    iniciar(90);
    proximoNivel();
    niveles.innerHTML = "Nivel Fácil";
    tercerNivel.style.display = "none";
    segundoNivel.style.display = "block";
}

tercerNivel.style.display = "none";

function cambiarNivel(tiempo, displaySegundoNivel, displayTercerNivel, nivelTexto, imagenGanasteSrc) {
  niveles.innerHTML = nivelTexto;
  iniciar(tiempo);
  proximoNivel();
  segundoNivel.style.display = displaySegundoNivel;
  tercerNivel.style.display = displayTercerNivel;
  score.innerText = puntaje;
  imagenGanaste.src = imagenGanasteSrc;
}

segundoNivel.onclick = function () {
  cambiarNivel(75, "none", "block", "Nivel Medio", "./assets/Ganasteeeeeee.png");
};

tercerNivel.onclick = function () {
  cambiarNivel(50, "none", "none", "Nivel Difícil", "./assets/GanasteFinal.png");
};
