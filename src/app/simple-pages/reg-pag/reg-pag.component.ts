import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {first} from 'rxjs/operators';
import {NavigationBarComponent} from '../../components/general/navigation-bar/navigation-bar.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistrationService} from './_service/registarion.service';

@Component({
  selector: 'app-reg-pag',
  templateUrl: './reg-pag.component.html',
  styleUrls: ['./reg-pag.component.css']
})
export class RegPagComponent implements OnInit {
  RegistrationForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  checked: boolean;

  constructor(
    private navBar: NavigationBarComponent,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
    private dialog: MatDialog
  ) {
    // redirect to home if already logged in
    if (this.registrationService.currentUserValue) {
      // this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): any {
    this.RegistrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',  Validators.minLength(8)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.RegistrationForm.controls; }

  onSubmit(): any {
    this.submitted = true;

    if (this.RegistrationForm.invalid) {
      return;
    }

    this.loading = true;
    this.registrationService.registration(this.f.email.value, this.f.firstName.value, this.f.lastName.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.success) {
            console.log('sad');
            this.router.navigate(['confirm-mail']);
        }else {
          this.error = data.data.message;
          this.loading = false;
        }
        });
  }



openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }

  helpRegAccount(): void {
    this.router.navigate(['help']);
  }

  // tslint:disable-next-line:typedef
  changeValue(value) {
  this.checked = !value;
}}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogElementsExampleDialog {}
