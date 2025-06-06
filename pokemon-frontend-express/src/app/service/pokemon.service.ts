import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get(`/api/pokemon/${name}`);
  }
}
