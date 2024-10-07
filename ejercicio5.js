
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
document.getElementById("array").textContent = people;

//Eliminar Dani del array
people.splice(1, 1);
document.getElementById("daniEliminado").textContent = people;

//Eliminar a Juan del array
people.splice(2, 1);
document.getElementById("juanEliminado").textContent = people;

//Mover a "Luis" al frente de la matriz
people.splice(1, 1);
people.unshift("Luis");
document.getElementById("moverLuis").textContent = people;

//Agregar mi nombre al final de la matriz
people.push("Sara");
document.getElementById("miNombre").textContent = people;

// Bucle --> for...of loop
// EL RESULTADO DEL BUCLE ESTÁ IMPRESO EN LA CONSOLA !!!
for (let person of people) { // Material de apoyo freeCodeCamp Bucles JavaScript
    console.log(person);
    if (person === "Maria"){ // mozilla 'break'
        break;
    }

}

// indexOf donde se encuentra "Maria"
const indexOfMaria = people.indexOf("Maria");
document.getElementById("indexOfMaria").textContent = indexOfMaria;

// 4 personas en la formación
document.getElementById("finalArray").textContent = people;