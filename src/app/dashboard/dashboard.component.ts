import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router) { }
  lS =  JSON.parse(localStorage.getItem('currentUser'));
  ngOnInit(): void {
  }

  goMyDashboard(): void {
    this.router.navigate (['/dashboard/']);

  }

  goMyPosts(): void {
    this.router.navigate(['/dashboard/myPosts'] );
  }

  goMyMessages(): void {
    this.router.navigate(['/dashboard/myMessages'] );
  }

  goMySetiings(): void {
    this.router.navigate(['/dashboard/mySettings'] );
  }

  goMyProfit(): void {
    this.router.navigate(['/dashboard/myProfit']);
  }
  goINeedAdvertising(): void {
    this.router.navigate(['/dashboard/iNeedAdvertising'] );
  }

  goReceiveTheMoney(): void {
    this.router.navigate(['/dashboard/receiveTheMoney'] );

  }

  goEnterMoney(): void {
    this.router.navigate(['/dashboard/enterMoney'] );

  }

  goTermsAndConditions(): void {
    this.router.navigate(['/terms-and-conditions'] );

  }

  goCustomerSuport(): void {
    this.router.navigate(['/customerSupport'] );

  }

  goHelp(): void {
    this.router.navigate(['/help'] );

  }

  goAddPost(): void {
    this.router.navigate(['/add-post'] );
  }
}
