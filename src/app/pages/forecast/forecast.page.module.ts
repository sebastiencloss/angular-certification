import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForecastPage } from "src/app/pages/forecast/forecast.page";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: ForecastPage
  }
];
@NgModule({
  declarations: [
   ForecastPage
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  entryComponents: [
   ForecastPage
  ]
})
export class ForecastPageModule {}
