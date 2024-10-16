import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasDescargadasComponent } from "../mas-descargadas/mas-descargadas.component";
import { MasNuevasComponent } from "../masnuevas/masnuevas.component";
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, MasDescargadasComponent, MasNuevasComponent, PiePaginaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
