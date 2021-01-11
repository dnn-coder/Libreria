//Una versión conveniente de lo que quizás sea el caso de uso más común para map: extraer una lista de valores de propiedad.
// En el siguiente ejemplo se desea extraer solo el nombre de los estudiantes 

const estudiantes = [{
        id: 1,
        nombre: 'danny',
        edad: 30,
    },
    {
        id: 2,
        nombre: 'juan',
        edad: 20,
    },
    {
        id: 3,
        nombre: 'carlos',
        edad: 35,
    },
    {
        id: 3,
        nombre: 'camila',
        edad: 28,
    }
];

let result = estudiantes.pluck(estudiantes, 'nombre');
console.log(result);