import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Cancion } from '../_modelo/cancion';
import { Observable } from 'rxjs';
import { Genero } from '../_modelo/genero';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/canciones`;

  altaCancion(cancion:Cancion):Observable<Cancion>{
    return this.http.post<Cancion>(this.url,cancion);
  }
  modificarCancion(cancion:Cancion):Observable<Cancion>{
    return this.http.put<Cancion>(this.url,cancion);
  }
  bajaCancion(idCancion:number):Observable<Cancion>{
    return this.http.delete<Cancion>(`${this.url}/${idCancion}`);
  }
}
