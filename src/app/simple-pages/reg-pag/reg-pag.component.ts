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
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): any {
    this.RegistrationForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): any {
    this.submitted = true;

    if (this.RegistrationForm.invalid) {
      return;
    }

    this.loading = true;
    this.registrationService.registration(this.RegistrationForm.controls.email.value,
                                          this.RegistrationForm.controls.firstName.value,
                                          this.RegistrationForm.controls.lastName.value,
                                          this.RegistrationForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.success) {
            console.log('sad');
            this.router.navigate(['confirm-mail']);
        }else {
            this.loading = false;
            this.error = data.data.message;
        }
        },
        this.loading = false
  );
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
