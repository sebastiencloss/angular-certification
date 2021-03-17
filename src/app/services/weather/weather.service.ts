import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherModel } from "src/app/models/weather.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // could go into environment
  private apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?zip={zipCode}&appid=5a4b2d457ecbef9eb2a71e480b947604";

  constructor(private httpClient:HttpClient) {
  }

  /**
   * Call the api to get the weather-data. Should return a Observable<> of a real TS DataModel, but don't have one so <any>
   * @param zipCode
   */
  public getWeatherInfo(zipCode: string): Observable<WeatherModel> {
    if (!zipCode) {
      return;
    }

    const urlToCall = this.apiUrl.replace("{zipCode}", zipCode);
    return this.httpClient.get(urlToCall).pipe(map((result)=>{return result as WeatherModel}));
  }
}
