import { Genero } from "./genero";

export class Cancion {
    idCancion:     number;
    nombre:        string;
    fechaCreacion: Date;
    duracion:      number;
    busquedas:     number;
    descargas:     number;
    genero:        Genero;
    constructor(){
        this.idCancion=0;
        this.nombre='';
        this.fechaCreacion=new Date();
        this.duracion=0;
        this.busquedas=0;
        this.descargas=0;
        this.genero=new Genero();
    }
}
