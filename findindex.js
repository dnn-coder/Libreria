//El método findIndex () devuelve el índice del primer elemento de la matriz que pasa una función de prueba.
//En este ejemplo lo que se va a hacer tenemos un arreglo de materias y lo que se quiere hacer es buscar una materia con determinado id y que esta nos muestre la pocision del indice
const cursos = [{
        id: 1,
        materia: 'Javascript',
        estado: 'Cursando',
        nota: 4,
    },
    {
        id: 2,
        materia: 'Git',
        estado: 'Cursando',
        nota: 3,
    },
    {
        id: 3,
        materia: 'HTML',
        estado: 'Aprobado',
        nota: 2,
    },
    {
        id: 4,
        materia: 'CSS',
        estado: 'Aprobado',
        nota: 4,
    },
    {
        id: 5,
        materia: 'Java',
        estado: 'Pendiente',
        nota: 4,
    },
    {
        id: 6,
        materia: 'PHP',
        estado: 'Pendiente',
        nota: 2,
    },
    {
        id: 7,
        materia: 'Python',
        estado: 'Pendiente',
        nota: 2,
    },
    {
        id: 8,
        materia: 'SQL',
        estado: 'Pendiente',
        nota: 3,
    },
];

const curso = cursos.findIndex(curso => curso.id === 8)
console.log(curso);