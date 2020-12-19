import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor( private router: Router
  ) {}


  registrationAccount(): void {
    this.router.navigate (['/registration']);

  }

  loginAccount(): void {
    this.router.navigate (['/loggingIn']);

  }
}
