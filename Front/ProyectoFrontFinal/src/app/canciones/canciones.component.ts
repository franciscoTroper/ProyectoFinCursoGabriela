import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cancion } from '../_modelo/cancion';
import { CancionService } from '../_servicio/cancion.service';
import { ComunicacionService } from '../_servicio/comunicacion.service';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent  {
  
  canciones:Cancion[]=[];
  constructor(private cancionService:CancionService,private comunicacion:ComunicacionService){}
  
  ngOnInit(): void {
    this.reobtenerCanciones()
    this.comunicacion.recargandoPagina$.subscribe(()=>{
      this.reobtenerCanciones()
    }) 
  }
  reobtenerCanciones(){
    this.cancionService.ObtenerCanciones().subscribe(datastream=>{this.canciones=datastream})
  }
}
