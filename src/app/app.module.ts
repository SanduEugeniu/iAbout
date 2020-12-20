import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {SimplePagesModule} from './simple-pages/simple-pages.module';
import {DashboardModule} from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DashboardModule,
    SimplePagesModule,
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
