import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMealResponse } from 'src/app/feature-modules/meals/model/imeal-response';
import { backendUrl } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  searchMealByName(name: string): Observable<IMealResponse> {
    return this.http.get<IMealResponse>(`${backendUrl.mealsServie.searchMealByName}${name}`);
  }

}
