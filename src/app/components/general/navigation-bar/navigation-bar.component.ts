import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from '../../../simple-pages/login-page/_service/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  auth = false;

  constructor(private router: Router,
              private authS: AuthenticationService
  ) {
  }

  registrationAccount(): void {
    this.router.navigate(['/registration']);

  }

  loginAccount(): void {
    this.router.navigate(['/loggingIn']);

  }

  logautAccount(): void {
    this.authS.logout();
    this.router.navigate(['/']);

  }

  ngOnInit(): void {
    // if (!localStorage.getItem('currentUser')) {
    // } else {
    //   this.auth = JSON.parse(localStorage.getItem('currentUser')).success;
    // }
  }

  reload(): void {
    // this.router.navigate(['dashboard']);
    console.log(this.auth);
  }
}
