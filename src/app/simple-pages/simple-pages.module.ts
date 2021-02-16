import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { Tabs1Component } from './Table-on-the-main-page/tabs1.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HowDoWeWinTogetherComponent } from './how-do-we-win-together/how-do-we-win-together.component';
import { WhatDoYouNeedToKnowAboutUsComponent } from './what-do-you-need-to-know-about-us/what-do-you-need-to-know-about-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { LabelTop10PostsComponent } from './Table-on-the-main-page/top-10-posts/label-top10-posts.component';
import { LabelTop10CategoriesComponent } from './Table-on-the-main-page/label-top10-categories/label-top10-categories.component';
import { LabelTop10authorsComponent } from './Table-on-the-main-page/label-top10authors/label-top10authors.component';
import { LabelRecommendationaComponent } from './Table-on-the-main-page/label-recommendationa/label-recommendationa.component';
import { LabelHelpComponent } from './Table-on-the-main-page/label-help/label-help.component';
import { LabelNewAuthorsComponent } from './Table-on-the-main-page/label-new-authors/label-new-authors.component';
import { LabelTheLatestPostsComponent } from './Table-on-the-main-page/label-the-latest-posts/label-the-latest-posts.component';
import {ComponentsModule} from '../components/components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {DialogElementsExampleDialog, RegPagComponent} from './reg-pag/reg-pag.component';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NavigationBarComponent} from '../components/general/navigation-bar/navigation-bar.component';
import { ConfirmMailComponent } from './reg-pag/confirm-mail/confirm-mail.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { CategoriesComponent } from './Table-on-the-main-page/categories/categories.component';
import {AdsenseModule} from 'ng2-adsense';
import { QuillModule } from 'ngx-quill';
import {AddPostPageComponent} from '../dashboard/add-post-page/add-post-page.component';
import {AppModule} from '../app.module';


@NgModule({
  declarations: [
    Tabs1Component,
    LoginPageComponent,
    HowDoWeWinTogetherComponent,
    WhatDoYouNeedToKnowAboutUsComponent,
    TermsAndConditionsComponent,
    LabelTop10PostsComponent,
    LabelTop10CategoriesComponent,
    LabelTop10authorsComponent,
    LabelRecommendationaComponent,
    LabelTheLatestPostsComponent,
    LabelNewAuthorsComponent,
    LabelHelpComponent,
    RegPagComponent,
    DialogElementsExampleDialog,
    ConfirmMailComponent,
    CategoriesComponent,
    AddPostPageComponent,
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatIconModule,
    // ComponentsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    ReactiveFormsModule,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    QuillModule.forRoot(),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2007794520884869',
      adSlot: 8364724526,
    }),

  ],
  providers: [
    NavigationBarComponent
  ],

  exports: [
    QuillModule,
    Tabs1Component,
    LoginPageComponent,
    HowDoWeWinTogetherComponent,
    WhatDoYouNeedToKnowAboutUsComponent,
    TermsAndConditionsComponent,
    LabelTop10PostsComponent,
    LabelTop10CategoriesComponent,
    LabelTop10authorsComponent,
    LabelRecommendationaComponent,
    LabelTheLatestPostsComponent,
    LabelNewAuthorsComponent,
    LabelHelpComponent,
    CategoriesComponent,


  ]
})
export class SimplePagesModule { }
