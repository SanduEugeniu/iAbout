import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tabs1Component} from './simple-pages/tabs1/tabs1.component';
import {LoginPageComponent} from './simple-pages/login-page/login-page.component';
import {HowDoWeWinTogetherComponent} from './simple-pages/how-do-we-win-together/how-do-we-win-together.component';
import {TermsAndConditionsComponent} from './simple-pages/terms-and-conditions/terms-and-conditions.component';
import {WhatDoYouNeedToKnowAboutUsComponent} from './simple-pages/what-do-you-need-to-know-about-us/what-do-you-need-to-know-about-us.component';
import {RegPagComponent} from './simple-pages/reg-pag/reg-pag.component';
import {NotFoundComponent} from './components/general/not-found/not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyResultsComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-dashboard/my-results.component';
import {MyPostsComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-posts/my-posts.component';
import {MyProfitComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-profit/my-profit.component';
import {MyMessagesComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-messages/my-messages.component';
import {MySettingsComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-settings/my-settings.component';
import {INeedAdvertisingComponent} from './dashboard/pagesForDashboard/secondGrupPages/i-need-advertising/i-need-advertising.component';
import {ReceiveTheMoneyComponent} from './dashboard/pagesForDashboard/secondGrupPages/receive-the-money/receive-the-money.component';
import {EnterMoneyComponent} from './dashboard/pagesForDashboard/secondGrupPages/enter-money/enter-money.component';
import {CustomerSupportComponent} from './dashboard/pagesForDashboard/thirdGrupPages/customer-support/customer-support.component';
import {HelpComponent} from './dashboard/pagesForDashboard/thirdGrupPages/help/help.component';
import {ConfirmMailComponent} from './simple-pages/reg-pag/confirm-mail/confirm-mail.component';
import {AddPostComponent} from './simple-pages/add-post/add-post.component';




const routes: Routes = [
  {path: '', component: Tabs1Component},
  {path: 'loggingIn', component: LoginPageComponent},
  {path: 'registration', component: RegPagComponent},
  {path: 'confirm-mail', component: ConfirmMailComponent },
  {path: 'how-do-we-win-togetherx', component: HowDoWeWinTogetherComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'what-do-you-need-to-know-about-us', component: WhatDoYouNeedToKnowAboutUsComponent},
  {path: 'customerSupport', component: CustomerSupportComponent},
  {path: 'help', component: HelpComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: MyResultsComponent },
      { path: 'myPosts', component: MyPostsComponent },
      { path: 'myProfit', component: MyProfitComponent },
      { path: 'myMessages', component: MyMessagesComponent },
      { path: 'mySettings', component: MySettingsComponent },
      { path: 'iNeedAdvertising', component: INeedAdvertisingComponent },
      { path: 'receiveTheMoney', component: ReceiveTheMoneyComponent },
      { path: 'enterMoney', component: EnterMoneyComponent },
    ]},

  // Not Found
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
