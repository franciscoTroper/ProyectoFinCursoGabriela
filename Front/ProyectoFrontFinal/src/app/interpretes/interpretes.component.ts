import { Component, Input, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InterpreteService } from '../_servicio/interprete.service';
import { Cancion } from '../_modelo/cancion';
import { NgFor, NgIf } from '@angular/common';
import { ComunicacionService } from '../_servicio/comunicacion.service';

@Component({
  selector: 'app-interpretes',
  standalone: true,
  imports: [RouterModule,NgIf,NgFor],
  templateUrl: './interpretes.component.html',
  styleUrl: './interpretes.component.css'
})
export class InterpretesComponent implements OnInit {
  canciones:Cancion[]=[];
  @Input() nombre:string='';
  constructor(private servicioInterprete:InterpreteService,private comunicacion:ComunicacionService){}
  
  ngOnInit(): void {
    this.comunicacion.recargandoPagina$.subscribe(() => {
      this.reobtenerLasCanciones();
    });
    
  }
  reobtenerLasCanciones(){
    this.servicioInterprete.ObtenerCanciones(this.nombre).subscribe(data => {this.canciones = data;})
  }






}
