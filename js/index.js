/*DECIDÍ CAMBIAR DE ENFOQUE PARA EL PROYECTO FINAL, YA QUE TRATAR DE VINCULARLO CON MI PROYECTO
FINAL DEL CURSO DE DESARROLLO WEB LO VEÍA MUY IMPROBABLE.
SI ESTÁS DE ACUERDO, PARA LA PRÓXIMA ENTREGA BORRO ESTA PARTE DEL CÓDIGO.

class Client {
    constructor (nombreCliente, apellidoCliente, ciudad, provincia, fechaNacimiento, edad){
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }
}

const client1 = new Client ("Carla", "Perez", "Berisso", "Bs As", "17/10/1988");
const client2 = new Client ("Pedro", "Lopez", "La Lucila", "Bs As", "13/04/2010");

client1.edad = parseInt(prompt("Ingrese su edad"))
client2.edad = parseInt(prompt("Ingrese su edad"))


function mayorEdad(client) {
    
    while (client.edad === 0) {
        client.edad = parseInt(prompt("Ingrese una edad válida"))
    }

    if (client.edad < 18) {
        alert("Atención " + client.nombreCliente + ": debes ser mayor de edad para realizar una compra.")
    } else {
        alert("Bienvenido/a " + client.nombreCliente + " ya puedes comprar en nuestra página.")
    }
}

mayorEdad(client1)
mayorEdad(client2)*/

//Este nueva entrega está enfocada a un gestor de notas y asistencias (próximamente) de sus alumnos para que manipule un profesor.

//Objetos
//La idea es ingresar varias materias y varias notas pero necesito resolver una manera para identificar a qué materia corresponde cada nota.

const student1 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
}   

const student2 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
}  

const student3 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

const student4 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

const student5 = {
    nombre: "",
    apellido: "",
    materia: "",
    nota: 0,
} 

//Array
const students = [student1, student2, student3, student4, student5]


//Pensé en que los valores de las notas sean 2, 4, 6, 7, 9 para probar todas las posibilidades.
for (student of students) {
    student.nombre = prompt("Ingrese el nombre del alumno")
    student.apellido = prompt("Ingrese el apellido del alumno")
    student.materia = prompt("Ingrese la materia evaluada")
    student.nota = parseInt(prompt("Ingrese la nota asignada"))
}

function resultado(student) {
    
    while (isNaN(student.nota)) {
        student.nota = parseInt(prompt("Debe ingresar un dato válido."))
    }

    if ((student.nota <= 4)){
        alert("El alumno debe recursar la materia.")

    }
    
    else if ((student.nota > 4) && (student.nota < 7)){
        alert("El alumno debe recuperar la materia.")

    } else {
                alert("El alumno aprobó la materia.")
    }
}

resultado(student1)
resultado(student2)
resultado(student3)
resultado(student4)
resultado(student5)

//Métodos de array para saber cuántos alumnos fueron aprobados y cuántos alumnos fueron desaprobados
const aprobados = students.filter((el) => el.nota >= 7)

console.log(aprobados)

const desaprobados = students.filter((el) => el.nota < 7)

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
alert("La nota más baja de este curso es: " + (Math.min(...notas)))