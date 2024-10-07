/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

const numbers = [7, 8, 9, 10];
console.log(numbers);
function printOutDoubleNumbers (array) {
    const double = array.map((number) => number * 2);
    console.log(double);
    const refDoubleNumbers=document.getElementById("doubleNumbers");
    const numberDouble=double.join(",");
    refDoubleNumbers.innerHTML=numberDouble;
}

printOutDoubleNumbers (numbers);
