import { Component } from '@angular/core';
import { ZipCodesService } from "src/app/services/zip-codes/zip-codes.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private zipCodesService: ZipCodesService) {
    this.zipCodesService.resetZipCodes();
  }
}
