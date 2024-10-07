/**Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

// SUMA
const sum = [2, 7, 14, 25];

const resultSum = sum.reduce((prev, number) => prev + number);

let refResultSuma=document.getElementById("summary");
    refResultSuma.innerHTML="Resultado de la suma: "+ resultSum;

// MULTIPLICACIÓN
const product = [2, 7, 14, 25];

const resultProduct = product.reduce((prev, number) => prev * number);

let refResultProduct=document.getElementById("product");
    refResultProduct.innerHTML="Resultado de la multiplicación: "+ resultProduct;