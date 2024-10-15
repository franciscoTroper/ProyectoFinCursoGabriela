import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs';
import { Genero } from '../_modelo/genero';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/generos`

  
}
