function getAdmin(map){
    let admin = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admin.push(key)
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set("Manoel", "Admin");
usuarios.set("jose", "Usuario");
usuarios.set("Mateus","Admin");

console.log(getAdmin(usuarios));

const meuArray = [30, 20, 20, 40, 223, 471, 541, 541];

function valoresUnicos (array){
    const mySet = new Set(array);

    return [...mySet];

}
console.log(valoresUnicos(meuArray));