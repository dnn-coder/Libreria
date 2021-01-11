//El método find () devuelve el valor del primer elemento de la matriz que pasa una función de prueba.
//En el siguiente ejemplo quertemos encontrar una materia dada y queremos con el metodo find() encontrar esa materia, en el ejemplo se dejan todas las materias que alcanza a rrecorrer.
const materias = ['Javascript', 'Git', 'HTML', 'CSS', 'Java', 'PHP', 'Python', 'SQL', 'C#'];
const found = materias.find(materia => {
    console.log(materia);
    return materia === 'PHP';
});