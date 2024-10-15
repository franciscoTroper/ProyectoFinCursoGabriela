import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs';
import { Cancion } from '../_modelo/cancion';

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/interpretes`

  ObtenerCanciones(nombreInterprete:string):Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.url+"/canciones/"+nombreInterprete);
  }
}
