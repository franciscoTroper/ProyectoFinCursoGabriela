import { Component, Input, OnInit } from '@angular/core';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { ComunicacionService } from '../_servicio/comunicacion.service';

@Component({
  selector: 'app-cancion-unica',
  standalone: true,
  imports: [],
  templateUrl: './cancion-unica.component.html',
  styleUrl: './cancion-unica.component.css'
})
export class CancionUnicaComponent {

@Input() nombreg:string='';
cancion:Cancion= {
  idCancion:0,
  nombre:'',
  duracion:0,      
  fechaCreacion:new Date(),
  busquedas:0,     
  descargas:0,   
  genero:{
    idGenero:0,
    tipoGenero:''
  }   

}
  constructor(private servicioCancion:CancionService, private comunicacion:ComunicacionService){}

  ngOnInit(): void {
    this.comunicacion.recargandoPagina$.subscribe(() => {
      this.reobtenerCanciones();
    });
  }
  reobtenerCanciones(){
    this.servicioCancion.ObtenerUnaCancion(this.nombreg).subscribe(datastream => {this.cancion = datastream;})
  }

}
