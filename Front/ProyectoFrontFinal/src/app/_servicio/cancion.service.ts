import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs';
import { Cancion } from '../_modelo/cancion';
import { Genero } from '../_modelo/genero';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  @Input() nombreCancion='';
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
  ObtenerCancionesDesdeGenero(nombreGenero:string):Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.url+"/genero/nombre/"+ nombreGenero);
  }

  ObtenerUnaCancion(nombreCancion:string):Observable<Cancion[]>{
    // alert(this.url+"/nombre/"+nombreCancion);
    // return this.http.get<Cancion>(this.url+"/nombre/"+nombreCancion);
    return this.obtenerUno("/nombre/" + nombreCancion);
  }
  // hace más legible...
  private obtener(url:string):Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.url + url);
  }

  private obtenerUno(url:string):Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.url + url);
  }
}
