import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from "src/app/services/weather/weather.service";
import { WeatherModel } from "src/app/models/weather.model";

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() zipCode: string = null;
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  public weatherData: WeatherModel = null;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    if (this.zipCode) {
      this.weatherService.getWeatherInfo(this.zipCode).subscribe((weatherData: WeatherModel) => {
        this.weatherData = weatherData;
      }, (error) => {
        console.error("error by getting weather data for zipCode " + this.zipCode, error);
      });
    }
  }

  /**
   * Delete the item
   */
  public deleteItem(): void {
    this.deleted.emit(this.zipCode);
  }
}
