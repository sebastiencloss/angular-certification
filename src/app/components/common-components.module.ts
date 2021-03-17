import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WeatherItemComponent } from "src/app/components/weather-item/weather-item.component";
import { WeatherListComponent } from "src/app/components/weather-list/weather-list.component";
import { ZipFormComponent } from "src/app/components/zip-form/zip-form.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    WeatherItemComponent,
    WeatherListComponent,
    ZipFormComponent
  ],
  exports: [
    WeatherItemComponent,
    WeatherListComponent,
    ZipFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ]
})
export class CommonComponentsModule {
}
