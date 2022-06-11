function palindromo (string){
    if(!string) return "Digite uma palavra.";
    
    return string.split("").reverse().join("") === string;

}
console.log(palindromo("ama"));

function trocaPar(array){
    if(!array) return -1;
    if(!array.length) return -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Voce ja é 0");
        }else if (array[i] % 2 === 0) {
            console.log(`Substituido ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [0, 0 , 0 ];
console.log(trocaPar(arr));