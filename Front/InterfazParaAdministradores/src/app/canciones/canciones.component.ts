import { Component, Input } from '@angular/core';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { FormsModule } from '@angular/forms';
import { Genero } from '../_modelo/genero';


@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {
  
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
    }
  };

  
  constructor(private servicioCancion:CancionService){}
  
  
  isdisableidCancion:boolean=true;
  isdisablenombre:boolean=false;
  isdisablefechaCreacion:boolean=false;
  isdisableduracion:boolean=false

  altasRadio:boolean=true
  bajasRadio:boolean=false;
  modificarRadio:boolean=false;

  idCancionvalue:number=0;


  clickRadioAlta(){
    this.isdisableidCancion=true;
    this.isdisablenombre=false;
    this.isdisableduracion=false;
    this.isdisablefechaCreacion=false;
    this.altasRadio=true;
    this.bajasRadio=false;
    this.modificarRadio=false;
  }
  clickRadioBajas(){
    this.isdisableidCancion=false;
    this.isdisablenombre=true;
    this.isdisableduracion=true;
    this.isdisablefechaCreacion=true;
    this.altasRadio=false;
    this.bajasRadio=true;
    this.modificarRadio=false;
  }
  clickRadioModificiar(){
    this.isdisableidCancion=true;
    this.isdisablenombre=false;
    this.isdisableduracion=false;
    this.isdisablefechaCreacion=false;
    this.altasRadio=false;
    this.bajasRadio=false;
    this.modificarRadio=true;
  }

  enviargenero(){
    
    if (this.altasRadio) {
      this.servicioCancion.altaCancion(this.cancion).subscribe(datastream=>{this.cancion = datastream;});
    } 
    else if(this.modificarRadio) {
      this.servicioCancion.modificarCancion(this.cancion).subscribe(datastream=>{this.cancion = datastream;});
    }
    else if(this.bajasRadio){
      this.servicioCancion.bajaCancion(this.idCancionvalue).subscribe(datastream=>{this.cancion = datastream;});
    }
  }
}
