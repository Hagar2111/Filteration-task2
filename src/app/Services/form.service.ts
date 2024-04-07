import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _HttpClient:HttpClient) { }

  submitApplication(formData:any):Observable<any>
  {
    return this._HttpClient.post('http://upskilling-egypt.com:3001/contact', formData);
  }

}
