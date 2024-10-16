import { Component } from '@angular/core';
import { Genero } from '../_modelo/genero';
import { GeneroService } from '../_servicio/genero.service';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {
  genero: Genero = {
    idGenero=0,
    tipoGenero='';
  }

  constructor(private servicioGenero:GeneroService){}

  isdisableidGenero:boolean=false;
  isdisablenombreGenero:boolean=false;
  altasRadio=true;
  bajasRadio=false;
  modificarRadio=false;
  
  clickRadioAlta(){
    this.isdisableidGenero=false;
    this.isdisablenombreGenero=false;
    this.altasRadio=true;
    this.bajasRadio=false;
    this.modificarRadio=false;
    
  }
  clickRadioBajas(){
    this.isdisableidGenero=true;
    this.isdisablenombreGenero=true;
    this.altasRadio=false;
    this.bajasRadio=true;
    this.modificarRadio=false;
    
  }
  clickRadioModificiar(){
    this.isdisableidGenero=false;
    this.isdisablenombreGenero=false;
    this.altasRadio=false;
    this.bajasRadio=false;
    this.modificarRadio=true;
  }
  enviarGenero(){
    if (this.altasRadio) {
      this.servicioGenero.altaGenero(this.genero).subscribe(datastream=>{this.genero = datastream;});
    } 
    else if(this.modificarRadio) {
      this.servicioGenero.modificarGenero(this.genero).subscribe(datastream=>{this.genero = datastream;});
    }
  }
}
