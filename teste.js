console.log("Helo word");

// Numeros pares em uma lista 

function returnNumerosPares(array){
    let numeros = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            numeros.push(array[i]);
        }
    }
    console.log(numeros);
}
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
returnNumerosPares(array);

// compara se o numero é igual, faz sua soma e verifica se e maior ou menor que 10 e 20

function comparaNumero(num1,num2){
    if(!num1 || !num2){
        return "Defina dois Numeros";
    } 

   const parteUm = criaParteUm (num1,num2)
   const parteDois = criaParteDois (num1,num2)
   
    return`${parteUm} ${parteDois}`;
}

function criaParteUm(num1,num2){
    let seIgual = ' ';
    if (num1 !== num2) {
        seIgual = ' não ';
    }
    console.log(`Os Numeros ${num1} e ${num2}${seIgual}são iguais.`)
};

function criaParteDois(num1,num2) {
    const soma = num1 + num2;
    let menor10 = 'menor'
    let menor20 = 'menor'
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        menor10 = 'maior';
    }
    if (compara20) {
        menor20 = 'maior'
    }
    console.log(`Sua soma é ${soma}, que é ${menor10} que 10 e ${menor20} que 20.`)
}

console.log(comparaNumero(0,0))

