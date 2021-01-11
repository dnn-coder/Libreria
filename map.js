// Produce una nueva matriz de valores mapeando cada valor en la lista a través de una función de transformación (iteratee). Al iteratee se le pasan tres argumentos: el valor, luego el índice (o clave) de la iteración y finalmente una referencia a toda la lista.
// En este ejemplo se usa un arreglo con objetos que representan los curos de academlo, el trabajo en clase se califica dando un incremento en la nota fiinal de cada curso, al finmal obtengo las notas con un incremento de 1
const cursos = [{
        id: 1,
        materia: 'Javascript',
        estado: 'Cursando',
        filtro: false,
        nota: 4,
    },
    {
        id: 2,
        materia: 'Git',
        estado: 'Cursando',
        filtro: false,
        nota: 3,
    },
    {
        id: 3,
        materia: 'HTML',
        estado: 'Aprobado',
        filtro: true,
        nota: 2,
    },
    {
        id: 4,
        materia: 'CSS',
        estado: 'Aprobado',
        filtro: true,
        nota: 4,
    },
    {
        id: 5,
        materia: 'Java',
        estado: 'Pendiente',
        filtro: true,
        nota: 4,
    },
    {
        id: 6,
        materia: 'PHP',
        estado: 'Pendiente',
        filtro: false,
        nota: 2,
    },
    {
        id: 7,
        materia: 'Python',
        estado: 'Pendiente',
        filtro: false,
        nota: 2,
    },
    {
        id: 8,
        materia: 'SQL',
        estado: 'Pendiente',
        filtro: false,
        nota: 3,
    },
];

function coursesMap(array, fun) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fun(cursos[i].nota));
    }
    return newArray;
}

const newNota = cursos.map((element) => element.nota + 1);
console.log(cursos);
console.log('Notas con incremento: ', newNota);