import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Tabs1Component} from './simple-pages/Table-on-the-main-page/tabs1.component';
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
import {INeedAdvertisingComponent} from './dashboard/pagesForDashboard/secondGrupPages/i-need-advertising/i-need-advertising.component';
import {ReceiveTheMoneyComponent} from './dashboard/pagesForDashboard/secondGrupPages/receive-the-money/receive-the-money.component';
import {EnterMoneyComponent} from './dashboard/pagesForDashboard/secondGrupPages/enter-money/enter-money.component';
import {CustomerSupportComponent} from './dashboard/pagesForDashboard/thirdGrupPages/customer-support/customer-support.component';
import {HelpComponent} from './dashboard/pagesForDashboard/thirdGrupPages/help/help.component';
import {ConfirmMailComponent} from './simple-pages/reg-pag/confirm-mail/confirm-mail.component';
// import {AddPostComponent} from './simple-pages/add-post/add-post.component';
import {PostPageComponent} from './post-page/post-page.component';
import {MySettingsComponent} from './dashboard/pagesForDashboard/firstGrupPages/my-settings/my-settings.component';
import {AuthGuard} from './common/_guard/auth.guard';
import {NotAuthComponent} from './common/_notAuthPage/not-auth/not-auth.component';
import {AddPostPageComponent} from './dashboard/add-post-page/add-post-page.component';


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
  // {path: 'add-post', component: AddPostComponent},
  {path: 'post/:id', component: PostPageComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: MyResultsComponent },
      { path: 'myPosts', component: MyPostsComponent },
      { path: 'myProfit', component: MyProfitComponent },
      { path: 'myMessages', component: MyMessagesComponent },
      { path: 'mySettings', component: MySettingsComponent },
      { path: 'iNeedAdvertising', component: INeedAdvertisingComponent },
      { path: 'receiveTheMoney', component: ReceiveTheMoneyComponent },
      { path: 'enterMoney', component: EnterMoneyComponent },
      {path: 'add-post', component: AddPostPageComponent},

    ]},

  // Not Auth
  {path: 'notAuth', component: NotAuthComponent},

  // Not Found
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
