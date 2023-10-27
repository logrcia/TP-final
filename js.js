var comenzar= document.getElementById("comenzar");
var siguiente= document.getElementById("siguiente");
var submit= document.getElementById("submit");
var input= document.getElementById("input");

var cables = [
    
]


document.getElementById("todo").style.display = "none";
document.getElementById("instrucciones").style.display = "none";

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

comenzar.onclick= function(){
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("todo").style.display = "block";
}


