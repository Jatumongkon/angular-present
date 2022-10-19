import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FirstRouteComponent,
    SecondRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
