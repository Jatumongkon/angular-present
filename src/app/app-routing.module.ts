import { FirstRouteComponent } from './first-route/first-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRouteComponent } from './second-route/second-route.component';

const routes: Routes = [
    {path: 'first' , component:FirstRouteComponent},
    {path: 'second' , component:SecondRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
