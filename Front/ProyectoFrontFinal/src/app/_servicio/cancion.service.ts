import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs';
import { Cancion } from '../_modelo/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/canciones`

  ObtenerCanciones():Observable<Cancion[]>{
    return this.obtener("");
  }

  ObtenerCancionesMasNuevas():Observable<Cancion[]>{
    return this.obtener("/masnuevas");
  }

  ObtenerCancionesMasDescargadas():Observable<Cancion[]>{
    return this.obtener("/masdescargadas");
  }

  // hace más legible...
  private obtener(url:string):Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.url + url);
  }
}
