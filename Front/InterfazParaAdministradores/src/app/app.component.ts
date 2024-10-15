import { Component, Input, viewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InterfazParaAdministradores';
  constructor(private ruta:Router){}
  
 
  mostrarOpcionesCancion(){
    this.ruta.navigate(['/canciones'])
  }
  mostrarOpcionesGeneros(){
    this.ruta.navigate(['/generos'])
  }
  mostrarInterpretes(){
    this.ruta.navigate(['/interpretes'])
  }
 

}
