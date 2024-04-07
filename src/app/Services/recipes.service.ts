import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _httpClient:HttpClient) { }

  getMeals():Observable<any>
  {

    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`);

  }
}
