<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
=======
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cancion } from '../_modelo/cancion';
import { CancionService } from '../_servicio/cancion.service';
>>>>>>> 8d73054d3c9f37822f69a9ab8bc5f044e5431329

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent  {
  

  

  canciones:Cancion[]=[];
  constructor(private cancionService:CancionService){}
  

  ngOnInit(): void {
    this.cancionService.ObtenerCanciones().subscribe(datastream => {this.canciones = datastream;})
  }

}
