import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InterpreteService } from '../_servicio/interprete.service';
import { Cancion } from '../_modelo/cancion';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-interpretes',
  standalone: true,
  imports: [RouterModule,NgIf,NgFor],
  templateUrl: './interpretes.component.html',
  styleUrl: './interpretes.component.css'
})
export class InterpretesComponent implements OnInit {
  canciones:Cancion[]=[];
  constructor(private servicioInterprete:InterpreteService){}
  ngOnInit(): void {
    this.servicioInterprete.ObtenerCanciones("Oasis").subscribe(data => {this.canciones = data;})
  }





}
