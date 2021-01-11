// Implementar el metodo forEach 
//Itera sobre una lista de elementos, dando cada uno a su vez a una función iteratee. El iteratee está vinculado al objeto de contexto, si se pasa uno. Cada invocación de iteratee se llama con tres argumentos: (elemento, índice, lista). Si la lista es un objeto de JavaScript, los argumentos de iteratee serán (valor, clave, lista). Devuelve la lista para encadenar.
// Se crea un array de cursos vistos y se va a mostrar el recorrido con su indice y su respectivo valor

let lenguajes = ['Javascript', 'Git', 'HTML', 'CSS', 'Java', 'PHP', 'Python', 'SQL', 'C#'];

lenguajes.forEach((element, index, array) => console.log(`Curso ${element} su indice es ${index} y todos los cursos son:  ${array}`));