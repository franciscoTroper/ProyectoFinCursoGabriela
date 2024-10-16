import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
  searchQuery: string = '';

  onSearch() {
    console.log('Buscando:', this.searchQuery);
    // Aquí puedes añadir la lógica para manejar la búsqueda
  }

}
