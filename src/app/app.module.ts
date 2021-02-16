import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
// import { PostComponent } from './post/post.component';
// import {PostModule} from './post/post.module';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AdsenseModule } from 'ng2-adsense';
import { PostPageComponent } from './post-page/post-page.component';
import {MatCardModule} from '@angular/material/card';
import { ComentComponent } from './post-page/coment/coment.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { QuillModule } from 'ngx-quill';
import { NotAuthComponent } from './common/_notAuthPage/not-auth/not-auth.component';
import {SimplePagesModule} from './simple-pages/simple-pages.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { CastNgIfForBntComponentDirective } from './common/castNgIf/cast-ng-if-for-bnt-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllCategoriesComponent,
    PostPageComponent,
    ComentComponent,
    NotAuthComponent,
    CastNgIfForBntComponentDirective,
  ],
  imports: [
    // PostModule,
    DashboardModule,
    SimplePagesModule,
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2075992240344220',
      adSlot: 8364724526,
    }),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  exports: [
    CastNgIfForBntComponentDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
