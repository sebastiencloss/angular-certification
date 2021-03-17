import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipCodesService } from "src/app/services/zip-codes/zip-codes.service";
import { WeatherService } from "src/app/services/weather/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent,

  ],
  bootstrap: [AppComponent],
  providers: [
    ZipCodesService,
    WeatherService
  ]
})
export class AppModule {
}
