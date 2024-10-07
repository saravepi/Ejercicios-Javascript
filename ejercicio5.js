
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Eliminar Dani del array
people.splice(1, 1);


//Eliminar a Juan del array
people.splice(2, 1);


//Mover a "Luis" al frente de la matriz
const luis = people.splice(1, 1);
people.unshift(luis[0]);


//Agregar su nombre al final de la matriz
people.push("Sara");


