import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "src/app/services/weather/weather.service";
import { WeatherForecastModel } from "src/app/models/weather-forecast.model";
import { Location } from '@angular/common'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.css']
})
export class ForecastPage implements OnInit {

  public weatherData: WeatherForecastModel = null;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private location: Location) {
  }

  ngOnInit(): void {
    const zipCode = this.route.snapshot.paramMap.get('zipCode');
    if (zipCode) {
      this.getWeatherForecast(zipCode);
    } else {
      // default: sebastopol ca :)
      this.getWeatherForecast("95472");
    }
  }

  /**
   * Go to previous page... angular way
   */
  public goBack(): void {
    this.location.back();
  }

  /**
   * Get the weather forecast
   * @param zipCode
   * @private
   */
  private getWeatherForecast(zipCode: string): void {
    this.weatherService.getWeatherForecastInfo(zipCode).subscribe((weatherData: WeatherForecastModel) => {
      this.weatherData = weatherData;
    }, (error) => {
      console.error("error by getting weather-forecast for zipCode " + zipCode, error);
    });
  }

}
