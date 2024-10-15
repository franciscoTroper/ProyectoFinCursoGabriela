import { Component, OnInit, } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
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
