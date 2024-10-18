import { Component, Input, OnInit } from '@angular/core';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { FormsModule } from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { GeneroService } from '../_servicio/genero.service';
import { Genero } from '../_modelo/genero';
import { Interprete } from '../_modelo/interprete';
import { InterpreteService } from '../_servicio/interprete.service';




@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent implements OnInit  {
  
  cancion: Cancion = {
    idCancion: 0,
    nombre: '',
    fechaCreacion: new Date(),
    duracion: 0,
    busquedas: 0,
    descargas: 0,
    genero: {
      idGenero: 0,
      tipoGenero: ''
    },
    interprete: 
    [ // Corrección: cambiamos `interprete` a `interprete`
      {
        idInterprete: 0,
        nombre: '',
        fechaCreacion: new Date(),
        paisOrigen: ''
      }
    ]
  };

  genero: Genero[] = [];
  interprete: Interprete[] = [];
  nuevoInterprete: Interprete = { idInterprete: -1, nombre: 'Nuevo Intérprete', fechaCreacion: new Date(), paisOrigen: '' };
  esNuevoInterprete: boolean = false;

  constructor(
    private servicioCancion: CancionService,
    private servicioGenero: GeneroService,
    private servicioInterpretes:InterpreteService
  ) {}

  ngOnInit(): void {
    this.servicioGenero.getTodos().subscribe(datastream => { this.genero = datastream; });
    this.servicioInterpretes.gettodos().subscribe(datastream => { this.interprete = datastream; });
  }

  isdisableidCancion: boolean = true;
  isdisablenombre: boolean = false;
  isdisablefechaCreacion: boolean = false;
  isdisableduracion: boolean = false;
  isdisabletipoGenero: boolean = false;
  isdisableTipoGenero: boolean = false;
  isdisablenombreInterprete: boolean = false;
  isdisablefechacreacionInterprete: boolean = false;
  isdisablepaisorigenInterprete: boolean = false;
  isdisabletipogenero: boolean = false;
  altasRadio: boolean = true;
  bajasRadio: boolean = false;
  modificarRadio: boolean = false;

  clickRadioAlta() {
    this.isdisableidCancion = true;
    this.isdisablenombre = false;
    this.isdisableduracion = false;
    this.isdisablefechaCreacion = false;
    this.altasRadio = true;
    this.bajasRadio = false;
    this.modificarRadio = false;
  }

  clickRadioBajas() {
    this.isdisableidCancion = false;
    this.isdisablenombre = true;
    this.isdisableduracion = true;
    this.isdisablefechaCreacion = true;
    this.altasRadio = false;
    this.bajasRadio = true;
    this.modificarRadio = false;
  }

  clickRadioModificiar() {
    this.isdisableidCancion = false;
    this.isdisablenombre = false;
    this.isdisableduracion = false;
    this.isdisablefechaCreacion = false;
    this.altasRadio = false;
    this.bajasRadio = false;
    this.modificarRadio = true;
  }

  enviarCancion() {
    if (this.altasRadio) {
      if(this.esNuevoInterprete){
        this.servicioInterpretes.altaInterprete(this.cancion.interprete[0]).subscribe(datastream=>{this.cancion.interprete[0]=datastream;})
      };
      setTimeout(()=>{ this.servicioCancion.altaCancion(this.cancion).subscribe(datastream => { this.cancion = datastream; });},2000)
     
    } else if (this.modificarRadio) {
      this.servicioCancion.modificarCancion(this.cancion).subscribe(datastream => { this.cancion = datastream; });
    } else if (this.bajasRadio) {
      this.servicioCancion.bajaCancion(this.cancion.idCancion).subscribe(datastream => { this.cancion = datastream; });
    }
  }

  actualizarGenero(generoSeleccionado: Genero) {
    this.cancion.genero = generoSeleccionado;
  }

  actualizarInterprete(interpreteeleccionado: Interprete) {
    if (interpreteeleccionado.idInterprete === -1) {
      this.esNuevoInterprete = true;
      this.cancion.interprete[0] = { idInterprete: 0, nombre: '', fechaCreacion: new Date(), paisOrigen: '' };
    } else {
      this.esNuevoInterprete = false;
      this.cancion.interprete[0] = interpreteeleccionado;
    }
  }
  
}
