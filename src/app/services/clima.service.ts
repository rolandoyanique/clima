import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='https://api.openweathermap.org/data/2.5/weather?appid=';
  key='c664eb56b6185cba4d74a3c74e801684';
  constructor(private httpClient:HttpClient) { }
  getClima(ciudad:string):Observable<any>{
    const URL=this.url+this.key+'&q='+ciudad;
    return this.httpClient.get(URL);
  }
}
