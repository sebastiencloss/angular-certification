import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForecastPage } from "src/app/pages/forecast/forecast.page";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: ForecastPage
  },
  // todo: param works only with routerLink. not with [href], not by refresh or just url... ????
  {
    path: ":zipCode",
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
