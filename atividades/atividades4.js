// função Map

const pera = {
    value: 3,
}
const melao = {
    value: 5,
}


function mapComThis(array , fruta){
    return array.map(function(item){
       return item * this.value;
    },fruta);
}

const arr = [2, 4];

console.log(mapComThis(arr, pera))
console.log(mapComThis(arr, melao))


//  Função filter 

function filtrandoPares(array){
    return array.filter(ehPar);
}

function ehPar(item){
    return item % 2===0;
}

const numeros = [4 , 16, 40, 5, 7, 91, 90, 52];

console.log(filtrandoPares(numeros));