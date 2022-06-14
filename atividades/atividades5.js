function minhaFuncao(array, numero){
    try {
        if (!array && !numero) throw new ReferenceError("Envie os parametros !!");
        if(typeof array !== "object") throw new TypeError("O array precisa ser do tipo OBJECT !");
        if(typeof numero !== "number") throw new TypeError("O parametro ser  precisa ser do tipo NUMBER!");
        if(array.length !== numero ) throw new RangeError("tamanho Invalido !");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError");
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log("Este erro e um TypeError");
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log("Este erro e um RangeError");
            console.log(error.message);
        } else{
            console.log("Erro inesperado " + error);
        }
    }

}
const novoArray = [3, 42, 5, 4]
console.log(minhaFuncao(novoArray, 4))