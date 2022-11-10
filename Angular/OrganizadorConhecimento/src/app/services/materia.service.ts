import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../modelos/modelo';
import { urlMateria } from './urls/url';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url = new urlMateria();
  constructor(private http: HttpClient) { }

  public getMateria(): Observable<Array<Materia>>{
    return this.http.get<Array<Materia>>(this.url.materia);
  }

  public cadastrarMateria(novaMateria: Materia) {
    this.http.post(this.url.materia, novaMateria).subscribe();
  }
}
