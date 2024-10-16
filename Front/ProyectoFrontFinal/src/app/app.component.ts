import { Component } from '@angular/core';


import { InicioComponent } from './inicio/inicio.component';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { PublicidadComponent } from "./publicidad/publicidad.component";
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, InicioComponent, CabeceroComponent, PublicidadComponent, PiePaginaComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFrontFinal';
}
