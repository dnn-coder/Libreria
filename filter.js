//El método filter () crea una nueva matriz con elementos de matriz que pasa una prueba.
//En este ejemplo tenemos un arreglo dse objetos que se llama cursos y contiene todos los cursos existentes, con el filter lo que se va a ahacer es filtrar las materia saprobadas y las no aprobadas
const cursos = [{
        id: 1,
        materia: 'Javascript',
        estado: 'Cursando',
        filtro: false,
    },
    {
        id: 2,
        materia: 'Git',
        estado: 'Cursando',
        filtro: false,
    },
    {
        id: 3,
        materia: 'HTML',
        estado: 'Aprobado',
        filtro: true,
    },
    {
        id: 4,
        materia: 'CSS',
        estado: 'Aprobado',
        filtro: true,
    },
    {
        id: 5,
        materia: 'Java',
        estado: 'Pendiente',
        filtro: true,
    },
    {
        id: 6,
        materia: 'PHP',
        estado: 'Pendiente',
        filtro: false,
    },
    {
        id: 7,
        materia: 'Python',
        estado: 'Pendiente',
        filtro: false,
    },
    {
        id: 8,
        materia: 'SQL',
        estado: 'Pendiente',
        filtro: false,
    },
    {
        id: 9,
        materia: 'C#',
        estado: 'Pendiente',
        filtro: false,
    },
];

function coursesFilter(array, fun) {
    let data = [];
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i].filtro)) {
            data.push(array[i])
        }
    }
    return data;
}

function approvedCourse(element) {
    return element === true;
}

function courseNotApprovedd(element) {
    return element === false;
}
console.log('Todos los cursos: ');
console.log(cursos);

console.log('Cursos aprobados: ');
const newData = coursesFilter(cursos, approvedCourse);
console.log(newData);
console.log('Cursos no aprobados: ');
const newData2 = coursesFilter(cursos, courseNotApprovedd);
console.log(newData2);