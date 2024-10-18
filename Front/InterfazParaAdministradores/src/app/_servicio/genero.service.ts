import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Interprete } from '../_modelo/interprete';
import { Observable } from 'rxjs';
import { Genero } from '../_modelo/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/generos`;

  altaGenero(genero:Genero):Observable<Genero>{
    return this.http.post<Genero>(this.url,genero);
  }
  modificarGenero(genero:Genero):Observable<Genero>{
    return this.http.put<Genero>(this.url,genero);
  }
  getTodos():Observable<Genero[]>
  {
    return this.http.get<Genero[]>(this.url);
  }
}
