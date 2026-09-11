class Animal {
    nombre
    raza
    especie
    edad
    constructor(nombre, raza, especie, edad) {
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }
    registrarNombre(nuevonombre) {
        this.nombre = nuevonombre
    }
    registrarRaza(nuevaRaza) {
        this.nombre = nuevaRaza
    }
    registrarRaza(nuevaEspecie) {
        this.nombre = nuevaEspecie
    }
    registrarRaza(nuevaEdad) {
        this.nombre = nuevaEdad
    }
    mostrarInformacion() {
        console.log(this.nombre + this.raza)
    }
}


class Propietario {
    nombrePropietario
    Direccion
    telefono
    constructor(nombre, direccion, telefono) {
        this.nombrePropietario=nombre
        this.direccion = direccion
        this.telefono = telefono
        this.mascota = []
    }
    registrarNombre(nuevoNombre) {
        this.nombrePropietario = nuevoNombre
    }

    resgistrarDireccion(nevaDirreccion) {
        this.direccion = nevaDirreccion
    }
    registrarTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono
    }
    resgistrarMascota(nuevamascota) {
        //pop, unshift, shift push
        this.mascota.push(nuevamascota)
    }
    mostrarInformacion(){
        console.log("mascota"+this.mascota[0].nombre+"Propietario"+this.nombrePropietario)
    }
}

let colmillo=new Animal("colmillo","pitbull","perro","12")
colmillo.mostrarInformacion()

let alexa=new Propietario("Alexa","123","1111")
alexa.resgistrarMascota(colmillo)
alexa.mostrarInformacion()