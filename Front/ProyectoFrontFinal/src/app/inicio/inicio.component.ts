import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MasDescargadasComponent } from "../mas-descargadas/mas-descargadas.component";
import { CancionesComponent } from "../canciones/canciones.component";
import { MasNuevasComponent } from '../masnuevas/masnuevas.component';
import { GenerosComponent } from "../generos/generos.component";


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MasDescargadasComponent, CancionesComponent, MasNuevasComponent, GenerosComponent],
  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  constructor(private ruter:Router){}
  ngOnInit(): void {
    
  }
  navegarmasNuevas(){
    this.ruter.navigate(['/masnuevas']);
  }
  navegarInterprete(){
    this.ruter.navigate(['/interpretes']);
  }
  
  

}
