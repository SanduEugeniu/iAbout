import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NavigationBarComponent} from './general/navigation-bar/navigation-bar.component';
import {FooterBarComponent} from './general/footer-bar/footer-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NotFoundComponent } from './general/not-found/not-found.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatTabsModule
  ],
  exports: [
    NavigationBarComponent,
    FooterBarComponent,

]
})
export class ComponentsModule { }
