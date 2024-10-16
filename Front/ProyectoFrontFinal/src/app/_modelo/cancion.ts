import { Genero } from "./genero";

export interface Cancion {
    idCancion:     number;
    nombre:        string;
    duracion:      number;
    fechaCreacion: Date;
    busquedas:     number;
    descargas:     number;
    genero:        Genero;
}

