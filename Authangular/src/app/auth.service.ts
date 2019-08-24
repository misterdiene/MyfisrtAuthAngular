import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _registerUrl = 'http://localhost:8000/api/register';
  // tslint:disable-next-line: variable-name
  private _loginUrl = 'http://localhost:8000/api/login_check';

  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    // tslint:disable-next-line: whitespace
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }

}
