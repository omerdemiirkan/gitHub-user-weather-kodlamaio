import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getUserSearch(val:string):Observable<Weather>{
   const  apiUrl= 'http://api.weatherstack.com/current?access_key=d0cf22007e01209afdf1dcea01c4b896&query=';
    return this.httpClient.get<Weather>(`${apiUrl}${val}`)
    
  }
   
}
