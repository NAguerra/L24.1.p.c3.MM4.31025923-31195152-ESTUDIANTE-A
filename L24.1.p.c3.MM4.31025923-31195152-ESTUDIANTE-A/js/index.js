let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantefil = []
    estudiantes.forEach((estudiante) => {
        if (estudiante.semestre == semestre) estudiantefil.push(estudiante);
    });
    return estudiantefil;
}

let estudiantes = [
    {nombre: "Juan", semestre: 1, nota: 15},
    {nombre: "Pedro", semestre: 2, nota: 10},
    {nombre: "Maria", semestre: 3, nota: 20},
    {nombre: "Luis", semestre: 4, nota: 13},
    {nombre: "Ana", semestre: 5, nota: 18},
]

let salida = document.getElementById("salida");
let primsem = estudiantesSemestre(estudiantes, 1);
let segsem = estudiantesSemestre(estudiantes, 2);
let tersem = estudiantesSemestre(estudiantes, 3);
let cuarsem = estudiantesSemestre(estudiantes, 4);
let quinsem = estudiantesSemestre(estudiantes, 5);
salida.innerHTML = "Estudiantes en primer semestre: <br>";
primsem.forEach((estudiante) =>{
    salida.innerHTML += `Nombre: ${estudiante.nombre} -  Semestre ${estudiante.semestre} - Nota: ${estudiante.nota}`
})
salida.innerHTML += "<br> Estudiantes en segundo semestre: <br>";
segsem.forEach((estudiante) =>{
    salida.innerHTML += `Nombre: ${estudiante.nombre} -  Semestre ${estudiante.semestre} - Nota: ${estudiante.nota}`
})
salida.innerHTML += "<br> Estudiantes en tercer semestre: <br>";
tersem.forEach((estudiante) =>{
    salida.innerHTML += `Nombre: ${estudiante.nombre} -  Semestre ${estudiante.semestre} - Nota: ${estudiante.nota}`
})
salida.innerHTML += "<br> Estudiantes en cuarto semestre: <br>";
cuarsem.forEach((estudiante) =>{
    salida.innerHTML += `Nombre: ${estudiante.nombre} -  Semestre ${estudiante.semestre} - Nota: ${estudiante.nota}`
})
salida.innerHTML += "<br> Estudiantes en quinto semestre: <br>";
quinsem.forEach((estudiante) =>{
    salida.innerHTML += `Nombre: ${estudiante.nombre} -  Semestre ${estudiante.semestre} - Nota: ${estudiante.nota}`
})


