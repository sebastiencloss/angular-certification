import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    loadChildren: () => import("./pages/home/home.page.module").then(m => m.HomePageModule),
  },
  {
    path: "forecast",
    loadChildren: () => import("./pages/forecast/forecast.page.module").then(m => m.ForecastPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
