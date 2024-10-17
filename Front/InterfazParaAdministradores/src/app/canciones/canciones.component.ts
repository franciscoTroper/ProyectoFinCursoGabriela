import { Component, Input } from '@angular/core';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { FormsModule } from '@angular/forms';



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
  };

  
 
  constructor(private servicioCancion:CancionService){
  }

  
  isdisableidCancion:boolean=true;
  isdisablenombre:boolean=false;
  isdisablefechaCreacion:boolean=false;
  isdisableduracion:boolean=false;
  isdisabletipoGenero:boolean=false;
  altasRadio:boolean=true
  bajasRadio:boolean=false;
  modificarRadio:boolean=false;
  

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
    this.isdisableidCancion=false;
    this.isdisablenombre=false;
    this.isdisableduracion=false;
    this.isdisablefechaCreacion=false;
    this.altasRadio=false;
    this.bajasRadio=false;
    this.modificarRadio=true;
  }

  enviarCancion(){
    
    if (this.altasRadio) {
      this.servicioCancion.altaCancion(this.cancion).subscribe(datastream=>{this.cancion = datastream;});
    } 
    else if(this.modificarRadio) {
      this.servicioCancion.modificarCancion(this.cancion).subscribe(datastream=>{this.cancion = datastream;});
    }
    else if(this.bajasRadio){
      this.servicioCancion.bajaCancion(this.cancion.idCancion).subscribe(datastream=>{this.cancion = datastream;});
    }
  }
  
}
