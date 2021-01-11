//Definition and Usage... The forEach() method calls a function once for each element in an array, in order... Note: the function is not executed for array elements without values.
//El metodo foreach ejecuta una funcion una vez por cada elemento de mi arreglo, en orden.

const numbers = [1, 2, 3, 4];
let suma = 0;

function saludo(element) {
    suma += element;

}
numbers.forEach(saludo);

const erik = {}
erik.each = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
erik.each(numbers, saludo);
console.log(suma);