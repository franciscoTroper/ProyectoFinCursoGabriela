import { Component } from '@angular/core';


import { InicioComponent } from './inicio/inicio.component';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { PublicidadComponent } from "./publicidad/publicidad.component";
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MasNuevasComponent } from './masnuevas/masnuevas.component';
import { MasDescargadasComponent } from "./mas-descargadas/mas-descargadas.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, InicioComponent, CabeceroComponent,
    PublicidadComponent, PiePaginaComponent, RouterLink, MasNuevasComponent, MasDescargadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFrontFinal';
}
