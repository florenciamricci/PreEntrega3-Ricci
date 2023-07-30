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
mayorEdad(client2)



