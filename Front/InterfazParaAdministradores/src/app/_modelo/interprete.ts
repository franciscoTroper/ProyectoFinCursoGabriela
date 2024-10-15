export class Interprete {
  idInterprete: number;
  nombre: string;
  fechaCreacion: Date;
  paisOrigen: string;

  constructor() {
    this.idInterprete = 0;
    this.nombre = '';
    this.fechaCreacion = new Date();
    this.paisOrigen = '';
  }
}

