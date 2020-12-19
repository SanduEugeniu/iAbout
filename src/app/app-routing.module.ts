import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tabs1Component} from './simple-pages/tabs1/tabs1.component';
import {LoginPageComponent} from './simple-pages/login-page/login-page.component';
import {HowDoWeWinTogetherComponent} from './simple-pages/how-do-we-win-together/how-do-we-win-together.component';
import {TermsAndConditionsComponent} from './simple-pages/terms-and-conditions/terms-and-conditions.component';
import {WhatDoYouNeedToKnowAboutUsComponent} from './simple-pages/what-do-you-need-to-know-about-us/what-do-you-need-to-know-about-us.component';
import {RegPagComponent} from './simple-pages/reg-pag/reg-pag.component';
import {NotFoundComponent} from './components/general/not-found/not-found.component';




const routes: Routes = [
  {path: '', component: Tabs1Component},
  {path: 'loggingIn', component: LoginPageComponent},
  {path: 'registration', component: RegPagComponent},
  {path: 'how-do-we-win-togetherx', component: HowDoWeWinTogetherComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'what-do-you-need-to-know-about-us', component: WhatDoYouNeedToKnowAboutUsComponent},
  // Not Found
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
