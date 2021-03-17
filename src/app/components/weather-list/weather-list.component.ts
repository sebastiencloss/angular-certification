import { Component, OnDestroy, OnInit } from '@angular/core';
import { ZipCodesService } from "src/app/services/zip-codes/zip-codes.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnDestroy {

  public activeZipCodes: string[] = null;
  private zipCodesSubscriber: Subscription = null;

  constructor(private zipCodesService: ZipCodesService) {
  }

  ngOnInit(): void {
    this.zipCodesSubscriber = ZipCodesService.zipCodesSubject.subscribe((zipCodes: string[]) => {
      this.activeZipCodes = zipCodes;
    }, (error) => {
      console.error("error in zipCodesSubscriber");
    });
  }

  ngOnDestroy() {
    if (this.zipCodesSubscriber) {
      this.zipCodesSubscriber.unsubscribe();
      this.zipCodesSubscriber = null;
    }
  }

  /**
   * Delete one zip
   * @param zip
   */
  public deleteZipCode(zip: string): void {
    this.zipCodesService.removeZipCode(zip);
  }

}
