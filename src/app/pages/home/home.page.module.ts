import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "src/app/pages/home/home.page";
import { CommonComponentsModule } from "src/app/components/common-components.module";

const routes: Routes = [
  {
    path: "",
    component: HomePage
  }
];
@NgModule({
  declarations: [
   HomePage
  ],
  imports: [
    // we could import components here instead of app.module...
    RouterModule.forChild(routes),
    CommonComponentsModule,
  ],
  entryComponents: [
   HomePage
  ]
})
export class HomePageModule {}
