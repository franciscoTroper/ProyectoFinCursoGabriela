import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entorno } from '../_entorno/entorno';
import { Observable } from 'rxjs';
import { Interprete } from '../_modelo/interprete';

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  constructor(private http:HttpClient) { }
  private url:string=`${entorno.HOST}/interpretes`;

  altaInterprete(interpete:Interprete):Observable<Interprete>{
    return this.http.post<Interprete>(this.url,interpete);
  }
  modificarInterprete(interpete:Interprete):Observable<Interprete>{
    return this.http.put<Interprete>(this.url,interpete);
  }
  gettodos():Observable<Interprete[]>{
    return this.http.get<Interprete[]>(this.url);
  }
}
