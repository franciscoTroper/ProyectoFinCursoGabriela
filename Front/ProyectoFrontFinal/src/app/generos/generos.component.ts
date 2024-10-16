import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CancionService } from '../_servicio/cancion.service';
import { Cancion } from '../_modelo/cancion';


@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [RouterModule,NgIf,NgFor],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent implements OnInit{
  canciones:Cancion[]=[];
  constructor(private cancionservicio:CancionService){}
  ngOnInit(): void {
    this.cancionservicio.ObtenerCancionesDesdeGenero("rock").subscribe(datastream => {this.canciones=datastream})
  }
  
}