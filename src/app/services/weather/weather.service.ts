import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherModel } from "src/app/models/weather.model";
import { map } from "rxjs/operators";
import { WeatherForecastModel } from "src/app/models/weather-forecast.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // could go into environment
  private apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?zip={zipCode}&units=imperial&appid=5a4b2d457ecbef9eb2a71e480b947604";
  private apiUrlForecast:string = "http://api.openweathermap.org/data/2.5/forecast/daily?zip={zipCode}&cnt=5&units=imperial&appid=5a4b2d457ecbef9eb2a71e480b947604"

  constructor(private httpClient:HttpClient) {
  }

  /**
   * Call the api to get the weather-data.
   * @param zipCode
   */
  public getWeatherInfo(zipCode: string): Observable<WeatherModel> {
    if (!zipCode) {
      return;
    }

    const urlToCall = this.apiUrl.replace("{zipCode}", zipCode);
    return this.httpClient.get(urlToCall).pipe(map((result)=>{return result as WeatherModel}));
  }

  /**
   * Call the api to get the weather-forecast.
   * @param zipCode
   */
  public getWeatherForecastInfo(zipCode: string): Observable<WeatherForecastModel> {
    if (!zipCode) {
      return;
    }

    const urlToCall = this.apiUrlForecast.replace("{zipCode}", zipCode);
    return this.httpClient.get(urlToCall).pipe(map((result)=>{return result as WeatherForecastModel}));
  }
}
