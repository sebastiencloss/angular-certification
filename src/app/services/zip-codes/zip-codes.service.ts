import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

/**
 * Unique source for activeZipCodes
 * Could be better with Ngxs-States
 */
export class ZipCodesService {

  // could go into Environment
  private localStorageKey: string = "zip-codes";

  static zipCodesSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {
  }


  /**
   * Add a zipcode into the array of zips in localStorage
   * We read it from localstorage, as local variables can be empty (if multiple instances of this service)
   * and we don't want to read localstorage on each init of each instances
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
      ZipCodesService.zipCodesSubject.next(existingZipCodes);
      window.localStorage.setItem(this.localStorageKey, JSON.stringify(existingZipCodes));
    } else {
      console.error("localstorage not supported");
    }
  }

  /**
   * Reset the zipCodes of localStorage
   */
  public resetZipCodes(): void {
    if (window.localStorage) {
      window.localStorage.setItem(this.localStorageKey, "");
      ZipCodesService.zipCodesSubject.next([]);
    }
  }

  /**
   * Remove one zipCode from localStorage
   * @param zipToRemove
   */
  public removeZipCode(zipToRemove: string): void {
    if (window.localStorage) {
      let existingZipCodes: string[] = [];
      const rawData: string = window.localStorage.getItem(this.localStorageKey);
      if (rawData) {
        existingZipCodes = JSON.parse(rawData);
        const indexToRemove = existingZipCodes.indexOf(zipToRemove);
        if (indexToRemove > -1) {
          existingZipCodes.splice(indexToRemove, 1);
        }
      }
      ZipCodesService.zipCodesSubject.next(existingZipCodes);
      window.localStorage.setItem(this.localStorageKey, JSON.stringify(existingZipCodes));
    }
  }
}
