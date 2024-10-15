<<<<<<< HEAD
import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


=======
import { Component } from '@angular/core';
import { MasDescargadasComponent } from "../mas-descargadas/mas-descargadas.component";
import { CancionesComponent } from "../canciones/canciones.component";
import { MasNuevasComponent } from "../mas-nuevas/mas-nuevas.component";
>>>>>>> 8d73054d3c9f37822f69a9ab8bc5f044e5431329

@Component({
  selector: 'app-inicio',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,RouterModule],
=======
  imports: [MasDescargadasComponent, CancionesComponent, MasNuevasComponent],
>>>>>>> 8d73054d3c9f37822f69a9ab8bc5f044e5431329
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
