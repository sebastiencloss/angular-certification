import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.page.module").then(m => m.HomePageModule),
  },
  {
    path: "forecast/:zipCode",
    loadChildren: () => import("./pages/forecast/forecast.page.module").then(m => m.ForecastPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
