var novoValor = document.getElementById("currentNumber");
var currentNumber = 0;

function inclementa(){
    currentNumber = currentNumber + 1;
    novoValor.innerHTML = currentNumber;
}

function declementa(){
    currentNumber = currentNumber - 1;
    novoValor.innerHTML = currentNumber;
}

