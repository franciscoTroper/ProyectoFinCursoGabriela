import { Component, Input } from '@angular/core';
import { InterpreteService } from '../_servicio/interprete.service';
import { Interprete } from '../_modelo/interprete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpretes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interpretes.component.html',
  styleUrl: './interpretes.component.css'
})
export class InterpretesComponent {
  
  interprete: Interprete={
         idInterprete: 0,
         nombre: '',
         fechaCreacion : new Date(),
         paisOrigen: ''
      
  };


  
  constructor(private servicioInterprete:InterpreteService){}

  isdisableidInterprete:boolean=false;
  isdisablenombre:boolean=false;
  isdisablefechaCreacion:boolean=false;
  isdisablepais:boolean=false

  altasRadio:boolean=true
  bajasRadio:boolean=false;
  modificarRadio:boolean=false;

  clickRadioAlta(){
    this.isdisableidInterprete=true;
    this.isdisablenombre=false;
    this.isdisablepais=false;
    this.isdisablefechaCreacion=false;
    this.altasRadio=true;
    this.bajasRadio=false;
    this.modificarRadio=false;
  }
  clickRadioBajas(){
    this.isdisableidInterprete=true;
    this.isdisablenombre=true;
    this.isdisablepais=true;
    this.isdisablefechaCreacion=true;
    this.altasRadio=false;
    this.bajasRadio=true;
    this.modificarRadio=false;
  }
  clickRadioModificiar(){
    this.isdisableidInterprete=false;
    this.isdisablenombre=false;
    this.isdisablepais=false;
    this.isdisablefechaCreacion=false;
    this.altasRadio=false;
    this.bajasRadio=false;
    this.modificarRadio=true;
  }
  enviarInterPrete(){
    
    if (this.altasRadio) {
      this.servicioInterprete.altaInterprete(this.interprete).subscribe(datastream=>{this.interprete = datastream;});
    } 
    else if(this.modificarRadio) {
      this.servicioInterprete.modificarInterprete(this.interprete).subscribe(datastream=>{this.interprete = datastream;});
    }
  }
  
}
