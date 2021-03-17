import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForecastPage } from "src/app/pages/forecast/forecast.page";

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
  ],
  entryComponents: [
   ForecastPage
  ]
})
export class ForecastPageModule {}
