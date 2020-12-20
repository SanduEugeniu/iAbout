import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HorizontalNavigationBarComponent } from './componentsForDashboard/horizontal-navigation-bar/horizontal-navigation-bar.component';



import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MyResultsComponent} from './pagesForDashboard/firstGrupPages/my-dashboard/my-results.component';
import {MyPostsComponent} from './pagesForDashboard/firstGrupPages/my-posts/my-posts.component';
import {MySettingsComponent} from './pagesForDashboard/firstGrupPages/my-settings/my-settings.component';
import {MyProfitComponent} from './pagesForDashboard/firstGrupPages/my-profit/my-profit.component';
import {MyMessagesComponent} from './pagesForDashboard/firstGrupPages/my-messages/my-messages.component';
import {RouterModule} from '@angular/router';
import { INeedAdvertisingComponent } from './pagesForDashboard/secondGrupPages/i-need-advertising/i-need-advertising.component';
import { ReceiveTheMoneyComponent } from './pagesForDashboard/secondGrupPages/receive-the-money/receive-the-money.component';
import { EnterMoneyComponent } from './pagesForDashboard/secondGrupPages/enter-money/enter-money.component';
import { TermsAndConditionsComponent } from './pagesForDashboard/thirdGrupPages/terms-and-conditions/terms-and-conditions.component';
import { CustomerSupportComponent } from './pagesForDashboard/thirdGrupPages/customer-support/customer-support.component';
import { HelpComponent } from './pagesForDashboard/thirdGrupPages/help/help.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HorizontalNavigationBarComponent,
    MyResultsComponent,
    MyPostsComponent,
    MySettingsComponent,
    MyProfitComponent,
    MyMessagesComponent,
    INeedAdvertisingComponent,
    ReceiveTheMoneyComponent,
    EnterMoneyComponent,
    TermsAndConditionsComponent,
    CustomerSupportComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ]
})
export class DashboardModule { }
