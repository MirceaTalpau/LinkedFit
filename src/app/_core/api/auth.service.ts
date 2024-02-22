import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../models/auth/LoginInfo';
import { ResetPassword } from '../models/auth/ResetPassword';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = "https://localhost:44306/api/v1"

  constructor(
    private http: HttpClient
  ) { }
  login(user: LoginInfo): Observable<any>{
    return this.http.post(`${this.API}/auth/login`, user);
  }
  loginGmail(user: any): Observable<any>{
    return this.http.post(`${this.API}/auth/login-google`, user);
  }
  register(user: any): Observable<any>{
    return this.http.post(`${this.API}/auth/register`, user);
  }
  confirmEmail(email: string, token: string): Observable<any>{
    return this.http.post(`${this.API}/account/confirm/email/${email}/${token}`, null);
  }
  forgotPassword(email: string): Observable<any>{
    return this.http.post(`${this.API}/account/reset/password/${email}`, null);
  }
  resendEmailConfirmation(email: string): Observable<any>{
    return this.http.get(`${this.API}/account/resend/email/${email}`);
  }
  resetPassword(token:string, newPassword:ResetPassword): Observable<any>{
    return this.http.post(`${this.API}/account/confirm/password/${token}`, newPassword);
  }
  verifyResetPasswordToken(token:string): Observable<any>{
    return this.http.get(`${this.API}/account/reset/password/${token}`);
  }
}
