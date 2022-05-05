import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonFetchService {

  baseURL: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getPokemon(baseURL:string): Observable<any> {
    return this.http.get(baseURL);
  }

}
