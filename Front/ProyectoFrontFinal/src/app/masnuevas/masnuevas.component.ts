import { Component, OnInit } from '@angular/core';
import { Cancion } from '../_modelo/cancion';
import { CancionService } from '../_servicio/cancion.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-masnuevas',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf, NgFor, PiePaginaComponent],
  templateUrl: './masnuevas.component.html',
  styleUrl: './masnuevas.component.css'
})
export class MasNuevasComponent implements OnInit
{
  canciones:Cancion[]=[];
  constructor(private cancionService:CancionService){}
  
  ngOnInit(): void {
    this.cancionService.ObtenerCancionesMasNuevas().subscribe(data => {this.canciones = data;})
  }
  
}
 


