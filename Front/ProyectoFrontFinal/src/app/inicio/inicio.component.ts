import { Component } from '@angular/core';
import { MasDescargadasComponent } from "../mas-descargadas/mas-descargadas.component";
import { CancionesComponent } from "../canciones/canciones.component";
import { MasNuevasComponent } from "../mas-nuevas/mas-nuevas.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MasDescargadasComponent, CancionesComponent, MasNuevasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
