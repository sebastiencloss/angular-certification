import { Component, OnInit } from '@angular/core';
import { ZipCodesService } from "src/app/services/zip-codes/zip-codes.service";

@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.css']
})
export class ZipFormComponent implements OnInit {

  public newZipLocation: string = "";

  constructor(private zipCodesService: ZipCodesService) {
  }

  ngOnInit(): void {
  }

  /**
   * Add a zip from form
   */
  public addZipLocation(): void {
    if (this.newZipLocation) {
      this.zipCodesService.addZipToLocalStorage(this.newZipLocation);
      this.newZipLocation = "";
    }
  }
}
