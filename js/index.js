//Objetos
//La idea es ingresar varias materias y varias notas pero necesito resolver una manera para identificar a qué materia corresponde cada nota.

//Sugerencias Diego

const listaAlumnos = []

const crearAlumno = (nombre, apellido) => {
    const crearID();
    const nuevoAlumno = {
        id,nombre,apellido,materias:{}
    }

	listaAlumnos.push(nuevoAlumno)
}

/*const alumno1 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
}   

const alumno2 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
}  

const alumno3 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

const alumno4 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

const alumno5 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

//Array
const alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5]


//Pensé en que los valores de las notas sean 2, 4, 6, 7, 9 para probar todas las posibilidades.
for (alumno of alumnos) {
    alumno.nombre = prompt("Ingrese el nombre del alumno")
    alumno.apellido = prompt("Ingrese el apellido del alumno")
    alumno.materia = prompt("Ingrese la materia evaluada")
    alumno.nota = parseInt(prompt("Ingrese la nota asignada"))
}

function resultado(alumno) {
    
    while (isNaN(alumno.nota)) {
        alumno.nota = parseInt(prompt("Debe ingresar un dato válido."))
    }

    if ((alumno.nota <= 4)){
        alert("El alumno debe recursar la materia.")

    }
    
    else if ((alumno.nota > 4) && (alumno.nota < 7)){
        alert("El alumno debe recuperar la materia.")

    } else {
                alert("El alumno aprobó la materia.")
    }
}

resultado(alumno1)
resultado(alumno2)
resultado(alumno3)
resultado(alumno4)
resultado(alumno5)

//Métodos de array para saber cuántos alumnos fueron aprobados y cuántos alumnos fueron desaprobados
const aprobados = alumnos.filter((el) => el.nota >= 7)

console.log(aprobados)

const desaprobados = alumnos.filter((el) => el.nota < 7)

console.log(desaprobados)

//Quise usar el método reduce() para calcular el promedio con las notas sugeridas
const notas = [2, 4, 6, 7, 9];
const notasTotales = notas.reduce((acumulador, nota) => acumulador + nota, 0)

console.log(notasTotales)

let promedio = notasTotales / notas.length
console.log(promedio)
alert("La nota promedio de los alumnos en esta materia es: " + promedio)

//La nota más alta
alert("La nota más alta de este curso es: " + (Math.max(...notas)))

//La nota más baja
alert("La nota más baja de este curso es: " + (Math.min(...notas)))*/