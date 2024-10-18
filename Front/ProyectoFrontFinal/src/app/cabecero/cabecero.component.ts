import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ComunicacionService } from '../_servicio/comunicacion.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent{
  searchQuery: string = '';
  constructor(private ruter:Router,private communicationService: ComunicacionService){
    }
    
  
  
  onSearch() {
    console.log('Buscando:', this.searchQuery);
    // Aquí puedes añadir la lógica para manejar la búsqueda
  }

  textobusqueda:string="";
  boolCancion:boolean=true;
  boolInterprete:boolean=false
  boolGenero:boolean=false
  
  clickBusqueda(){
    
    if(this.boolCancion){
      //this.communicationService.recargandoPagina.next(true);  // para que los componentes recarguen sus datos
      
      this.ruter.navigate(['/cancionUnica',this.textobusqueda]);
      this.communicationService.triggerFunction();
      
    }
    else if(this.boolInterprete){   
      this.ruter.navigate(['/interpretes',this.textobusqueda]);
      this.communicationService.triggerFunction();
       
    }
    else if(this.boolGenero){
      this.ruter.navigate(['/generos',this.textobusqueda]);
      this.communicationService.triggerFunction();
       
    }  
}
clickCancion(){
  //this.textobusqueda='cancion';
  this.boolCancion=true;
  this.boolInterprete=false;
  this.boolGenero=false; 
}
clickInterprete(){
  //this.textobusqueda='interprete';
  this.boolCancion=false;
  this.boolInterprete=true;
  this.boolGenero=false;
}
clickGenero(){
  //this.textobusqueda='genero';
  this.boolCancion=false;
  this.boolInterprete=false;
  this.boolGenero=true;
}
}
