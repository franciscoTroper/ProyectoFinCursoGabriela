import { Component, Input, OnInit, Output } from '@angular/core';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { ComunicacionService } from '../_servicio/comunicacion.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-cancion-unica',
  standalone: true,
  imports: [],
  templateUrl: './cancion-unica.component.html',
  styleUrl: './cancion-unica.component.css'
})
export class CancionUnicaComponent {


@Input() nombre='';

cancion:Cancion[]=[];

  constructor(private servicioCancion:CancionService, private comunicacion:ComunicacionService){}

  ngOnInit(): void {
    this.reobtenerCanciones();
    this.comunicacion.recargandoPagina$.subscribe(() => {
      this.reobtenerCanciones();
    });
    
  }
  reobtenerCanciones(){
    
    this.servicioCancion.ObtenerUnaCancion(this.nombre).subscribe(datastream => {this.cancion = datastream;})
    alert(this.nombre)
  }

}

