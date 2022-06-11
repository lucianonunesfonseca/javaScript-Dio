const alunos = [
    {
        nome: "Paulo",
        nota: 9,
        tuma: "2C"
    },
    {
        nome: "Marcos ",
        nota: 8,
        tuma: "2A"
    },
    {
        nome: "Monica",
        nota: 4,
        tuma: "2B"
    },
    {
        nome: "Mikael",
        nota: 7,
        tuma: "3C"
    },
];

function alunosaprovados (array , media){
    aprovados = [];

    for (let i = 0; i < array.length; i++) {
        const {nota, nome} = array[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosaprovados(alunos, 5));