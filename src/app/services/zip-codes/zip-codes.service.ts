import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZipCodesService {

  // could go into Environment
  private localStorageKey: string = "zip-codes";

  public availableZipCodes: string[] = [];
  public zipCodesSubject: Observable<string[]> = of(this.availableZipCodes);

  constructor() {
  }

  // todo getExistingValuesFromStorage ?

  /**
   * Add a zipcode into the array of zips in localStorage
   * @param zipCode
   */
  public addZipToLocalStorage(zipCode: string): void {
    if (window.localStorage) {
      let existingZipCodes: string[] = [];
      const rawData: string = window.localStorage.getItem(this.localStorageKey);
      if (rawData) {
        existingZipCodes = JSON.parse(rawData);
      }
      existingZipCodes.push(zipCode);
      this.availableZipCodes = existingZipCodes;
      window.localStorage.setItem(this.localStorageKey, JSON.stringify(existingZipCodes));
    } else {
      console.error("localstorage not supported");
    }
  }

  public resetZipCodes(): void {
    if (window.localStorage) {
      window.localStorage.setItem(this.localStorageKey, "");
      this.availableZipCodes = [];
    }
  }
}
