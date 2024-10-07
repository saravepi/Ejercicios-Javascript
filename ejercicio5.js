
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
document.getElementById("array").textContent = people;

//Eliminar Dani del array
people.splice(1, 1);
document.getElementById("dani_eliminado").textContent = people;

//Eliminar a Juan del array
people.splice(2, 1);
document.getElementById("juan_eliminado").textContent = people;

//Mover a "Luis" al frente de la matriz
people.splice(1, 1);
people.unshift("Luis");
document.getElementById("mover_luis").textContent = people;

//Agregar mi nombre al final de la matriz
people.push("Sara");
document.getElementById("mi_nombre").textContent = people;

// Bucle for
for (const i=0; i<people.length; i++){
    console.log(people);
}


// indexOf donde se encuentra "Maria"
const indexOfMaria = people.indexOf("Maria");
document.getElementById("indexOfMaria").textContent = indexOfMaria;

// 4 personas en la formación
document.getElementById("finalArray").textContent = people;