import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from '../models/characters';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(page: number){
    return this.http
    .get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }
}
