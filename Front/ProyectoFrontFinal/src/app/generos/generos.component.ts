import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';
import { ComunicacionService } from '../_servicio/comunicacion.service';


@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [RouterModule,NgIf,NgFor],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent implements OnInit{
  canciones:Cancion[]=[];
  @Input() nombre:string='';
  constructor(private cancionservicio:CancionService, private comunicacion:ComunicacionService){}

  ngOnInit(): void {
    this.reobtenerCanciones();
    this.comunicacion.recargandoPagina$.subscribe(() => {
      this.reobtenerCanciones();
    });
    
  }
  reobtenerCanciones(){
    this.cancionservicio.ObtenerCancionesDesdeGenero(this.nombre).subscribe(datastream => {this.canciones=datastream})
  }
  
}