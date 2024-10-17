import { Component, OnInit } from '@angular/core';
import { Cancion } from '../_modelo/cancion';
import { CancionService } from '../_servicio/cancion.service';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-mas-descargadas',
  standalone: true,
  imports: [PiePaginaComponent],
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
