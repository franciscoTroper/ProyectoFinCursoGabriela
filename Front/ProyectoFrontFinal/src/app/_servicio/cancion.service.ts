import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs/internal/Observable';
import { Cancion } from '../_modelo/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/canciones`

  ObtenerCancionesMasNuevas():Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.url+"/masnuevas");
  }
}
