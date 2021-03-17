import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "src/app/services/weather/weather.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.css']
})
export class ForecastPage implements OnInit {

  public weatherData: any = null;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService) {
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
   * Get the weather forecast
   * todo: dataModell
   * @param zipCode
   * @private
   */
  private getWeatherForecast(zipCode: string): void {
    this.weatherService.getWeatherForecastInfo(zipCode).subscribe((weatherData: any) => {
      this.weatherData = weatherData;
    }, (error) => {
      console.error("error by getting weather-forecast for zipCode " + zipCode, error);
    });
  }

}
