import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _httpClient:HttpClient) { }

  private _URL='Data/data.json';

  public getCourseNames(): Observable<any>{
  
   return this._httpClient.get<any>(`${this._URL}`)
  }


}
