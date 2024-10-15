import { Component, OnInit } from '@angular/core';
import { Cancion } from '../_modelo/cancion';
import { CancionService } from '../_servicio/cancion.service';

@Component({
  selector: 'app-mas-descargadas',
  standalone: true,
  imports: [],
  templateUrl: './mas-descargadas.component.html',
  styleUrl: './mas-descargadas.component.css'
})
export class MasDescargadasComponent implements OnInit{

  canciones:Cancion[]=[];
  constructor(private cancionService:CancionService){}
  

  ngOnInit(): void {
    this.cancionService.ObtenerCancionesMasDescargadas().subscribe(datastream => {this.canciones = datastream;})
  }

}
