import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { ZipCodesService } from "src/app/services/zip-codes/zip-codes.service";
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherService } from "src/app/services/weather/weather.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent,
    HelloComponent,
    ZipFormComponent,
    WeatherListComponent,
    WeatherItemComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ZipCodesService,
    WeatherService
  ]
})
export class AppModule {
}
