import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Registration } from '../_model/registration.mode';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private currentUserSubject: BehaviorSubject<Registration>;
  public currentUser: Observable<Registration>;
  private router: Router;
  user: any;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Registration>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Registration {
    return this.currentUserSubject.value;
  }

  registration(email: string, password: string, firstName: string, lastName: string): any {
    return this.http.post<any>(`${environment.apiUrl}/auth/email/register`, { email, password, firstName, lastName })
      .pipe(map(user => {
        return user;
      }));

  }

}
