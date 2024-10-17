import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private triggerFunctionSource = new Subject<void>();

  // Observable para que otros componentes se suscriban
  recargandoPagina$ = this.triggerFunctionSource.asObservable();

  // Método para notificar a otros componentes
  triggerFunction() {
    this.triggerFunctionSource.next();
  }
}
