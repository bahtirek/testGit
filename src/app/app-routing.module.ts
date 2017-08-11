import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./components/index";


const routes: Routes = [
  {path: '', redirectTo: "sample1", pathMatch: "full"},
  {path: "sample1", component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
