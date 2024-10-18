import { Genero } from "./genero";
import { Interprete } from "./interprete";


export interface Cancion {
    idCancion:     number;
    nombre:        string;
    fechaCreacion: Date;
    duracion:      number;
    busquedas:     number;
    descargas:     number; 
    genero:        Genero;
    interprete:    Interprete[];
}
