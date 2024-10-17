import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-error',
  standalone: true,
  imports: [],
  templateUrl: './pagina-error.component.html',
  styleUrl: './pagina-error.component.css'
})
export class PaginaErrorComponent {
constructor(private ruter:Router){}
  volverInicio(){
    this.ruter.navigate(['inicio']);  // Redirección al inicio del sitio
  }
}
