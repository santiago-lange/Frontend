export class user {
    id?: number;
    nombre: String;
    apellido: String;

    constructor(nombre: String,apellido: String){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}