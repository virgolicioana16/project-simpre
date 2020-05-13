import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICocktail } from 'src/app/feature-modules/cocktails/model/ICocktail';
import { backendUrl } from '../constants/constants';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/feature-modules/cocktails/model/api-response';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  searchCocktailByName(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${backendUrl.cocktailService.searchCocktailByName}${name}`);
  }

  searchCocktailByIngredient(ingredient: string) {

  }

  searchCocktailByFirstLetter(letter: string): Observable<ICocktail[]> {
    return this.http.get<ICocktail[]>(`${backendUrl.cocktailService.searchCocktailByFirstLetter}${letter}`);
  }

}
